#!/bin/bash

# Luna Super Machine - Raw NVMe Storage Benchmark
# This script tests the NVMe drive directly (not through filesystem)
# WARNING: This is safer than testing /dev/nvme0n1 directly as it uses a large file

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root (sudo)"
    exit 1
fi

# Create results directory
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
RESULTS_DIR="../results/storage"
mkdir -p "$RESULTS_DIR"

print_header "Luna Super Machine - Raw NVMe Storage Benchmark"

# Get NVMe device info
print_info "Detecting NVMe device..."
NVME_DEVICE=$(lsblk -d -n -o NAME,TYPE | grep nvme | head -1 | awk '{print $1}')
if [ -z "$NVME_DEVICE" ]; then
    print_error "No NVMe device found"
    exit 1
fi
print_success "Found NVMe device: /dev/$NVME_DEVICE"

# Get motherboard info
print_info "Getting motherboard information..."
dmidecode -t baseboard > "$RESULTS_DIR/motherboard_info_${TIMESTAMP}.txt" 2>&1 || true
dmidecode -t 2 >> "$RESULTS_DIR/motherboard_info_${TIMESTAMP}.txt" 2>&1 || true

# Get NVMe slot information
print_info "Getting NVMe slot information..."
lspci -vv | grep -A 30 "Non-Volatile" > "$RESULTS_DIR/nvme_pcie_info_${TIMESTAMP}.txt" 2>&1

# Check current I/O scheduler
print_info "Current I/O scheduler:"
cat /sys/block/$NVME_DEVICE/queue/scheduler
echo "I/O Scheduler: $(cat /sys/block/$NVME_DEVICE/queue/scheduler)" > "$RESULTS_DIR/io_scheduler_${TIMESTAMP}.txt"

# Get NVMe smart info
print_info "Getting NVMe SMART data..."
if command -v nvme &> /dev/null; then
    nvme smart-log /dev/$NVME_DEVICE > "$RESULTS_DIR/nvme_smart_${TIMESTAMP}.txt" 2>&1 || true
fi

echo ""
print_header "Running FIO Benchmarks (Direct I/O on large file)"
echo ""
print_info "Test file location: /tmp/fio-nvme-test (10GB)"
print_info "This tests the NVMe through the filesystem with direct I/O"
echo ""

# Test 1: Sequential Read with higher queue depth
print_info "Test 1: Sequential Read (128KB blocks, queue depth 32, libaio)..."
fio --name=seq-read-direct \
    --filename=/tmp/fio-nvme-test \
    --size=10G \
    --rw=read \
    --bs=128k \
    --ioengine=libaio \
    --iodepth=32 \
    --direct=1 \
    --numjobs=1 \
    --time_based \
    --runtime=30 \
    --group_reporting \
    --output="$RESULTS_DIR/fio_seq_read_direct_${TIMESTAMP}.txt" 2>&1
print_success "Sequential read complete"

# Test 2: Sequential Write with higher queue depth
print_info "Test 2: Sequential Write (128KB blocks, queue depth 32, libaio)..."
fio --name=seq-write-direct \
    --filename=/tmp/fio-nvme-test \
    --size=10G \
    --rw=write \
    --bs=128k \
    --ioengine=libaio \
    --iodepth=32 \
    --direct=1 \
    --numjobs=1 \
    --time_based \
    --runtime=30 \
    --group_reporting \
    --output="$RESULTS_DIR/fio_seq_write_direct_${TIMESTAMP}.txt" 2>&1
print_success "Sequential write complete"

# Test 3: Sequential Read with 1MB blocks (closer to spec testing)
print_info "Test 3: Sequential Read (1MB blocks, queue depth 64, libaio)..."
fio --name=seq-read-1m \
    --filename=/tmp/fio-nvme-test \
    --size=10G \
    --rw=read \
    --bs=1M \
    --ioengine=libaio \
    --iodepth=64 \
    --direct=1 \
    --numjobs=1 \
    --time_based \
    --runtime=30 \
    --group_reporting \
    --output="$RESULTS_DIR/fio_seq_read_1m_${TIMESTAMP}.txt" 2>&1
print_success "Sequential read (1MB) complete"

# Test 4: Sequential Write with 1MB blocks
print_info "Test 4: Sequential Write (1MB blocks, queue depth 64, libaio)..."
fio --name=seq-write-1m \
    --filename=/tmp/fio-nvme-test \
    --size=10G \
    --rw=write \
    --bs=1M \
    --ioengine=libaio \
    --iodepth=64 \
    --direct=1 \
    --numjobs=1 \
    --time_based \
    --runtime=30 \
    --group_reporting \
    --output="$RESULTS_DIR/fio_seq_write_1m_${TIMESTAMP}.txt" 2>&1
print_success "Sequential write (1MB) complete"

# Clean up test file
rm -f /tmp/fio-nvme-test

echo ""
print_header "Benchmark Complete"
echo ""
print_info "Results saved to: $RESULTS_DIR"
echo ""

# Display summary
print_header "Quick Summary"
echo ""

if [ -f "$RESULTS_DIR/fio_seq_read_direct_${TIMESTAMP}.txt" ]; then
    echo "Sequential Read (128KB, QD32):"
    grep "READ:" "$RESULTS_DIR/fio_seq_read_direct_${TIMESTAMP}.txt" | grep -o "BW=[^,]*" || echo "  (check results file)"
fi

if [ -f "$RESULTS_DIR/fio_seq_write_direct_${TIMESTAMP}.txt" ]; then
    echo "Sequential Write (128KB, QD32):"
    grep "WRITE:" "$RESULTS_DIR/fio_seq_write_direct_${TIMESTAMP}.txt" | grep -o "BW=[^,]*" || echo "  (check results file)"
fi

if [ -f "$RESULTS_DIR/fio_seq_read_1m_${TIMESTAMP}.txt" ]; then
    echo "Sequential Read (1MB, QD64):"
    grep "READ:" "$RESULTS_DIR/fio_seq_read_1m_${TIMESTAMP}.txt" | grep -o "BW=[^,]*" || echo "  (check results file)"
fi

if [ -f "$RESULTS_DIR/fio_seq_write_1m_${TIMESTAMP}.txt" ]; then
    echo "Sequential Write (1MB, QD64):"
    grep "WRITE:" "$RESULTS_DIR/fio_seq_write_1m_${TIMESTAMP}.txt" | grep -o "BW=[^,]*" || echo "  (check results file)"
fi

echo ""
print_info "PCIe Link Status:"
grep "LnkSta:" "$RESULTS_DIR/nvme_pcie_info_${TIMESTAMP}.txt" || echo "  (check results file)"

echo ""
print_success "All tests complete!"

