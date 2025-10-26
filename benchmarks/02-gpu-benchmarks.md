# GPU Benchmarks - ASUS TUF Gaming RTX 3060 12GB

## 🎯 Overview

The NVIDIA GeForce RTX 3060 with 12GB GDDR6 is a powerful mid-range GPU featuring ray tracing, DLSS, and excellent 1080p/1440p gaming performance. This guide covers comprehensive GPU benchmarking.

## 📊 Specifications Recap

- **GPU**: NVIDIA GA106 (Ampere)
- **CUDA Cores**: 3584
- **RT Cores**: 28 (2nd Gen)
- **Tensor Cores**: 112 (3rd Gen)
- **VRAM**: 12GB GDDR6
- **Memory Bus**: 192-bit
- **Boost Clock**: ~1777 MHz
- **TDP**: 170W
- **Ray Tracing**: Yes (RTX)
- **DLSS**: Yes (2.0/3.0)

---

## 🔧 Prerequisites

### Install NVIDIA Drivers

```bash
# Check current driver
nvidia-smi

# Install latest NVIDIA driver (if needed)
sudo ubuntu-drivers devices
sudo ubuntu-drivers autoinstall

# Or install specific version
sudo apt install nvidia-driver-535

# Reboot
sudo reboot
```

### Install GPU Monitoring Tools

```bash
# Install nvtop (GPU monitoring)
sudo apt install nvtop

# Install GPU stats
sudo apt install nvidia-utils-535

# Install CUDA toolkit (for compute benchmarks)
sudo apt install nvidia-cuda-toolkit
```

---

## 🧪 Benchmark Tests

### 1. GLMark2 - OpenGL Performance

**Purpose**: OpenGL graphics performance

```bash
# Install GLMark2
sudo apt install glmark2

# Run benchmark (windowed)
glmark2 --fullscreen

# Run with specific resolution
glmark2 --size 1920x1080 --fullscreen

# Save results
glmark2 --fullscreen > results/gpu/glmark2_$(date +%Y%m%d_%H%M%S).txt
```

**Expected Results**:
- Score: 8,000-12,000 points (1080p)
- Average FPS: 400-600 FPS

---

### 2. Unigine Heaven - Graphics Benchmark

**Purpose**: DirectX/OpenGL stress test and visual quality

```bash
# Download Unigine Heaven
wget https://assets.unigine.com/d/Unigine_Heaven-4.0.run
chmod +x Unigine_Heaven-4.0.run
./Unigine_Heaven-4.0.run

# Run benchmark
cd Unigine_Heaven-4.0
./heaven

# Command line benchmark
./heaven -video_app opengl \
         -video_mode -1 \
         -video_width 1920 \
         -video_height 1080 \
         -video_fullscreen 1 \
         -video_quality ultra
```

**Expected Results**:
- **1080p Ultra**: 80-100 FPS average
- **1080p Extreme**: 60-75 FPS average
- **1440p Ultra**: 55-70 FPS average
- **Score**: 2,000-2,500 points

---

### 3. Unigine Superposition

**Purpose**: Modern graphics benchmark with VR testing

```bash
# Download Unigine Superposition
wget https://assets.unigine.com/d/Unigine_Superposition-1.1.run
chmod +x Unigine_Superposition-1.1.run
./Unigine_Superposition-1.1.run

# Run benchmark
cd Unigine_Superposition-1.1
./superposition
```

**Expected Results**:
- **1080p Medium**: 120-140 FPS
- **1080p High**: 90-110 FPS
- **1080p Extreme**: 50-65 FPS
- **1440p High**: 65-80 FPS
- **Score (1080p Extreme)**: 6,000-7,000 points

---

### 4. GpuTest - Multiple GPU Stress Tests

**Purpose**: Various GPU stress scenarios

```bash
# Download GpuTest
wget https://geeks3d.com/downloads/2020/gputest_linux_x64_0.7.0.zip
unzip gputest_linux_x64_0.7.0.zip
cd GpuTest_Linux_x64_0.7.0

# FurMark stress test
./GpuTest /test=fur /width=1920 /height=1080 /fullscreen /benchmark /benchmark_duration_ms=60000

# TessMark (tessellation test)
./GpuTest /test=tess /width=1920 /height=1080 /fullscreen /benchmark /benchmark_duration_ms=60000

# Triangle test
./GpuTest /test=triangle /width=1920 /height=1080 /fullscreen /benchmark /benchmark_duration_ms=60000
```

**Expected Results**:
- **FurMark**: 60-80 FPS (1080p)
- **TessMark**: 100-130 FPS
- **Max Temperature**: 70-80°C

---

### 5. Blender - GPU Rendering (CUDA/OptiX)

