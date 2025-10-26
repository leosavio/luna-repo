# Installation Guide - Luna Super Machine Benchmarks

This guide will help you set up and run all benchmarks on the Luna Super Machine.

## Prerequisites

- **Operating System**: Ubuntu 22.04.5 LTS (or compatible)
- **User Privileges**: sudo access required for some benchmarks
- **Internet Connection**: Required for installing dependencies
- **Disk Space**: At least 10GB free for benchmark tools and results

---

## Quick Installation

### 1. Install All Dependencies

Run this single command to install all required benchmark tools:

```bash
sudo apt update && sudo apt install -y \
    sysbench \
    stress-ng \
    fio \
    p7zip-full \
    lm-sensors \
    nvme-cli \
    glmark2 \
    mesa-utils \
    htop \
    nvtop \
    iotop \
    powertop \
    s-tui \
    cpufrequtils \
    i2c-tools \
    mbw \
    stream \
    ramspeed \
    memtester \
    iozone3 \
    bonnie++ \
    sqlite3 \
    build-essential \
    git \
    ffmpeg \
    python3-pip \
    python3-numpy \
    hashcat \
    speedtest-cli
```

### 2. Configure Sensors

```bash
# Detect and configure hardware sensors
sudo sensors-detect --auto
```

### 3. Install NVIDIA Drivers (if not already installed)

```bash
# Check current driver
nvidia-smi

# If not installed or outdated:
sudo ubuntu-drivers autoinstall
sudo reboot
```

### 4. Install Optional Tools

```bash
# Phoronix Test Suite (comprehensive benchmarking)
sudo apt install phoronix-test-suite

# Docker (for container benchmarks)
sudo apt install docker.io
sudo usermod -aG docker $USER

# Steam (for gaming benchmarks)
sudo apt install steam
```

---

## Running Benchmarks

### Option 1: Run All Benchmarks (Recommended)

```bash
cd benchmarks/scripts
chmod +x run-all-benchmarks.sh
./run-all-benchmarks.sh
```

This will run:
- CPU benchmarks (~10 minutes)
- GPU benchmarks (~15 minutes)
- Storage benchmarks (~10 minutes)
- Memory benchmarks (~5 minutes)
- System benchmarks (~5 minutes)

**Total time**: ~45-60 minutes

### Option 2: Quick Benchmarks

```bash
./run-all-benchmarks.sh --quick
```

Runs essential benchmarks only (~10-15 minutes)

### Option 3: Individual Component Benchmarks

```bash
# CPU only
./run-all-benchmarks.sh --cpu-only

# GPU only
./run-all-benchmarks.sh --gpu-only
```

### Option 4: Manual Benchmarks

Follow the individual benchmark guides:
- [CPU Benchmarks](./01-cpu-benchmarks.md)
- [GPU Benchmarks](./02-gpu-benchmarks.md)
- [Storage Benchmarks](./03-storage-benchmarks.md)
- [Memory Benchmarks](./04-memory-benchmarks.md)
- [System Benchmarks](./05-system-benchmarks.md)
- [Gaming Benchmarks](./06-gaming-benchmarks.md)

---

## Viewing Results

### Benchmark Results Location

All results are saved in `benchmarks/results/` organized by component:

```
benchmarks/results/
├── cpu/                    # CPU benchmark results
├── gpu/                    # GPU benchmark results
├── storage/                # Storage benchmark results
├── memory/                 # Memory benchmark results
├── system/                 # System benchmark results
└── latest-benchmark-summary.txt  # Quick summary
```

### View Summary

```bash
cat benchmarks/results/latest-benchmark-summary.txt
```

### View Detailed Results

```bash
# CPU results
ls -lh benchmarks/results/cpu/

# GPU results
ls -lh benchmarks/results/gpu/

# Storage results
ls -lh benchmarks/results/storage/
```

---

## Web Showcase

### View the HTML Showcase Page

```bash
cd benchmarks/templates
python3 -m http.server 8000
```

Then open your browser to: `http://localhost:8000`

The showcase page includes:
- Interactive performance charts
- Detailed specifications
- Benchmark results visualization
- Modern, responsive design

---

## Troubleshooting

### Issue: "Command not found"

**Solution**: Install the missing package
```bash
sudo apt install <package-name>
```

### Issue: "Permission denied" for storage benchmarks

**Solution**: Run with sudo or adjust permissions
```bash
sudo ./run-all-benchmarks.sh
```

### Issue: NVIDIA driver not found

**Solution**: Install NVIDIA drivers
```bash
sudo ubuntu-drivers autoinstall
sudo reboot
```

### Issue: Sensors not working

**Solution**: Detect and configure sensors
```bash
sudo sensors-detect --auto
sudo modprobe <module-name>
```

### Issue: Low benchmark scores

**Possible causes**:
1. **CPU not in performance mode**
   ```bash
   sudo cpufreq-set -g performance
   ```

2. **XMP/DOCP not enabled in BIOS**
   - Reboot and enter BIOS (DEL or F2)
   - Enable D.O.C.P. for RAM

3. **Thermal throttling**
   - Check temperatures: `sensors`
   - Ensure proper cooling and airflow

4. **Background processes**
   - Close unnecessary applications
   - Check with: `htop`

---

## System Optimization

### Enable Performance Mode

```bash
# CPU performance governor
sudo cpufreq-set -g performance

# Make permanent
echo 'GOVERNOR="performance"' | sudo tee /etc/default/cpufrequtils
sudo systemctl restart cpufrequtils
```

### Optimize I/O Scheduler for NVMe

```bash
# Check current scheduler
cat /sys/block/nvme0n1/queue/scheduler

# Set to none (best for NVMe SSDs)
echo none | sudo tee /sys/block/nvme0n1/queue/scheduler
```

### Disable Unnecessary Services

```bash
# List running services
systemctl list-units --type=service --state=running

# Disable unwanted services (examples)
sudo systemctl disable bluetooth.service
sudo systemctl disable cups.service
```

---

## Benchmark Best Practices

1. **Close all applications** before running benchmarks
2. **Ensure system is cool** (wait after heavy use)
3. **Use AC power** (not battery, if laptop)
4. **Disable power saving** features
5. **Run multiple times** for consistency
6. **Monitor temperatures** during stress tests
7. **Document system state** (driver versions, BIOS settings)

---

## Monitoring Tools

### Real-time Monitoring

```bash
# CPU usage and processes
htop

# GPU monitoring
nvtop

# Temperatures
watch -n 1 sensors

# Disk I/O
sudo iotop

# Power consumption
sudo powertop

# All-in-one system monitor
s-tui
```

---

## Updating Benchmarks

To update benchmark tools:

```bash
sudo apt update
sudo apt upgrade -y
```

To update NVIDIA drivers:

```bash
sudo ubuntu-drivers autoinstall
sudo reboot
```

---

## Support

For issues or questions:
1. Check the individual benchmark guides
2. Review the troubleshooting section
3. Check system logs: `journalctl -xe`
4. Verify hardware with: `lshw -short`

---

## Additional Resources

- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Phoronix Test Suite](https://www.phoronix-test-suite.com/)
- [NVIDIA Driver Documentation](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/)
- [AMD Ryzen Documentation](https://www.amd.com/en/support)

---

**Happy Benchmarking!** 🚀

