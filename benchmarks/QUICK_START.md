# Quick Start Guide - Luna Super Machine Benchmarks

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies (5 minutes)

```bash
sudo apt update && sudo apt install -y \
    sysbench stress-ng fio p7zip-full lm-sensors nvme-cli \
    glmark2 htop nvtop powertop hashcat
```

### Step 2: Run Benchmarks (10-60 minutes)

```bash
cd benchmarks/scripts
chmod +x run-all-benchmarks.sh
./run-all-benchmarks.sh --quick    # Quick test (10 min)
# OR
./run-all-benchmarks.sh            # Full test (60 min)
```

### Step 3: View Results

```bash
cat ../results/latest-benchmark-summary.txt
```

---

## 📊 What Gets Tested

### Quick Mode (--quick)
- ✅ CPU: Single & multi-core performance
- ✅ Storage: Sequential read/write speeds
- ⏱️ **Time**: ~10-15 minutes

### Full Mode (default)
- ✅ CPU: Comprehensive performance tests
- ✅ GPU: Gaming & compute benchmarks
- ✅ Storage: Sequential & random I/O
- ✅ Memory: Bandwidth & latency
- ✅ System: Overall performance
- ⏱️ **Time**: ~45-60 minutes

---

## 🎯 Expected Results

### CPU (Ryzen 9 5900X)
- **Multi-core**: ~60,000 events/sec (Sysbench)
- **7-Zip**: ~80,000 MIPS
- **Geekbench 5**: ~12,500 points

### GPU (RTX 3060 12GB)
- **GLMark2**: 8,000-12,000 points
- **Gaming**: 100-200+ FPS (1080p)
- **Hashcat**: 25,000+ MH/s (MD5)

### Storage (KC3000 2TB)
- **Sequential Read**: 6,800-7,000 MB/s
- **Sequential Write**: 6,800-7,000 MB/s
- **Random 4K**: 600K-800K IOPS

### Memory (64GB DDR4-3200)
- **Bandwidth**: 45-50 GB/s
- **Latency**: 65-75 ns

---

## 🌐 View Web Showcase

```bash
cd benchmarks/templates
python3 -m http.server 8000
```

Open browser: `http://localhost:8000`

---

## 📁 Results Location

```
benchmarks/results/
├── cpu/                           # CPU results
├── gpu/                           # GPU results
├── storage/                       # Storage results
├── memory/                        # Memory results
├── system/                        # System results
└── latest-benchmark-summary.txt  # Quick summary
```

---

## 🔧 Troubleshooting

### "Command not found"
```bash
sudo apt install <missing-package>
```

### "Permission denied"
```bash
sudo ./run-all-benchmarks.sh
```

### Low scores?
1. Enable performance mode: `sudo cpufreq-set -g performance`
2. Enable XMP/DOCP in BIOS
3. Close background apps
4. Check temps: `sensors`

---

## 📚 Full Documentation

- **[Installation Guide](./INSTALLATION.md)** - Detailed setup
- **[CPU Benchmarks](./01-cpu-benchmarks.md)** - CPU tests
- **[GPU Benchmarks](./02-gpu-benchmarks.md)** - GPU tests
- **[Storage Benchmarks](./03-storage-benchmarks.md)** - Storage tests
- **[Memory Benchmarks](./04-memory-benchmarks.md)** - Memory tests
- **[System Benchmarks](./05-system-benchmarks.md)** - System tests
- **[Gaming Benchmarks](./06-gaming-benchmarks.md)** - Gaming tests

---

## 💡 Tips

1. **First time?** Run `--quick` mode first
2. **Selling the machine?** Run full benchmarks
3. **Want pretty charts?** Use the web showcase
4. **Need proof?** Results are timestamped and saved
5. **Compare later?** Results are kept in dated files

---

**Ready to showcase your Luna Super Machine!** 🎮🚀

