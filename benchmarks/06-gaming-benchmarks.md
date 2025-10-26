# Gaming Benchmarks - Real-World Gaming Performance

## 🎯 Overview

The Luna Super Machine is optimized for high-performance gaming at 1080p and 1440p resolutions. This guide covers gaming benchmarks and expected performance across various titles.

## 🎮 Gaming Capabilities Summary

- **1080p Ultra**: 100-200+ FPS (most AAA games)
- **1440p High/Ultra**: 60-120 FPS (most AAA games)
- **4K Medium/High**: 40-60 FPS (select titles)
- **Ray Tracing**: Supported with DLSS
- **VR Ready**: Yes (Oculus, Vive, Index)
- **Competitive Gaming**: 240+ FPS (esports titles)

---

## 🧪 Gaming Benchmark Tests

### 1. Steam Benchmarks

**Purpose**: Test performance with native Linux games

```bash
# Install Steam
sudo apt install steam

# Enable Proton for Windows games
# Settings > Steam Play > Enable Steam Play for all titles
```

#### Free Benchmark Games

**CS:GO (Counter-Strike: Global Offensive)**
```bash
# Launch CS:GO
# Console: fps_benchmark 1
# Expected: 300-400+ FPS (1080p max settings)
```

**Dota 2**
```bash
# Launch Dota 2
# Settings > Video > Max settings
# Expected: 200-250+ FPS (1080p)
```

**Team Fortress 2**
```bash
# Launch TF2
# Expected: 300+ FPS (1080p max)
```

---

### 2. Built-in Game Benchmarks

#### Shadow of the Tomb Raider

**1080p Performance**:
- **Low**: 150-180 FPS
- **Medium**: 130-160 FPS
- **High**: 110-140 FPS
- **Highest**: 90-120 FPS

**1440p Performance**:
- **Low**: 110-130 FPS
- **Medium**: 90-110 FPS
- **High**: 75-95 FPS
- **Highest**: 65-85 FPS

**Ray Tracing (1080p)**:
- **RT Medium + DLSS Quality**: 70-90 FPS
- **RT High + DLSS Quality**: 60-75 FPS

---

#### Total War: Three Kingdoms

**1080p Performance**:
- **Low**: 120-150 FPS
- **Medium**: 100-130 FPS
- **High**: 80-110 FPS
- **Ultra**: 70-95 FPS

**1440p Performance**:
- **Medium**: 75-95 FPS
- **High**: 60-80 FPS
- **Ultra**: 50-70 FPS

---

#### Metro Exodus Enhanced Edition

**1080p Performance**:
- **Low**: 100-120 FPS
- **Medium**: 80-100 FPS
- **High**: 65-85 FPS
- **Ultra**: 55-75 FPS

**1080p Ray Tracing**:
- **RT Normal + DLSS Quality**: 60-75 FPS
- **RT High + DLSS Quality**: 50-65 FPS

**1440p Performance**:
- **Medium**: 60-75 FPS
- **High**: 50-65 FPS
- **RT Normal + DLSS**: 45-60 FPS

---

### 3. Proton Gaming (Windows Games on Linux)

#### Cyberpunk 2077

**1080p Performance**:
- **Low**: 90-110 FPS
- **Medium**: 75-95 FPS
- **High**: 65-85 FPS
- **Ultra**: 55-75 FPS

**1080p Ray Tracing**:
- **RT Medium + DLSS Quality**: 65-80 FPS
- **RT Ultra + DLSS Quality**: 50-65 FPS

**1440p Performance**:
- **Medium**: 55-70 FPS
- **High**: 45-60 FPS
- **RT Medium + DLSS**: 45-60 FPS

---

#### Red Dead Redemption 2

**1080p Performance**:
- **Low**: 100-120 FPS
- **Medium**: 80-100 FPS
- **High**: 70-90 FPS
- **Ultra**: 60-75 FPS

**1440p Performance**:
- **Medium**: 60-75 FPS
- **High**: 50-65 FPS
- **Ultra**: 45-60 FPS

---

#### Control

**1080p Performance**:
- **Low**: 110-130 FPS
- **Medium**: 90-110 FPS
- **High**: 75-95 FPS

**1080p Ray Tracing**:
- **RT Medium + DLSS**: 70-85 FPS
- **RT High + DLSS**: 60-75 FPS

**1440p Performance**:
- **Medium**: 65-80 FPS
- **High**: 55-70 FPS
- **RT Medium + DLSS**: 50-65 FPS

---

### 4. Esports Titles Performance