**Purpose**: 3D rendering with GPU acceleration

```bash
# Install Blender
sudo snap install blender --classic

# Download Blender benchmark scenes
wget https://download.blender.org/demo/test/benchmark.zip
unzip benchmark.zip

# Run GPU render benchmark (OptiX)
blender -b benchmark/bmw27/bmw27_gpu.blend \
        -E CYCLES \
        -o /tmp/output \
        -f 1 \
        -- --cycles-device OPTIX

# Run with CUDA
blender -b benchmark/bmw27/bmw27_gpu.blend \
        -E CYCLES \
        -o /tmp/output \
        -f 1 \
        -- --cycles-device CUDA
```

**Expected Results**:
- **BMW Scene (GPU)**: 1.5-2.5 minutes
- **Classroom Scene (GPU)**: 4-6 minutes
- **Speedup vs CPU**: 3-5x faster

---

### 6. Hashcat - GPU Compute Performance

**Purpose**: Raw GPU compute power (password cracking benchmark)

```bash
# Install Hashcat
sudo apt install hashcat

# Benchmark all algorithms
hashcat -b

# Benchmark specific hash (MD5)
hashcat -b -m 0

# Benchmark SHA256
hashcat -b -m 1400
```

**Expected Results**:
- **MD5**: 25,000-30,000 MH/s
- **SHA256**: 10,000-13,000 MH/s
- **bcrypt**: 40,000-50,000 H/s

---

### 7. CUDA Performance Tests

**Purpose**: CUDA compute benchmarks

```bash
# Install CUDA samples
sudo apt install cuda-samples-11-7

# Navigate to samples
cd /usr/local/cuda/samples/1_Utilities/deviceQuery
sudo make

# Run device query
./deviceQuery

# Bandwidth test
cd /usr/local/cuda/samples/1_Utilities/bandwidthTest
sudo make
./bandwidthTest

# Matrix multiplication
cd /usr/local/cuda/samples/0_Simple/matrixMul
sudo make
./matrixMul
```

**Expected Results**:
- **Memory Bandwidth**: 350-380 GB/s
- **CUDA Cores Utilization**: 95%+
- **FP32 Performance**: ~13 TFLOPS

---

### 8. Video Encoding - NVENC Performance

**Purpose**: Hardware video encoding performance

```bash
# Install FFmpeg with NVENC support
sudo apt install ffmpeg

# Check NVENC availability
ffmpeg -encoders | grep nvenc

# Download test video
wget http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4

# H.264 NVENC encoding
time ffmpeg -i bbb_sunflower_1080p_30fps_normal.mp4 \
    -c:v h264_nvenc \
    -preset p7 \
    -tune hq \
    -rc vbr \
    -cq 23 \
    output_nvenc_h264.mp4

# H.265 NVENC encoding
time ffmpeg -i bbb_sunflower_1080p_30fps_normal.mp4 \
    -c:v hevc_nvenc \
    -preset p7 \
    -tune hq \
    -rc vbr \
    -cq 28 \
    output_nvenc_h265.mp4

# 4K encoding test
time ffmpeg -i input_4k.mp4 \
    -c:v h264_nvenc \
    -preset p7 \
    -b:v 50M \
    output_4k_nvenc.mp4
```

**Expected Results**:
- **1080p H.264**: 600-800 FPS
- **1080p H.265**: 400-600 FPS
- **4K H.264**: 200-300 FPS
- **Encoding Time**: 10-20x faster than CPU

---

### 9. Machine Learning - TensorFlow GPU

**Purpose**: AI/ML performance with CUDA

```bash
# Install TensorFlow with GPU support
pip3 install tensorflow-gpu

# Create benchmark script
cat > gpu_ml_bench.py << 'EOF'
import tensorflow as tf
import time

print("GPU Available:", tf.config.list_physical_devices('GPU'))

# Matrix multiplication benchmark
size = 10000
with tf.device('/GPU:0'):
    a = tf.random.normal([size, size])
    b = tf.random.normal([size, size])
    
    # Warmup
    c = tf.matmul(a, b)
    
    # Benchmark
    start = time.time()
    for i in range(10):
        c = tf.matmul(a, b)
    tf.debugging.assert_all_finite(c, "result")
    end = time.time()
    
    print(f"Time for 10 iterations: {end - start:.2f}s")
    print(f"Average time per iteration: {(end - start)/10:.2f}s")
    print(f"TFLOPS: {(2 * size**3 * 10) / (end - start) / 1e12:.2f}")
EOF

python3 gpu_ml_bench.py
```

**Expected Results**:
- **10000x10000 Matrix Mult**: ~0.5-1.0s per iteration
- **TFLOPS**: 10-15 TFLOPS

