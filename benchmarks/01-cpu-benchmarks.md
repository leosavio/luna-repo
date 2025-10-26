# CPU Benchmarks - AMD Ryzen 9 5900X

## 🎯 Overview

The AMD Ryzen 9 5900X is a flagship 12-core, 24-thread processor based on the Zen 3 architecture. This guide covers comprehensive CPU benchmarking to showcase its exceptional performance.

## 📊 Specifications Recap

- **Cores/Threads**: 12C/24T
- **Base Clock**: 3.7 GHz
- **Boost Clock**: 4.8 GHz
- **Cache**: 70MB (6MB L2 + 64MB L3)
- **TDP**: 105W
- **Architecture**: Zen 3 (7nm)

---

## 🧪 Benchmark Tests

### 1. Sysbench - CPU Performance

**Purpose**: Measure raw CPU computational power

```bash
# Single-threaded performance
sysbench cpu --threads=1 --time=60 run

# Multi-threaded performance (all cores)
sysbench cpu --threads=24 --time=60 run

# Half cores (simulate gaming + streaming)
sysbench cpu --threads=12 --time=60 run
```

**Expected Results**:
- Single-thread: ~2,500-3,000 events/sec
- 24-threads: ~55,000-65,000 events/sec
- 12-threads: ~30,000-35,000 events/sec

---

### 2. 7-Zip Benchmark

**Purpose**: Real-world compression performance (heavily multi-threaded)

```bash
# Install 7-Zip
sudo apt install p7zip-full

# Run benchmark
7z b -mmt24

# Single-threaded
7z b -mmt1
```

**Expected Results**:
- Multi-threaded Compression: ~80,000 MIPS
- Multi-threaded Decompression: ~85,000 MIPS
- Single-threaded: ~6,500 MIPS

---

### 3. OpenSSL Speed Test

**Purpose**: Cryptographic performance

```bash
# RSA encryption
openssl speed rsa2048

# AES encryption
openssl speed -multi $(nproc) aes-256-cbc

# SHA256 hashing
openssl speed -multi $(nproc) sha256
```

**Expected Results**:
- RSA 2048-bit: ~2,000 signs/sec
- AES-256-CBC: ~3,000,000 KB/s
- SHA256: ~1,500,000 KB/s

---

### 4. Geekbench 5 (Optional - Requires Download)

**Purpose**: Industry-standard cross-platform benchmark

```bash
# Download Geekbench 5 for Linux
wget https://cdn.geekbench.com/Geekbench-5.5.1-Linux.tar.gz
tar xzf Geekbench-5.5.1-Linux.tar.gz
cd Geekbench-5.5.1-Linux

# Run benchmark
./geekbench5
```

**Expected Results**:
- Single-Core Score: ~1,650-1,700
- Multi-Core Score: ~12,000-13,000

---

### 5. Stress-ng - Stress Testing

**Purpose**: Stability and thermal testing under maximum load

```bash
# CPU stress test (10 minutes)
stress-ng --cpu 24 --timeout 600s --metrics-brief

# Matrix operations stress
stress-ng --matrix 24 --timeout 300s --metrics-brief

# Combined stress (CPU + cache)
stress-ng --cpu 12 --cache 12 --timeout 300s --metrics-brief
```

**Monitor temperatures during stress test**:
```bash
# In another terminal
watch -n 1 sensors
```

**Expected Temperatures**:
- Idle: 35-45°C
- Load: 65-80°C (with Corsair H60 AIO)
- Max Safe: <90°C

---

### 6. Compilation Benchmark

**Purpose**: Real-world development workload

```bash
# Install build tools
sudo apt install build-essential git

# Clone and compile Linux kernel (time the compilation)
git clone --depth=1 https://github.com/torvalds/linux.git
cd linux

# Configure
make defconfig

# Compile with all cores
time make -j24

# Compile with half cores (simulate multitasking)
time make -j12
```

**Expected Results**:
- Full cores (-j24): ~8-12 minutes
- Half cores (-j12): ~15-20 minutes

---

### 7. Blender Benchmark (CPU Rendering)

**Purpose**: 3D rendering performance

```bash
# Install Blender
sudo snap install blender --classic

# Download Blender Benchmark
wget https://download.blender.org/demo/test/benchmark.zip
unzip benchmark.zip

# Run CPU render benchmark
blender -b benchmark/bmw27/bmw27_cpu.blend -f 1 -o /tmp/output
```

**Expected Results**:
- BMW Scene: ~3-4 minutes
- Classroom Scene: ~8-10 minutes

---

### 8. FFmpeg Video Encoding

**Purpose**: Video transcoding performance

```bash
# Install FFmpeg
sudo apt install ffmpeg

# Download sample 4K video
wget http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4

# Encode to H.264 (CPU)
time ffmpeg -i bbb_sunflower_1080p_30fps_normal.mp4 \
    -c:v libx264 -preset medium -crf 23 \
    -threads 24 output_h264.mp4

# Encode to H.265 (CPU)
time ffmpeg -i bbb_sunflower_1080p_30fps_normal.mp4 \
    -c:v libx265 -preset medium -crf 28 \
    -threads 24 output_h265.mp4
```

**Expected Results**:
- H.264 encoding: ~150-200 fps (1080p)
- H.265 encoding: ~50-80 fps (1080p)

---

### 9. Python Performance (NumPy/SciPy)

**Purpose**: Scientific computing performance