| Game | Resolution | Settings | Expected FPS |
|------|------------|----------|--------------|
| CS:GO | 1080p | Max | 300-400+ |
| Valorant | 1080p | Max | 300-400+ |
| Apex Legends | 1080p | High | 180-220 |
| Fortnite | 1080p | Epic | 150-200 |
| Overwatch 2 | 1080p | Epic | 200-250 |
| Rainbow Six Siege | 1080p | Ultra | 250-300 |
| Rocket League | 1080p | Max | 250+ |
| League of Legends | 1080p | Max | 300+ |

---

### 5. AAA Single-Player Games

| Game | 1080p High | 1080p Ultra | 1440p High |
|------|------------|-------------|------------|
| Assassin's Creed Valhalla | 75-90 | 65-80 | 55-70 |
| God of War | 90-110 | 75-95 | 65-80 |
| Horizon Zero Dawn | 85-105 | 70-90 | 60-75 |
| Death Stranding | 100-120 | 85-105 | 70-90 |
| Elden Ring | 60 (capped) | 60 (capped) | 60 (capped) |
| The Witcher 3 | 100-120 | 85-105 | 70-90 |
| GTA V | 120-150 | 100-130 | 80-110 |

---

### 6. VR Gaming Performance

**VR Headset Compatibility**:
- Oculus Rift/Quest (via Link)
- HTC Vive/Vive Pro
- Valve Index
- Windows Mixed Reality

**VR Benchmark - SteamVR Performance Test**:
```bash
# Install SteamVR
# Run SteamVR Performance Test from Steam

# Expected Results:
# - VR Ready: Yes
# - Quality: High
# - Fidelity: 8-9/11
# - Frame Rate: 90+ FPS (sustained)
```

**VR Game Performance**:
- **Half-Life: Alyx**: High settings, 90 FPS stable
- **Beat Saber**: Ultra settings, 90+ FPS
- **Boneworks**: High settings, 90 FPS
- **VRChat**: High settings, 90 FPS (varies by world)

---

### 7. Streaming Performance

**Purpose**: Test gaming + streaming simultaneously

```bash
# Install OBS Studio
sudo apt install obs-studio

# Recommended OBS Settings for 1080p60 streaming:
# - Encoder: NVENC H.264
# - Rate Control: CBR
# - Bitrate: 6000 Kbps
# - Preset: Quality
# - Profile: High
# - GPU: 0 (RTX 3060)
```

**Gaming + Streaming Performance**:

| Game | Solo FPS | Streaming FPS | Impact |
|------|----------|---------------|--------|
| CS:GO | 350+ | 320+ | Minimal |
| Valorant | 350+ | 320+ | Minimal |
| Apex Legends | 200 | 180-190 | ~10% |
| Cyberpunk 2077 | 75 | 70-72 | ~5% |
| Red Dead 2 | 85 | 80-82 | ~5% |

**CPU Usage While Streaming**:
- Game: 40-60% (8-12 cores)
- NVENC Encoding: 5-10% (GPU encoder)
- Total CPU: 45-70%
- **Plenty of headroom for Discord, browser, etc.**

---

### 8. Frame Time Consistency

**Purpose**: Measure frame pacing and stuttering

```bash
# Install MangoHud for FPS overlay and logging
sudo apt install mangohud

# Run game with MangoHud
mangohud %command%

# Or for Steam games, add to launch options:
# mangohud %command%

# Log frame times
MANGOHUD_CONFIG=fps,frametime,frame_timing=1 mangohud game_executable
```

**Expected Frame Time Consistency**:
- **1% Low FPS**: 80-90% of average FPS
- **0.1% Low FPS**: 70-80% of average FPS
- **Frame Time Variance**: <5ms
- **Stuttering**: Minimal to none

---

### 9. Resolution Scaling Performance

**1080p (1920x1080) - Sweet Spot**:
- Best performance
- Ultra settings achievable
- 100-200+ FPS in most games
- **Recommended for competitive gaming**

**1440p (2560x1440) - Balanced**:
- Excellent visual quality
- High settings achievable
- 60-120 FPS in most games
- **Recommended for single-player AAA**

**4K (3840x2160) - Challenging**:
- Maximum visual quality
- Medium-High settings
- 40-60 FPS in most games
- **DLSS recommended**

---

### 10. DLSS Performance Comparison

**Cyberpunk 2077 (1440p, RT Ultra)**:
- **Native**: 35-45 FPS
- **DLSS Quality**: 55-70 FPS (+60%)
- **DLSS Balanced**: 65-80 FPS (+85%)
- **DLSS Performance**: 75-90 FPS (+110%)

