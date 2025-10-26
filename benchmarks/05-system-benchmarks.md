# System Benchmarks - Overall Performance

## 🎯 Overview

This guide covers comprehensive system-wide benchmarks including boot time, power consumption, thermal performance, and overall system responsiveness of the Luna Super Machine.

---

## 🧪 System-Wide Benchmark Tests

### 1. Boot Time Analysis

**Purpose**: Measure system startup performance

```bash
# Check boot time
systemd-analyze

# Detailed boot breakdown
systemd-analyze blame

# Critical chain analysis
systemd-analyze critical-chain

# Plot boot timeline (generates SVG)
systemd-analyze plot > results/system/boot-timeline_$(date +%Y%m%d).svg
```

**Expected Results**:
- **Firmware**: 3-8 seconds
- **Loader**: 1-2 seconds
- **Kernel**: 2-4 seconds
- **Userspace**: 5-10 seconds
- **Total Boot Time**: 15-25 seconds (to login)

---

### 2. Phoronix Test Suite - Comprehensive System Benchmark

**Purpose**: Industry-standard comprehensive benchmarking

```bash
# Install Phoronix Test Suite
sudo apt install phoronix-test-suite

# Run system test suite
phoronix-test-suite benchmark pts/system

# Specific comprehensive tests
phoronix-test-suite benchmark pts/desktop-graphics
phoronix-test-suite benchmark pts/workstation

# Custom test suite
phoronix-test-suite benchmark \
    pts/build-linux-kernel \
    pts/compress-7zip \
    pts/x264 \
    pts/blender

# Save results
phoronix-test-suite result-file-to-text results/system/phoronix_$(date +%Y%m%d_%H%M%S)
```

---

### 3. Power Consumption Monitoring

**Purpose**: Measure system power usage

```bash
# Install powertop
sudo apt install powertop

# Run powertop calibration (takes ~15 minutes)
sudo powertop --calibrate

# Monitor power usage
sudo powertop

# Generate HTML report
sudo powertop --html=results/system/powertop_$(date +%Y%m%d_%H%M%S).html --time=60

# Install powerstat for detailed monitoring
sudo apt install powerstat

# Monitor power for 5 minutes
sudo powerstat -d 0 -R 300 1 > results/system/powerstat_$(date +%Y%m%d_%H%M%S).txt
```

**Expected Power Consumption**:
- **Idle (Desktop)**: 60-90W
- **Web Browsing**: 100-130W
- **Video Playback (4K)**: 120-150W
- **Gaming (1080p)**: 300-400W
- **Full Load (CPU+GPU)**: 450-550W
- **Peak (Stress Test)**: 500-600W

**PSU Headroom**: 850W PSU provides excellent headroom (40-50% typical load)

---

### 4. Thermal Performance Testing

**Purpose**: Monitor system temperatures under various loads

```bash
# Install monitoring tools
sudo apt install lm-sensors
sudo sensors-detect

# Real-time temperature monitoring
watch -n 1 sensors

# Install s-tui for interactive monitoring
sudo apt install s-tui stress
s-tui

# Log temperatures during stress test
cat > thermal_stress_test.sh << 'EOF'
#!/bin/bash
RESULTS_DIR="results/system"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$RESULTS_DIR/thermal_stress_${TIMESTAMP}.log"

echo "Starting thermal stress test..."
echo "Logging to: $LOG_FILE"

# Start stress test in background
stress-ng --cpu 24 --timeout 600s &
STRESS_PID=$!

# Monitor temperatures
for i in {1..600}; do
    echo "=== Time: ${i}s ===" >> "$LOG_FILE"
    sensors >> "$LOG_FILE"
    nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader >> "$LOG_FILE"
    sleep 1
done

wait $STRESS_PID
echo "Stress test complete!"
EOF

chmod +x thermal_stress_test.sh
./thermal_stress_test.sh
```

**Expected Temperatures (Under Load)**:
- **CPU (Ryzen 9 5900X)**: 70-85°C (with Corsair H60 AIO)
- **GPU (RTX 3060)**: 65-78°C
- **Motherboard**: 40-55°C
- **NVMe SSD**: 50-65°C
- **VRM**: 60-75°C

**Idle Temperatures**:
- **CPU**: 35-45°C
- **GPU**: 30-40°C
- **Motherboard**: 30-40°C
- **NVMe**: 35-45°C

---

### 5. System Responsiveness Test

**Purpose**: Measure UI responsiveness and system latency

```bash
# Install latencytop
sudo apt install latencytop

# Monitor system latency
sudo latencytop

# Test disk I/O latency impact
sudo iotop -o

# Network latency
ping -c 100 8.8.8.8 | tail -1

# Context switch performance
perf bench sched messaging

# Scheduler latency
perf bench sched pipe
```

