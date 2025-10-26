#!/bin/bash
################################################################################
# Luna Super Machine - Complete Benchmark Suite
# 
# This script runs comprehensive benchmarks across all system components:
# - CPU (Ryzen 9 5900X)
# - GPU (RTX 3060 12GB)
# - Storage (Kingston KC3000 2TB)
# - Memory (64GB DDR4-3200)
# - System (Overall performance)
#
# Usage: ./run-all-benchmarks.sh [options]
# Options:
#   --quick     Run quick benchmarks only (5-10 minutes)
#   --full      Run full benchmark suite (30-60 minutes)
#   --cpu-only  Run CPU benchmarks only
#   --gpu-only  Run GPU benchmarks only
#   --help      Show this help message
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directories
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BENCHMARK_DIR="$(dirname "$SCRIPT_DIR")"
RESULTS_DIR="$BENCHMARK_DIR/results"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create results directories
mkdir -p "$RESULTS_DIR"/{cpu,gpu,storage,memory,system}

# Log file
LOG_FILE="$RESULTS_DIR/benchmark_run_${TIMESTAMP}.log"

################################################################################
# Helper Functions
################################################################################

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

check_command() {
    if ! command -v "$1" &> /dev/null; then
        print_error "$1 is not installed"
        return 1
    fi
    return 0
}

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

################################################################################
# System Check
################################################################################

check_system() {
    print_header "System Check"
    
    log "Checking system requirements..."
    
    # Check if running on Ubuntu
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        log "OS: $NAME $VERSION"
    fi
    
    # Check CPU
    CPU_MODEL=$(lscpu | grep "Model name" | cut -d: -f2 | xargs)
    log "CPU: $CPU_MODEL"
    
    # Check GPU
    if check_command nvidia-smi; then
        GPU_MODEL=$(nvidia-smi --query-gpu=name --format=csv,noheader)
        log "GPU: $GPU_MODEL"
    fi
    
    # Check memory
    TOTAL_MEM=$(free -h | awk '/^Mem:/ {print $2}')
    log "Memory: $TOTAL_MEM"
    
    # Check storage
    NVME_INFO=$(sudo nvme list 2>/dev/null | grep nvme || echo "NVMe not detected")
    log "Storage: $NVME_INFO"
    
    echo ""
}

################################################################################
# Install Dependencies
################################################################################