```bash
# Install Python and NumPy
sudo apt install python3-pip
pip3 install numpy scipy

# Create benchmark script
cat > cpu_numpy_bench.py << 'EOF'
import numpy as np
import time

# Matrix multiplication
size = 5000
print(f"Matrix multiplication ({size}x{size})...")
a = np.random.rand(size, size)
b = np.random.rand(size, size)

start = time.time()
c = np.dot(a, b)
end = time.time()

print(f"Time: {end - start:.2f} seconds")
print(f"GFLOPS: {(2 * size**3) / (end - start) / 1e9:.2f}")
EOF

# Run benchmark
python3 cpu_numpy_bench.py
```

**Expected Results**:
- 5000x5000 matrix multiplication: ~3-5 seconds
- ~50-80 GFLOPS

---

### 10. Phoronix Test Suite

**Purpose**: Comprehensive automated benchmarking

```bash
# Install Phoronix Test Suite
sudo apt install phoronix-test-suite

# Run CPU test suite
phoronix-test-suite benchmark pts/cpu

# Specific tests
phoronix-test-suite benchmark pts/build-linux-kernel
phoronix-test-suite benchmark pts/compress-7zip
phoronix-test-suite benchmark pts/x264
```

---

## 📈 Performance Summary Table

| Benchmark | Metric | Expected Result | Category |
|-----------|--------|-----------------|----------|
| Sysbench (24T) | Events/sec | 55,000-65,000 | Multi-core |
| Sysbench (1T) | Events/sec | 2,500-3,000 | Single-core |
| 7-Zip | MIPS | 80,000+ | Compression |
| Geekbench 5 (MC) | Score | 12,000-13,000 | Overall |
| Geekbench 5 (SC) | Score | 1,650-1,700 | Single-core |
| Blender BMW | Time | 3-4 min | Rendering |
| Linux Kernel | Time | 8-12 min | Compilation |
| FFmpeg H.264 | FPS | 150-200 | Encoding |
| Cinebench R23 (MC) | Points | 20,000+ | Rendering |
| Cinebench R23 (SC) | Points | 1,550-1,600 | Single-core |

---

## 🌡️ Thermal Performance

### Monitoring Commands

```bash
# Install sensors
sudo apt install lm-sensors
sudo sensors-detect

# Monitor temperatures
watch -n 1 sensors

# Advanced monitoring with s-tui
sudo apt install s-tui
s-tui
```

### Expected Thermal Behavior

- **Idle**: 35-45°C
- **Light Load**: 45-60°C
- **Gaming**: 60-75°C
- **Full Load (All Cores)**: 70-85°C
- **Stress Test**: 75-85°C

**Note**: With Corsair H60 120mm AIO, temperatures should stay well below 90°C even under sustained load.

---

## ⚡ Power Consumption

```bash
# Monitor power usage
sudo powertop

# Or use turbostat (requires root)
sudo turbostat --interval 1
```

**Expected Power Draw**:
- Idle: 50-70W (system)
- Gaming: 200-300W (system)
- Full CPU Load: 150-180W (CPU only)
- Full System Load: 400-500W (with GPU)

---

## 🎯 Real-World Performance Scenarios

### Scenario 1: Gaming + Streaming
- **Cores for Game**: 8-10 cores
- **Cores for Encoding**: 4-6 cores
- **Expected Performance**: Smooth 144+ FPS with simultaneous 1080p60 stream

### Scenario 2: Video Editing
- **4K Timeline Playback**: Real-time, no dropped frames
- **Export Speed**: 2-3x real-time for 4K H.264
- **Multi-track Audio**: 50+ tracks without issues

### Scenario 3: Software Development
- **Large Project Compilation**: 3-5x faster than 6-core CPUs
- **Docker Containers**: Run 10+ containers simultaneously
- **IDE Performance**: Instant code indexing and refactoring

### Scenario 4: 3D Rendering
- **Blender CPU Render**: Professional-grade performance
- **Cinema 4D**: Excellent multi-core scaling
- **V-Ray**: Fast preview and final renders

---

## 📝 Benchmark Execution Script

Save this as `scripts/cpu-bench.sh`:

```bash
#!/bin/bash
# CPU Benchmark Script for Luna Super Machine

RESULTS_DIR="results/cpu"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "=== Luna Super Machine - CPU Benchmarks ==="
echo "Timestamp: $TIMESTAMP"
echo "CPU: AMD Ryzen 9 5900X"
echo ""

# Sysbench
echo "Running Sysbench..."
sysbench cpu --threads=24 --time=60 run > "$RESULTS_DIR/sysbench_${TIMESTAMP}.txt"

# 7-Zip
echo "Running 7-Zip benchmark..."
7z b -mmt24 > "$RESULTS_DIR/7zip_${TIMESTAMP}.txt"

# OpenSSL
echo "Running OpenSSL benchmarks..."
openssl speed -multi $(nproc) aes-256-cbc > "$RESULTS_DIR/openssl_aes_${TIMESTAMP}.txt"

# Stress test
echo "Running 5-minute stress test..."
stress-ng --cpu 24 --timeout 300s --metrics-brief > "$RESULTS_DIR/stress_${TIMESTAMP}.txt"

echo ""
echo "Benchmarks complete! Results saved to $RESULTS_DIR"
```

---

**Next**: [GPU Benchmarks](./02-gpu-benchmarks.md)