**Expected Results**:
- **Context Switches**: <5 microseconds
- **Scheduler Latency**: <10 microseconds
- **UI Response Time**: <16ms (60 FPS)

---

### 6. Multi-tasking Scenario Tests

**Purpose**: Test system under realistic heavy workloads

```bash
# Create multi-tasking stress test
cat > multitask_test.sh << 'EOF'
#!/bin/bash

echo "=== Luna Super Machine Multi-tasking Test ==="
echo "This simulates heavy multi-tasking workload"
echo ""

# Start background tasks
echo "Starting background tasks..."

# 1. CPU compilation task
(cd /tmp && git clone --depth=1 https://github.com/torvalds/linux.git && \
 cd linux && make defconfig && make -j12) &
COMPILE_PID=$!

# 2. Video encoding
(ffmpeg -i ~/Videos/test.mp4 -c:v libx264 -preset medium \
 /tmp/encoded.mp4 2>/dev/null) &
ENCODE_PID=$!

# 3. File compression
(tar -czf /tmp/backup.tar.gz ~/Documents 2>/dev/null) &
COMPRESS_PID=$!

# 4. Memory stress
stress-ng --vm 4 --vm-bytes 8G --timeout 300s &
MEM_PID=$!

# Monitor system performance
echo "Monitoring system performance for 5 minutes..."
for i in {1..60}; do
    echo "=== Minute $i ==="
    top -bn1 | head -20
    free -h
    sensors | grep -i temp
    sleep 60
done

# Cleanup
kill $COMPILE_PID $ENCODE_PID $COMPRESS_PID $MEM_PID 2>/dev/null
wait

echo "Multi-tasking test complete!"
EOF

chmod +x multitask_test.sh
```

**Expected Behavior**:
- All tasks run smoothly without system lag
- CPU utilization: 80-100%
- Memory usage: 30-50% (20-35GB)
- No thermal throttling
- System remains responsive

---

### 7. Network Performance

**Purpose**: Test network throughput and latency

```bash
# Install iperf3
sudo apt install iperf3

# Test local network speed (requires iperf3 server)
# On server: iperf3 -s
# On client:
iperf3 -c SERVER_IP -t 60

# Test disk to network speed
dd if=/dev/zero bs=1M count=1024 | ssh user@server "cat > /dev/null"

# WiFi performance (if using WiFi)
speedtest-cli

# Or install official speedtest
sudo apt install speedtest-cli
speedtest
```

**Expected Results (Gigabit Ethernet)**:
- **Throughput**: 940+ Mbps
- **Latency**: <1ms (local network)
- **WiFi 6 (if enabled)**: 600-900 Mbps

---

### 8. File System Performance

**Purpose**: Real-world file system operations

```bash
# Create file system benchmark
cat > filesystem_bench.sh << 'EOF'
#!/bin/bash

RESULTS_DIR="results/system"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
TEST_DIR="/tmp/fs_bench_$$"

mkdir -p "$TEST_DIR"
cd "$TEST_DIR"

echo "=== File System Benchmark ==="

# Test 1: Create many small files
echo "Test 1: Creating 50,000 small files..."
time for i in {1..50000}; do
    echo "test data $i" > "file_$i.txt"
done

# Test 2: List files
echo "Test 2: Listing files..."
time ls -la > /dev/null

# Test 3: Search files
echo "Test 3: Searching files..."
time grep -r "test data 25000" .

# Test 4: Delete files
echo "Test 4: Deleting files..."
time rm -rf "$TEST_DIR"

echo "File system benchmark complete!"
EOF

chmod +x filesystem_bench.sh
./filesystem_bench.sh
```

**Expected Results**:
- **Create 50K files**: 10-20 seconds
- **List files**: 1-3 seconds
- **Search**: 5-10 seconds
- **Delete**: 2-5 seconds

---

### 9. Container Performance

**Purpose**: Docker/container performance

```bash
# Install Docker
sudo apt install docker.io
sudo usermod -aG docker $USER

# Pull test image
docker pull ubuntu:22.04

# Test container startup time
time docker run --rm ubuntu:22.04 echo "Hello"

# Test multiple containers
for i in {1..10}; do
    docker run -d --name test_$i ubuntu:22.04 sleep 300
done

# Monitor resources
docker stats

# Cleanup
docker rm -f $(docker ps -aq)
```

**Expected Results**:
- **Container Start Time**: <1 second
- **10 Containers**: Minimal overhead
- **20+ Containers**: Still responsive

---

### 10. Virtual Machine Performance

**Purpose**: KVM/QEMU virtualization performance

```bash
# Install KVM
sudo apt install qemu-kvm libvirt-daemon-system virtinst

# Check virtualization support
egrep -c '(vmx|svm)' /proc/cpuinfo
# Should return 24 (number of threads)

# Check KVM modules
lsmod | grep kvm

# Create test VM (requires ISO)
# virt-install --name test-vm \
#   --ram 8192 \
#   --vcpus 4 \
#   --disk path=/var/lib/libvirt/images/test.qcow2,size=50 \
#   --cdrom /path/to/ubuntu.iso

# Monitor VM performance
virsh list
virsh dominfo test-vm
```

