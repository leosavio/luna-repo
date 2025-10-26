# Luna Super Machine - Benchmark Suite

## 🚀 Overview

This directory contains comprehensive benchmarks for the **Luna Super Machine**, a high-performance gaming and workstation computer designed for demanding workloads.

## 💻 System Specifications

### Processor
- **Model**: AMD Ryzen 9 5900X
- **Cores/Threads**: 12 Cores / 24 Threads
- **Base Clock**: 3.7 GHz
- **Boost Clock**: Up to 4.8 GHz
- **Cache**: 70MB (6MB L2 + 64MB L3)
- **TDP**: 105W
- **Architecture**: Zen 3 (7nm)

### Graphics Card
- **Model**: ASUS TUF Gaming RTX 3060
- **VRAM**: 12GB GDDR6
- **CUDA Cores**: 3584
- **Boost Clock**: ~1777 MHz
- **Memory Interface**: 192-bit
- **TDP**: 170W

### Memory
- **Model**: Corsair Vengeance LPX
- **Capacity**: 64GB (2x32GB)
- **Speed**: 3200MHz DDR4
- **Latency**: CL16
- **Dual Channel**: Yes

### Storage
- **Model**: Kingston KC3000 NVMe SSD
- **Capacity**: 2TB
- **Interface**: PCIe 4.0 x4, NVMe
- **Sequential Read**: Up to 7000 MB/s
- **Sequential Write**: Up to 7000 MB/s
- **Form Factor**: M.2 2280

### Motherboard
- **Model**: ASUS TUF Gaming B550-PLUS (WI-FI)
- **Chipset**: AMD B550
- **Form Factor**: ATX
- **Memory Support**: DDR4, up to 128GB
- **PCIe**: 4.0 support

### Cooling & Power
- **CPU Cooler**: Corsair H60 Hydro Series 120mm AIO (White LED)
- **PSU**: Corsair RM850x 850W, 80 Plus Gold, Modular, White
- **Case**: XPG Starker Compact Mid Tower (2x ARGB Fans, Tempered Glass)

### Operating System
- **OS**: Ubuntu 22.04.5 LTS
- **Kernel**: Linux (check with `uname -r`)

---

## 📊 Benchmark Categories

### 1. [CPU Performance](./01-cpu-benchmarks.md)
- Multi-core performance
- Single-core performance
- Rendering and compilation tests
- Stress testing and thermal performance

### 2. [GPU Performance](./02-gpu-benchmarks.md)
- Gaming benchmarks (1080p, 1440p, 4K)
- CUDA/OpenCL compute performance
- Ray tracing capabilities
- Video encoding/decoding

### 3. [Storage Performance](./03-storage-benchmarks.md)
- Sequential read/write speeds
- Random IOPS performance
- Real-world file operations
- Sustained performance tests

### 4. [Memory Performance](./04-memory-benchmarks.md)
- Bandwidth tests
- Latency measurements
- Multi-threaded performance
- Cache performance

### 5. [System Performance](./05-system-benchmarks.md)
- Overall system responsiveness
- Boot time
- Power consumption
- Thermal performance under load
- Multi-tasking scenarios

### 6. [Gaming Benchmarks](./06-gaming-benchmarks.md)
- Popular game performance
- Frame time consistency
- VR readiness
- Streaming performance

---

## 🛠️ Quick Start

### Prerequisites Installation

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install benchmark tools
sudo apt install -y \
    sysbench \
    stress-ng \
    fio \
    iperf3 \
    hardinfo \
    lm-sensors \
    mesa-utils \
    glmark2 \
    phoronix-test-suite

# Install monitoring tools
sudo apt install -y \
    htop \
    nvtop \
    iotop \
    powertop \
    s-tui

# Install additional tools
sudo apt install -y \
    cpufrequtils \
    linux-tools-common \
    linux-tools-generic
```

### Run All Benchmarks

```bash
# Make the benchmark script executable
chmod +x run-all-benchmarks.sh

# Run comprehensive benchmark suite
./run-all-benchmarks.sh
```

### View Results

All benchmark results are saved in the `results/` directory with timestamps.

```bash
# View latest results
cat results/latest-benchmark-summary.txt

# Generate HTML report
./generate-html-report.sh
```

---

## 📈 Expected Performance Highlights

### CPU
- **Cinebench R23 Multi-Core**: ~20,000+ points
- **Geekbench 5 Multi-Core**: ~12,000+ points
- **7-Zip Compression**: ~80,000+ MIPS

### GPU
- **3DMark Time Spy**: ~9,000+ points
- **Unigine Superposition (1080p Extreme)**: ~6,000+ points
- **Blender BMW Render**: ~3-4 minutes

### Storage
- **Sequential Read**: 6,800-7,000 MB/s
- **Sequential Write**: 6,800-7,000 MB/s
- **4K Random Read**: 600,000+ IOPS

### Memory
- **Bandwidth**: ~45,000 MB/s (dual channel)
- **Latency**: ~65-70ns

---

## 📁 Directory Structure

```
benchmarks/
├── README.md                          # This file
├── 01-cpu-benchmarks.md              # CPU testing guide
├── 02-gpu-benchmarks.md              # GPU testing guide
├── 03-storage-benchmarks.md          # Storage testing guide
├── 04-memory-benchmarks.md           # Memory testing guide
├── 05-system-benchmarks.md           # System testing guide
├── 06-gaming-benchmarks.md           # Gaming benchmarks
├── scripts/                          # Automation scripts
│   ├── run-all-benchmarks.sh        # Master benchmark script
│   ├── cpu-bench.sh                 # CPU benchmarks
│   ├── gpu-bench.sh                 # GPU benchmarks
│   ├── storage-bench.sh             # Storage benchmarks
│   ├── memory-bench.sh              # Memory benchmarks
│   └── system-bench.sh              # System benchmarks
├── results/                          # Benchmark results (auto-generated)
│   └── .gitkeep
└── templates/                        # HTML templates for web page
    ├── index.html                   # Main showcase page
    ├── style.css                    # Styling
    └── benchmark-data.js            # Benchmark data for charts
```

---

## 🎯 Use Cases

The Luna Super Machine excels at:

- **Gaming**: High FPS at 1440p, smooth 1080p ultra settings
- **Content Creation**: Video editing, 3D rendering, streaming
- **Software Development**: Fast compilation, multiple VMs, containers
- **Machine Learning**: CUDA acceleration, large dataset processing
- **Productivity**: Massive multitasking with 64GB RAM
- **Virtualization**: Run multiple VMs simultaneously

---

## 📝 Notes

- All benchmarks should be run with the system at idle (close unnecessary applications)
- Ensure proper cooling and ventilation during stress tests
- Monitor temperatures using `sensors` command
- Results may vary based on ambient temperature and system configuration
- For GPU benchmarks, ensure latest NVIDIA drivers are installed

---

## 🔗 Resources

- [Phoronix Test Suite Documentation](https://www.phoronix-test-suite.com/)
- [AMD Ryzen 9 5900X Specifications](https://www.amd.com/en/products/cpu/amd-ryzen-9-5900x)
- [NVIDIA RTX 3060 Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3060-3060ti/)
- [Kingston KC3000 Specifications](https://www.kingston.com/en/ssd/kc3000-nvme-m2-solid-state-drive)

---

**Last Updated**: 2025-10-26
**System**: Luna Super Machine
**OS**: Ubuntu 22.04.5 LTS