---

### 10. Gaming Benchmarks (Native Linux Games)

**Purpose**: Real-world gaming performance

```bash
# Install Steam
sudo apt install steam

# Recommended benchmark games:
# - Shadow of the Tomb Raider (built-in benchmark)
# - Total War: Three Kingdoms
# - Dota 2 (free)
# - CS:GO (free)
# - Metro Exodus

# For Proton/Windows games:
# - Cyberpunk 2077
# - Red Dead Redemption 2
# - Control
```

**Expected Gaming Performance**:

| Game | Resolution | Settings | FPS |
|------|------------|----------|-----|
| CS:GO | 1080p | Max | 300+ |
| Dota 2 | 1080p | Max | 200+ |
| Shadow of Tomb Raider | 1080p | High | 90-110 |
| Shadow of Tomb Raider | 1440p | High | 65-80 |
| Cyberpunk 2077 | 1080p | High | 60-75 |
| Cyberpunk 2077 | 1080p | RT Medium + DLSS | 70-85 |
| Control | 1080p | High + RT | 60-70 |
| Red Dead Redemption 2 | 1080p | High | 70-85 |

---

## 📈 Performance Summary Table

| Benchmark | Setting | Expected Result | Notes |
|-----------|---------|-----------------|-------|
| GLMark2 | 1080p | 8,000-12,000 | OpenGL |
| Unigine Heaven | 1080p Ultra | 80-100 FPS | DX11 |
| Unigine Superposition | 1080p Extreme | 50-65 FPS | Modern |
| Blender BMW | GPU OptiX | 1.5-2.5 min | Rendering |
| Hashcat MD5 | - | 25-30 GH/s | Compute |
| NVENC H.264 | 1080p | 600-800 FPS | Encoding |
| TensorFlow | 10k Matrix | 10-15 TFLOPS | ML |
| Gaming (1080p) | High/Ultra | 60-120+ FPS | AAA Games |
| Gaming (1440p) | High | 60-90 FPS | AAA Games |

---

## 🌡️ Thermal & Power Monitoring

### Monitor GPU Temperature and Usage

```bash
# Real-time monitoring with nvtop
nvtop

# nvidia-smi monitoring
watch -n 1 nvidia-smi

# Detailed stats
nvidia-smi dmon -s pucvmet
```

### Expected Thermal Performance

- **Idle**: 30-40°C
- **Light Gaming**: 50-60°C
- **Heavy Gaming**: 65-75°C
- **Stress Test**: 70-80°C
- **Max Safe**: <83°C (thermal throttle point)

### Power Consumption

- **Idle**: 10-20W
- **Video Playback**: 30-50W
- **Gaming**: 150-170W
- **Stress Test**: 170W (TDP limit)

---

## 🎮 Ray Tracing Performance

### Test Ray Tracing Capabilities

```bash
# Quake II RTX (free)
sudo snap install quake2-rtx

# Run with ray tracing
quake2-rtx

# Benchmark mode
quake2-rtx +timedemo 1 +demo demo1.dm2
```

**Expected RT Performance**:
- **Quake II RTX (1080p)**: 80-120 FPS
- **Control (1080p RT Medium)**: 45-60 FPS
- **Cyberpunk 2077 (1080p RT Medium + DLSS)**: 60-75 FPS

---

## 🖥️ Multi-Monitor Performance

The RTX 3060 supports:
- **Max Displays**: 4 simultaneous
- **Max Resolution**: 7680x4320 @ 60Hz (8K)
- **DisplayPort 1.4a**: Yes
- **HDMI 2.1**: Yes

---

## 📝 GPU Benchmark Script

Save as `scripts/gpu-bench.sh`:

```bash
#!/bin/bash
# GPU Benchmark Script for Luna Super Machine

RESULTS_DIR="results/gpu"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "=== Luna Super Machine - GPU Benchmarks ==="
echo "Timestamp: $TIMESTAMP"
echo "GPU: ASUS TUF Gaming RTX 3060 12GB"
echo ""

# Check GPU
nvidia-smi > "$RESULTS_DIR/gpu_info_${TIMESTAMP}.txt"

# GLMark2
echo "Running GLMark2..."
glmark2 --fullscreen > "$RESULTS_DIR/glmark2_${TIMESTAMP}.txt"

# Hashcat benchmark
echo "Running Hashcat benchmark..."
hashcat -b > "$RESULTS_DIR/hashcat_${TIMESTAMP}.txt"

echo ""
echo "GPU benchmarks complete! Results saved to $RESULTS_DIR"
echo "For gaming benchmarks, run games manually with built-in benchmarks"
```

---

**Next**: [Storage Benchmarks](./03-storage-benchmarks.md)