**Expected VM Performance**:
- **4 VMs (4 cores, 8GB each)**: Smooth operation
- **CPU Overhead**: <5%
- **Memory Overhead**: Minimal
- **Nested Virtualization**: Supported

---

## 📈 System Performance Summary

| Component | Idle | Light Load | Heavy Load | Peak |
|-----------|------|------------|------------|------|
| **Power** | 60-90W | 150-200W | 350-450W | 500-600W |
| **CPU Temp** | 35-45°C | 50-65°C | 70-85°C | 75-85°C |
| **GPU Temp** | 30-40°C | 55-70°C | 70-78°C | 75-80°C |
| **Noise** | Silent | Quiet | Moderate | Audible |
| **Response** | Instant | Instant | Smooth | Responsive |

---

## 🎯 Real-World Performance Scenarios

### Scenario 1: Gaming + Streaming
**Workload**: AAA game at 1440p + OBS streaming at 1080p60

```bash
# Expected performance:
# - Game: 80-120 FPS (depending on title)
# - Stream: Smooth 1080p60 with NVENC
# - CPU usage: 60-80%
# - GPU usage: 95-100%
# - Temps: CPU 70-80°C, GPU 70-75°C
# - Power: 400-450W
```

### Scenario 2: Content Creation
**Workload**: 4K video editing + rendering + background tasks

```bash
# Expected performance:
# - Timeline scrubbing: Real-time, no lag
# - Effects preview: Smooth
# - Export: 2-3x real-time (CPU) or 10x (NVENC)
# - Background tasks: No impact
# - Memory usage: 30-40GB
```

### Scenario 3: Software Development
**Workload**: IDE + Docker + compilation + browser

```bash
# Expected performance:
# - Code indexing: Instant
# - Compilation: 3-5x faster than 6-core
# - Docker containers: 20+ without slowdown
# - Hot reload: <1 second
# - System responsiveness: Excellent
```

### Scenario 4: Data Science
**Workload**: Jupyter + large datasets + ML training

```bash
# Expected performance:
# - Dataset loading: Fast (NVMe + 64GB RAM)
# - Data processing: Excellent (12-core)
# - GPU training: 13 TFLOPS (RTX 3060)
# - Multiple notebooks: No slowdown
```

---

## 📝 Complete System Benchmark Script

Save as `scripts/system-bench.sh`:

```bash
#!/bin/bash
# Complete System Benchmark Script for Luna Super Machine

RESULTS_DIR="results/system"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
REPORT="$RESULTS_DIR/system_report_${TIMESTAMP}.txt"

echo "=== Luna Super Machine - Complete System Benchmark ===" | tee "$REPORT"
echo "Timestamp: $TIMESTAMP" | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# System information
echo "=== System Information ===" | tee -a "$REPORT"
uname -a | tee -a "$REPORT"
lsb_release -a | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# CPU info
echo "=== CPU Information ===" | tee -a "$REPORT"
lscpu | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# Memory info
echo "=== Memory Information ===" | tee -a "$REPORT"
free -h | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# Storage info
echo "=== Storage Information ===" | tee -a "$REPORT"
df -h | tee -a "$REPORT"
sudo nvme list | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# GPU info
echo "=== GPU Information ===" | tee -a "$REPORT"
nvidia-smi | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# Boot time
echo "=== Boot Time Analysis ===" | tee -a "$REPORT"
systemd-analyze | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# Temperatures
echo "=== Current Temperatures ===" | tee -a "$REPORT"
sensors | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# Power consumption
echo "=== Power Consumption (60s sample) ===" | tee -a "$REPORT"
sudo powerstat -R 60 1 | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

echo "System benchmark complete! Full report: $REPORT"
```

---

## 🔧 System Optimization Tips

### 1. Enable Performance Mode

```bash
# Install cpufrequtils
sudo apt install cpufrequtils

# Set performance governor
sudo cpufreq-set -g performance

# Make permanent
echo 'GOVERNOR="performance"' | sudo tee /etc/default/cpufrequtils
sudo systemctl restart cpufrequtils
```

### 2. Optimize I/O Scheduler

```bash
# Check current scheduler
cat /sys/block/nvme0n1/queue/scheduler

# Set to none for NVMe (best for SSDs)
echo none | sudo tee /sys/block/nvme0n1/queue/scheduler
```

### 3. Disable Unnecessary Services

```bash
# List running services
systemctl list-units --type=service --state=running

# Disable unwanted services
sudo systemctl disable bluetooth.service
sudo systemctl disable cups.service
```

---

**Next**: [Gaming Benchmarks](./06-gaming-benchmarks.md)