**Control (1440p, RT High)**:
- **Native**: 40-50 FPS
- **DLSS Quality**: 60-75 FPS (+50%)
- **DLSS Balanced**: 70-85 FPS (+75%)

**Metro Exodus (1440p, RT High)**:
- **Native**: 35-45 FPS
- **DLSS Quality**: 50-65 FPS (+45%)
- **DLSS Balanced**: 60-75 FPS (+70%)

---

## 📈 Gaming Performance Summary

### By Resolution

| Resolution | Competitive | AAA High | AAA Ultra | Ray Tracing |
|------------|-------------|----------|-----------|-------------|
| **1080p** | 300+ FPS | 100-150 FPS | 80-120 FPS | 60-90 FPS |
| **1440p** | 200+ FPS | 70-100 FPS | 60-80 FPS | 45-70 FPS |
| **4K** | 120+ FPS | 45-65 FPS | 35-55 FPS | 30-50 FPS |

### By Game Type

| Game Type | 1080p | 1440p | Notes |
|-----------|-------|-------|-------|
| **Esports** | 300+ | 200+ | Competitive advantage |
| **AAA 2023** | 80-120 | 60-90 | High/Ultra settings |
| **AAA 2020** | 100-150 | 80-120 | Ultra settings |
| **Indie** | 200+ | 150+ | Maxed out |
| **VR** | 90+ | N/A | High settings |

---

## 🎯 Gaming Optimization Tips

### 1. NVIDIA Driver Optimization

```bash
# Install latest NVIDIA driver
sudo ubuntu-drivers autoinstall

# Or specific version
sudo apt install nvidia-driver-535

# Enable NVIDIA settings
nvidia-settings

# Recommended settings:
# - Power Management: Prefer Maximum Performance
# - Texture Filtering: High Performance
# - Threaded Optimization: On
```

### 2. Game-Specific Optimizations

**For Competitive Games**:
- Lower settings for maximum FPS
- Disable V-Sync
- Enable Reflex (if available)
- Use 240Hz+ monitor

**For Single-Player**:
- Balance visuals and performance
- Enable DLSS/FSR when available
- Use G-Sync/FreeSync
- Target 60-90 FPS

### 3. System Optimizations

```bash
# Disable compositor (reduces input lag)
# For GNOME:
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"

# Set CPU governor to performance
sudo cpufreq-set -g performance

# Disable unnecessary background services
sudo systemctl stop bluetooth
sudo systemctl stop cups
```

---

## 📝 Gaming Benchmark Script

Save as `scripts/gaming-bench.sh`:

```bash
#!/bin/bash
# Gaming Benchmark Script for Luna Super Machine

RESULTS_DIR="results/gaming"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "=== Luna Super Machine - Gaming Benchmarks ==="
echo "Timestamp: $TIMESTAMP"
echo ""

# System info
echo "=== System Information ===" | tee "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"
nvidia-smi | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"
echo "" | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"

# Check driver
echo "=== NVIDIA Driver ===" | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"
nvidia-smi --query-gpu=driver_version --format=csv,noheader | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"
echo "" | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"

# Vulkan support
echo "=== Vulkan Support ===" | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"
vulkaninfo --summary | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"
echo "" | tee -a "$RESULTS_DIR/gaming_report_${TIMESTAMP}.txt"

echo "Gaming benchmark report saved!"
echo ""
echo "To benchmark games:"
echo "1. Install Steam: sudo apt install steam"
echo "2. Enable Proton in Steam settings"
echo "3. Run games with built-in benchmarks"
echo "4. Use MangoHud for FPS monitoring: mangohud %command%"
```

---

## 🏆 Luna Super Machine Gaming Strengths

### ✅ Excellent For:
- **1080p Ultra Gaming**: 100+ FPS in all modern games
- **1440p High Gaming**: 60-90 FPS sweet spot
- **Competitive Gaming**: 300+ FPS in esports titles
- **Streaming**: NVENC encoding with minimal performance impact
- **VR Gaming**: Smooth 90 FPS in all VR titles
- **Multi-tasking**: Game + Discord + browser + music

### ⚠️ Considerations:
- **4K Gaming**: Playable but may need settings adjustment
- **Ray Tracing**: Use DLSS for best performance
- **Future-Proofing**: 3-5 years at high settings

---

**Previous**: [System Benchmarks](./05-system-benchmarks.md) | **Next**: [Run All Benchmarks](./scripts/run-all-benchmarks.sh)