install_dependencies() {
    print_header "Checking Dependencies"
    
    MISSING_DEPS=()
    
    # Check for required tools
    REQUIRED_TOOLS=(
        "sysbench"
        "stress-ng"
        "fio"
        "7z"
        "sensors"
        "nvidia-smi"
        "nvme"
    )
    
    for tool in "${REQUIRED_TOOLS[@]}"; do
        if ! check_command "$tool"; then
            MISSING_DEPS+=("$tool")
        fi
    done
    
    if [ ${#MISSING_DEPS[@]} -gt 0 ]; then
        print_warning "Missing dependencies: ${MISSING_DEPS[*]}"
        print_info "Install with: sudo apt install sysbench stress-ng fio p7zip-full lm-sensors nvme-cli"
        read -p "Install missing dependencies now? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            sudo apt update
            sudo apt install -y sysbench stress-ng fio p7zip-full lm-sensors nvme-cli
        else
            print_error "Cannot proceed without required dependencies"
            exit 1
        fi
    else
        print_success "All dependencies installed"
    fi
    
    echo ""
}

################################################################################
# CPU Benchmarks
################################################################################

run_cpu_benchmarks() {
    print_header "CPU Benchmarks - AMD Ryzen 9 5900X"
    
    log "Starting CPU benchmarks..."
    
    # Sysbench CPU
    print_info "Running Sysbench CPU (single-thread)..."
    sysbench cpu --threads=1 --time=30 run > "$RESULTS_DIR/cpu/sysbench_1t_${TIMESTAMP}.txt" 2>&1
    print_success "Sysbench single-thread complete"
    
    print_info "Running Sysbench CPU (multi-thread)..."
    sysbench cpu --threads=24 --time=30 run > "$RESULTS_DIR/cpu/sysbench_24t_${TIMESTAMP}.txt" 2>&1
    print_success "Sysbench multi-thread complete"
    
    # 7-Zip benchmark
    if check_command 7z; then
        print_info "Running 7-Zip benchmark..."
        7z b -mmt24 > "$RESULTS_DIR/cpu/7zip_${TIMESTAMP}.txt" 2>&1
        print_success "7-Zip benchmark complete"
    fi
    
    # OpenSSL
    if check_command openssl; then
        print_info "Running OpenSSL benchmark..."
        openssl speed -multi $(nproc) aes-256-cbc > "$RESULTS_DIR/cpu/openssl_${TIMESTAMP}.txt" 2>&1
        print_success "OpenSSL benchmark complete"
    fi
    
    log "CPU benchmarks complete"
    echo ""
}

################################################################################
# GPU Benchmarks
################################################################################

run_gpu_benchmarks() {
    print_header "GPU Benchmarks - NVIDIA RTX 3060 12GB"
    
    log "Starting GPU benchmarks..."
    
    # Check NVIDIA driver
    if ! check_command nvidia-smi; then
        print_error "NVIDIA driver not found. Skipping GPU benchmarks."
        return
    fi
    
    # Save GPU info
    nvidia-smi > "$RESULTS_DIR/gpu/gpu_info_${TIMESTAMP}.txt" 2>&1
    
    # GLMark2
    if check_command glmark2; then
        print_info "Running GLMark2..."
        glmark2 --fullscreen > "$RESULTS_DIR/gpu/glmark2_${TIMESTAMP}.txt" 2>&1
        print_success "GLMark2 complete"
    else
        print_warning "GLMark2 not installed. Skipping."
    fi
    
    # Hashcat benchmark
    if check_command hashcat; then
        print_info "Running Hashcat benchmark..."
        hashcat -b > "$RESULTS_DIR/gpu/hashcat_${TIMESTAMP}.txt" 2>&1
        print_success "Hashcat benchmark complete"
    else
        print_warning "Hashcat not installed. Skipping."
    fi
    
    log "GPU benchmarks complete"
    echo ""
}

################################################################################
# Storage Benchmarks
################################################################################

run_storage_benchmarks() {
    print_header "Storage Benchmarks - Kingston KC3000 2TB"
    
    log "Starting storage benchmarks..."
    
    # NVMe info
    if check_command nvme; then
        sudo nvme list > "$RESULTS_DIR/storage/nvme_info_${TIMESTAMP}.txt" 2>&1
        sudo nvme smart-log /dev/nvme0 >> "$RESULTS_DIR/storage/nvme_info_${TIMESTAMP}.txt" 2>&1
    fi
    
    # FIO sequential read
    print_info "Running FIO sequential read test..."
    sudo fio --name=seq-read \
        --filename=/tmp/fio-test-$$ \
        --size=1G \
        --rw=read \
        --bs=128k \
        --direct=1 \
        --numjobs=1 \
        --time_based \
        --runtime=30 \
        --group_reporting \
        --output="$RESULTS_DIR/storage/fio_seq_read_${TIMESTAMP}.txt" 2>&1
    print_success "Sequential read complete"
    
    # FIO sequential write
    print_info "Running FIO sequential write test..."
    sudo fio --name=seq-write \
        --filename=/tmp/fio-test-$$ \
        --size=1G \
        --rw=write \
        --bs=128k \
        --direct=1 \
        --numjobs=1 \
        --time_based \
        --runtime=30 \
        --group_reporting \
        --output="$RESULTS_DIR/storage/fio_seq_write_${TIMESTAMP}.txt" 2>&1
    print_success "Sequential write complete"
    
    # FIO random read 4K
    print_info "Running FIO random read test..."
    sudo fio --name=rand-read-4k \
        --filename=/tmp/fio-test-$$ \
        --size=1G \
        --rw=randread \
        --bs=4k \
        --direct=1 \
        --numjobs=4 \
        --time_based \
        --runtime=30 \
        --group_reporting \
        --ioengine=libaio \
        --iodepth=32 \
        --output="$RESULTS_DIR/storage/fio_rand_read_${TIMESTAMP}.txt" 2>&1
    print_success "Random read complete"
    
    # Cleanup
    sudo rm -f /tmp/fio-test-$$
    
    log "Storage benchmarks complete"
    echo ""
}

################################################################################
# Memory Benchmarks
################################################################################

run_memory_benchmarks() {
    print_header "Memory Benchmarks - 64GB DDR4-3200"
    
    log "Starting memory benchmarks..."
    
    # Memory info
    sudo dmidecode -t memory > "$RESULTS_DIR/memory/memory_info_${TIMESTAMP}.txt" 2>&1
    free -h >> "$RESULTS_DIR/memory/memory_info_${TIMESTAMP}.txt" 2>&1
    
    # Sysbench memory
    print_info "Running Sysbench memory (sequential)..."
    sysbench memory --memory-block-size=1M --memory-total-size=50G run \
        > "$RESULTS_DIR/memory/sysbench_seq_${TIMESTAMP}.txt" 2>&1
    print_success "Sequential memory test complete"
    
    print_info "Running Sysbench memory (random)..."
    sysbench memory --memory-block-size=1M --memory-total-size=50G \
        --memory-access-mode=rnd run \
        > "$RESULTS_DIR/memory/sysbench_rnd_${TIMESTAMP}.txt" 2>&1
    print_success "Random memory test complete"
    
    # STREAM benchmark
    if check_command stream; then
        print_info "Running STREAM benchmark..."
        stream > "$RESULTS_DIR/memory/stream_${TIMESTAMP}.txt" 2>&1
        print_success "STREAM benchmark complete"
    else
        print_warning "STREAM not installed. Skipping."
    fi
    
    log "Memory benchmarks complete"
    echo ""
}

################################################################################
# System Benchmarks
################################################################################

run_system_benchmarks() {
    print_header "System Benchmarks - Overall Performance"
    
    log "Starting system benchmarks..."
    
    SYSTEM_REPORT="$RESULTS_DIR/system/system_report_${TIMESTAMP}.txt"
    
    # System information
    {
        echo "=== Luna Super Machine - System Report ==="
        echo "Timestamp: $(date)"
        echo ""
        echo "=== OS Information ==="
        uname -a
        lsb_release -a 2>/dev/null || cat /etc/os-release
        echo ""
        echo "=== CPU Information ==="
        lscpu
        echo ""
        echo "=== Memory Information ==="
        free -h
        echo ""
        echo "=== Storage Information ==="
        df -h
        echo ""
        echo "=== GPU Information ==="
        nvidia-smi 2>/dev/null || echo "NVIDIA GPU not detected"
        echo ""
        echo "=== Boot Time ==="
        systemd-analyze 2>/dev/null || echo "systemd-analyze not available"
        echo ""
        echo "=== Temperatures ==="
        sensors 2>/dev/null || echo "lm-sensors not configured"
    } > "$SYSTEM_REPORT"
    
    print_success "System report generated"
    
    log "System benchmarks complete"
    echo ""
}

################################################################################
# Generate Summary Report
################################################################################

generate_summary() {
    print_header "Generating Summary Report"
    
    SUMMARY_FILE="$RESULTS_DIR/benchmark_summary_${TIMESTAMP}.txt"
    
    {
        echo "╔════════════════════════════════════════════════════════════════╗"
        echo "║         LUNA SUPER MACHINE - BENCHMARK SUMMARY                ║"
        echo "╚════════════════════════════════════════════════════════════════╝"
        echo ""
        echo "Benchmark Date: $(date)"
        echo "Results Directory: $RESULTS_DIR"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "SYSTEM SPECIFICATIONS"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo "CPU:     AMD Ryzen 9 5900X (12C/24T, 3.7-4.8 GHz)"
        echo "GPU:     ASUS TUF Gaming RTX 3060 12GB GDDR6"
        echo "RAM:     Corsair Vengeance LPX 64GB DDR4-3200 CL16"
        echo "Storage: Kingston KC3000 2TB NVMe PCIe 4.0"
        echo "Mobo:    ASUS TUF Gaming B550-PLUS (WI-FI)"
        echo "Cooling: Corsair H60 120mm AIO"
        echo "PSU:     Corsair RM850x 850W 80+ Gold"
        echo "OS:      Ubuntu 22.04.5 LTS"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "BENCHMARK RESULTS"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        # Extract key results
        if [ -f "$RESULTS_DIR/cpu/sysbench_24t_${TIMESTAMP}.txt" ]; then
            echo "CPU Performance:"
            grep "events per second" "$RESULTS_DIR/cpu/sysbench_24t_${TIMESTAMP}.txt" | head -1
        fi
        
        if [ -f "$RESULTS_DIR/storage/fio_seq_read_${TIMESTAMP}.txt" ]; then
            echo ""
            echo "Storage Performance:"
            grep "READ:" "$RESULTS_DIR/storage/fio_seq_read_${TIMESTAMP}.txt" | grep -o "BW=[^,]*"
        fi
        
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "DETAILED RESULTS"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo "All detailed results are available in:"
        echo "  $RESULTS_DIR"
        echo ""
        echo "View individual results:"
        echo "  CPU:     $RESULTS_DIR/cpu/"
        echo "  GPU:     $RESULTS_DIR/gpu/"
        echo "  Storage: $RESULTS_DIR/storage/"
        echo "  Memory:  $RESULTS_DIR/memory/"
        echo "  System:  $RESULTS_DIR/system/"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        
    } > "$SUMMARY_FILE"
    
    # Display summary
    cat "$SUMMARY_FILE"
    
    # Create symlink to latest
    ln -sf "$SUMMARY_FILE" "$RESULTS_DIR/latest-benchmark-summary.txt"
    
    print_success "Summary report saved to: $SUMMARY_FILE"
    echo ""
}

################################################################################
# Main Execution
################################################################################

main() {
    clear
    
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                                                                ║"
    echo "║           LUNA SUPER MACHINE - BENCHMARK SUITE                ║"
    echo "║                                                                ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""
    
    # Parse arguments
    MODE="full"
    if [ "$1" == "--quick" ]; then
        MODE="quick"
    elif [ "$1" == "--cpu-only" ]; then
        MODE="cpu"
    elif [ "$1" == "--gpu-only" ]; then
        MODE="gpu"
    elif [ "$1" == "--help" ]; then
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --quick     Run quick benchmarks (5-10 minutes)"
        echo "  --full      Run full benchmark suite (default)"
        echo "  --cpu-only  Run CPU benchmarks only"
        echo "  --gpu-only  Run GPU benchmarks only"
        echo "  --help      Show this help message"
        exit 0
    fi
    
    log "Starting benchmark suite in $MODE mode"
    
    # Run checks
    check_system
    install_dependencies
    
    # Run benchmarks based on mode
    case $MODE in
        quick)
            run_cpu_benchmarks
            run_storage_benchmarks
            ;;
        cpu)
            run_cpu_benchmarks
            ;;
        gpu)
            run_gpu_benchmarks
            ;;
        *)
            run_cpu_benchmarks
            run_gpu_benchmarks
            run_storage_benchmarks
            run_memory_benchmarks
            run_system_benchmarks
            ;;
    esac
    
    # Generate summary
    generate_summary
    
    print_header "Benchmark Suite Complete!"
    print_success "All benchmarks completed successfully"
    print_info "Results saved to: $RESULTS_DIR"
    print_info "Summary: $RESULTS_DIR/latest-benchmark-summary.txt"
    echo ""
}

# Run main function
main "$@"

