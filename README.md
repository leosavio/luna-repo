# Luna Super Machine 🚀

**High-Performance Gaming & Workstation Computer**

[![Ubuntu](https://img.shields.io/badge/Ubuntu-22.04.5%20LTS-E95420?logo=ubuntu)](https://ubuntu.com/)
[![AMD](https://img.shields.io/badge/AMD-Ryzen%209%205900X-ED1C24?logo=amd)](https://www.amd.com/)
[![NVIDIA](https://img.shields.io/badge/NVIDIA-RTX%203060%2012GB-76B900?logo=nvidia)](https://www.nvidia.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 Overview

The **Luna Super Machine** is a meticulously crafted high-performance computer designed for:
- **Gaming**: 300+ FPS in competitive titles, 100+ FPS in AAA games at 1080p Ultra
- **Content Creation**: 4K video editing, 3D rendering, live streaming
- **Software Development**: Fast compilation, multiple VMs, containerized workflows
- **Machine Learning**: CUDA acceleration, large dataset processing

---

## 💻 System Specifications

| Component | Specification |
|-----------|---------------|
| **CPU** | AMD Ryzen 9 5900X (12C/24T, 3.7-4.8 GHz, 70MB Cache) |
| **GPU** | ASUS TUF Gaming RTX 3060 12GB GDDR6 |
| **RAM** | Corsair Vengeance LPX 64GB (2x32GB) DDR4-3200 CL16 |
| **Storage** | Kingston KC3000 2TB NVMe PCIe 4.0 (7000 MB/s R/W) |
| **Motherboard** | ASUS TUF Gaming B550-PLUS (WI-FI) |
| **Cooling** | Corsair H60 120mm AIO Water Cooler (White LED) |
| **PSU** | Corsair RM850x 850W 80+ Gold Modular (White) |
| **Case** | XPG Starker Compact Mid Tower (Tempered Glass, 2x ARGB Fans) |
| **OS** | Ubuntu 22.04.5 LTS |

---

## 📊 Performance Highlights

### CPU Performance
- **Cinebench R23 Multi-Core**: ~20,000 points
- **Geekbench 5 Multi-Core**: ~12,500 points
- **7-Zip Compression**: ~80,000 MIPS
- **Blender BMW Render**: 3-4 minutes

### GPU Performance
- **1080p Gaming**: 100-200+ FPS (AAA titles, Ultra settings)
- **1440p Gaming**: 60-120 FPS (AAA titles, High settings)
- **Ray Tracing**: Supported with DLSS
- **NVENC Encoding**: 600-800 FPS (1080p H.264)

### Storage Performance
- **Sequential Read**: 7,000 MB/s
- **Sequential Write**: 7,000 MB/s
- **Random Read (4K)**: 700,000+ IOPS
- **Random Write (4K)**: 700,000+ IOPS

### Memory Performance
- **Bandwidth**: 45-50 GB/s (Dual Channel)
- **Latency**: 65-75 ns
- **Capacity**: 64GB for massive multitasking

---

## 🧪 Comprehensive Benchmarks

Detailed benchmark documentation and scripts are available in the [`benchmarks/`](../benchmarks/) directory:

- **[CPU Benchmarks](../benchmarks/01-cpu-benchmarks.md)** - Ryzen 9 5900X performance tests
- **[GPU Benchmarks](../benchmarks/02-gpu-benchmarks.md)** - RTX 3060 gaming and compute tests
- **[Storage Benchmarks](../benchmarks/03-storage-benchmarks.md)** - Kingston KC3000 NVMe performance
- **[Memory Benchmarks](../benchmarks/04-memory-benchmarks.md)** - 64GB DDR4-3200 tests
- **[System Benchmarks](../benchmarks/05-system-benchmarks.md)** - Overall system performance
- **[Gaming Benchmarks](../benchmarks/06-gaming-benchmarks.md)** - Real-world gaming performance

### Quick Start - Run All Benchmarks

```bash
cd ../benchmarks/scripts
chmod +x run-all-benchmarks.sh
./run-all-benchmarks.sh
```

**Options:**
- `--quick` - Run quick benchmarks (5-10 minutes)
- `--full` - Run full benchmark suite (30-60 minutes)
- `--cpu-only` - CPU benchmarks only
- `--gpu-only` - GPU benchmarks only

---

## 🎮 Gaming Performance

| Game | 1080p Ultra | 1440p High | Notes |
|------|-------------|------------|-------|
| CS:GO | 350+ FPS | 300+ FPS | Competitive ready |
| Valorant | 350+ FPS | 300+ FPS | Competitive ready |
| Apex Legends | 200 FPS | 140 FPS | Smooth gameplay |
| Cyberpunk 2077 | 70 FPS | 55 FPS | RT + DLSS: 75 FPS |
| Red Dead Redemption 2 | 85 FPS | 60 FPS | Beautiful visuals |
| Control | 90 FPS | 65 FPS | RT + DLSS supported |
| Shadow of Tomb Raider | 110 FPS | 80 FPS | Excellent performance |

---

## 🛠️ Use Cases

### ✅ Excellent For:
- **Competitive Gaming**: 300+ FPS in esports titles
- **AAA Gaming**: 100+ FPS at 1080p Ultra, 60-90 FPS at 1440p
- **Streaming**: NVENC hardware encoding with minimal performance impact
- **Video Editing**: 4K timeline scrubbing, fast exports
- **3D Rendering**: Blender, Cinema 4D with GPU acceleration
- **Software Development**: Fast compilation, Docker, VMs
- **Machine Learning**: CUDA/TensorFlow with 12GB VRAM
- **Massive Multitasking**: 64GB RAM handles everything

---

## 🌐 Web Showcase

A beautiful static HTML page is available to showcase the Luna Super Machine's capabilities:

```bash
# Open the showcase page
cd ../benchmarks/templates
python3 -m http.server 8000
# Visit http://localhost:8000 in your browser
```

The showcase includes:
- Interactive performance charts
- Detailed specifications
- Benchmark results
- Use case scenarios
- Modern, responsive design

---

## 📈 Thermal Performance

| Component | Idle | Gaming | Stress Test |
|-----------|------|--------|-------------|
| **CPU** | 35-45°C | 65-75°C | 75-85°C |
| **GPU** | 30-40°C | 65-75°C | 75-80°C |
| **NVMe** | 35-45°C | 50-60°C | 60-70°C |
| **System** | Silent | Quiet | Moderate |

---

## ⚡ Power Consumption

| Scenario | Power Draw |
|----------|------------|
| **Idle** | 60-90W |
| **Web Browsing** | 100-130W |
| **Gaming** | 300-400W |
| **Full Load** | 450-550W |
| **Peak** | 500-600W |

**PSU Efficiency**: 80+ Gold rated, ~90% efficient at typical loads

---

## 🎯 Why Luna Super Machine?

1. **Balanced Performance**: Perfect balance of CPU, GPU, RAM, and storage
2. **Future-Proof**: 12-core CPU and 12GB VRAM for years of use
3. **Massive RAM**: 64GB handles any workload without slowdowns
4. **Blazing Storage**: PCIe 4.0 NVMe with 7000 MB/s speeds
5. **Quality Components**: ASUS TUF, Corsair premium parts
6. **Excellent Cooling**: AIO liquid cooling keeps temps low
7. **Clean OS**: Ubuntu 22.04 LTS, stable and optimized
8. **Verified Performance**: All benchmarks documented and reproducible

---

## 📝 License

This repository is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with passion. Benchmarked with precision. Ready for anything.** 🚀
