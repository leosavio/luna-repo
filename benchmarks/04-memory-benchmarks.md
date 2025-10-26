# Memory Benchmarks - Corsair Vengeance LPX 64GB DDR4

## 🎯 Overview

The Corsair Vengeance LPX 64GB (2x32GB) DDR4-3200 CL16 kit provides massive capacity and excellent performance for demanding workloads. This guide covers comprehensive memory benchmarking.

## 📊 Specifications Recap

- **Model**: Corsair Vengeance LPX
- **Capacity**: 64GB (2x32GB)
- **Speed**: 3200MHz (DDR4-3200)
- **Latency**: CL16-18-18-36
- **Voltage**: 1.35V
- **Configuration**: Dual Channel
- **ECC**: No
- **Heat Spreader**: Yes (Low Profile)
- **Theoretical Bandwidth**: ~51.2 GB/s (dual channel)

---

## 🔧 Prerequisites

### Check Current Memory Configuration

```bash
# Check memory info
sudo dmidecode --type memory

# Check current speed and timings
sudo dmidecode -t memory | grep -i speed
sudo dmidecode -t memory | grep -i timing

# Check memory channels
sudo dmidecode -t memory | grep -i channel

# Simple memory info
free -h

# Detailed memory info
cat /proc/meminfo
```

### Install Benchmark Tools

```bash
# Install sysbench
sudo apt install sysbench

# Install mbw (Memory Bandwidth)
sudo apt install mbw

# Install stream benchmark
sudo apt install stream

# Install stress-ng
sudo apt install stress-ng

# Install memtester
sudo apt install memtester

# Install RAMspeed
sudo apt install ramspeed
```

---

## 🧪 Benchmark Tests

### 1. Sysbench - Memory Performance

**Purpose**: Sequential and random memory access patterns

```bash
# Sequential memory test
sysbench memory --memory-block-size=1M --memory-total-size=100G run

# Random memory test
sysbench memory --memory-block-size=1M --memory-total-size=100G \
    --memory-access-mode=rnd run

# Small block random access
sysbench memory --memory-block-size=4K --memory-total-size=10G \
    --memory-access-mode=rnd run

# Multi-threaded test
sysbench memory --memory-block-size=1M --memory-total-size=100G \
    --threads=24 run
```

**Expected Results**:
- Sequential (1M blocks): 45,000-50,000 MB/s
- Random (1M blocks): 40,000-45,000 MB/s
- Random (4K blocks): 15,000-20,000 MB/s
- Multi-threaded: 45,000-51,000 MB/s

---

### 2. STREAM Benchmark

**Purpose**: Sustainable memory bandwidth measurement

```bash
# Run STREAM benchmark
stream

# Or compile from source for better optimization
wget https://www.cs.virginia.edu/stream/FTP/Code/stream.c
gcc -O3 -march=native -fopenmp -DSTREAM_ARRAY_SIZE=100000000 stream.c -o stream
export OMP_NUM_THREADS=24
./stream
```

**Expected Results**:
- **Copy**: 43,000-48,000 MB/s
- **Scale**: 43,000-48,000 MB/s
- **Add**: 45,000-50,000 MB/s
- **Triad**: 45,000-50,000 MB/s

---

### 3. MBW - Memory Bandwidth Test

**Purpose**: Quick memory bandwidth check

```bash
# Run mbw with different block sizes
mbw 1024

# Detailed test
mbw -n 10 2048

# All tests
mbw -a 4096
```

**Expected Results**:
- **MEMCPY**: 45,000-50,000 MB/s
- **DUMB**: 40,000-45,000 MB/s
- **MCBLOCK**: 45,000-50,000 MB/s

---

### 4. RAMspeed

**Purpose**: Comprehensive memory performance testing

```bash
# Integer benchmarks
ramspeed -b 3 -l 5

# Floating point benchmarks
ramspeed -b 6 -l 5

# All tests
ramspeed -b 1 -l 10
```

**Expected Results**:
- **INT Copy**: 45,000+ MB/s
- **INT Scale**: 45,000+ MB/s
- **FP Copy**: 45,000+ MB/s
- **FP Scale**: 45,000+ MB/s

---

### 5. Latency Testing

**Purpose**: Measure memory access latency

```bash
# Install Intel Memory Latency Checker (if available)
# Or use custom latency test

# Create latency test script
cat > memory_latency_test.c << 'EOF'
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdint.h>

#define SIZE (64 * 1024 * 1024) // 64MB
#define ITERATIONS 100000000

int main() {
    uint64_t *array = malloc(SIZE);
    if (!array) return 1;
    
    // Initialize with random access pattern
    for (int i = 0; i < SIZE/8 - 1; i++) {
        array[i] = (i + 1) % (SIZE/8);
    }
    array[SIZE/8 - 1] = 0;
    
    // Measure latency
    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);
    
    uint64_t index = 0;
    for (int i = 0; i < ITERATIONS; i++) {
        index = array[index];
    }
    
    clock_gettime(CLOCK_MONOTONIC, &end);
    
    double elapsed = (end.tv_sec - start.tv_sec) + 
                     (end.tv_nsec - start.tv_nsec) / 1e9;
    double latency_ns = (elapsed / ITERATIONS) * 1e9;
    
    printf("Average latency: %.2f ns\n", latency_ns);
    printf("Dummy result: %lu\n", index); // Prevent optimization
    
    free(array);
    return 0;
}
EOF

gcc -O2 memory_latency_test.c -o memory_latency_test
./memory_latency_test
```

**Expected Results**:
- **L1 Cache**: ~1-2 ns
- **L2 Cache**: ~3-5 ns
- **L3 Cache**: ~10-15 ns
- **Main Memory (DDR4-3200)**: 65-75 ns

---

### 6. Memory Stress Testing

**Purpose**: Stability and error checking

```bash
# Stress-ng memory stress (10 minutes)
stress-ng --vm 8 --vm-bytes 8G --timeout 600s --metrics-brief

# Memory allocator stress
stress-ng --malloc 4 --malloc-bytes 16G --timeout 300s --metrics-brief

# Cache stress
stress-ng --cache 24 --timeout 300s --metrics-brief

# Combined stress
stress-ng --vm 4 --vm-bytes 16G --cache 12 --timeout 600s --metrics-brief
```

**Monitor during stress test**:
```bash
# In another terminal
watch -n 1 free -h
```

---

### 7. Memtester - Memory Error Testing

**Purpose**: Test for memory errors and stability

```bash
# Test 8GB of memory (run as root)
sudo memtester 8G 5

# Test 16GB (longer test)
sudo memtester 16G 3

# Test specific amount with more iterations
sudo memtester 4G 10
```

**Expected Result**: All tests should PASS with no errors

---

### 8. Multi-threaded Memory Access

**Purpose**: Test memory bandwidth under concurrent access

```bash
# Create multi-threaded memory test
cat > mt_memory_test.c << 'EOF'
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <time.h>

#define NUM_THREADS 24
#define SIZE_PER_THREAD (256 * 1024 * 1024) // 256MB per thread

void* memory_worker(void* arg) {
    long tid = (long)arg;
    size_t size = SIZE_PER_THREAD / sizeof(long);
    long* data = malloc(SIZE_PER_THREAD);
    
    // Write test
    for (size_t i = 0; i < size; i++) {
        data[i] = tid * size + i;
    }
    
    // Read test
    long sum = 0;
    for (size_t i = 0; i < size; i++) {
        sum += data[i];
    }
    
    free(data);
    return (void*)sum;
}

int main() {
    pthread_t threads[NUM_THREADS];
    struct timespec start, end;
    
    clock_gettime(CLOCK_MONOTONIC, &start);
    
    for (long i = 0; i < NUM_THREADS; i++) {
        pthread_create(&threads[i], NULL, memory_worker, (void*)i);
    }
    
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }
    
    clock_gettime(CLOCK_MONOTONIC, &end);
    
    double elapsed = (end.tv_sec - start.tv_sec) + 
                     (end.tv_nsec - start.tv_nsec) / 1e9;
    double total_gb = (NUM_THREADS * SIZE_PER_THREAD * 2.0) / (1024*1024*1024);
    double bandwidth = total_gb / elapsed;
    
    printf("Total data: %.2f GB\n", total_gb);
    printf("Time: %.2f seconds\n", elapsed);
    printf("Bandwidth: %.2f GB/s\n", bandwidth);
    
    return 0;
}
EOF

gcc -O2 -pthread mt_memory_test.c -o mt_memory_test
./mt_memory_test
```

**Expected Result**: 40-50 GB/s aggregate bandwidth

---

### 9. Cache Performance Testing

**Purpose**: Measure CPU cache performance

```bash
# Create cache benchmark
cat > cache_bench.c << 'EOF'
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void test_cache_size(size_t size, const char* name) {
    size_t iterations = 100000000;
    int* array = malloc(size);
    
    // Initialize
    for (size_t i = 0; i < size/sizeof(int); i++) {
        array[i] = i;
    }
    
    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);
    
    int sum = 0;
    for (size_t i = 0; i < iterations; i++) {
        sum += array[(i * 16) % (size/sizeof(int))];
    }
    
    clock_gettime(CLOCK_MONOTONIC, &end);
    
    double elapsed = (end.tv_sec - start.tv_sec) + 
                     (end.tv_nsec - start.tv_nsec) / 1e9;
    double ns_per_access = (elapsed / iterations) * 1e9;
    
    printf("%s (%zu KB): %.2f ns/access\n", name, size/1024, ns_per_access);
    printf("Dummy: %d\n", sum);
    
    free(array);
}

int main() {
    test_cache_size(32 * 1024, "L1 Cache");           // 32KB
    test_cache_size(512 * 1024, "L2 Cache");          // 512KB
    test_cache_size(32 * 1024 * 1024, "L3 Cache");    // 32MB
    test_cache_size(128 * 1024 * 1024, "Main Memory"); // 128MB
    
    return 0;
}
EOF

gcc -O2 cache_bench.c -o cache_bench
./cache_bench
```

**Expected Results**:
- **L1 (32KB)**: 1-2 ns/access
- **L2 (512KB)**: 3-5 ns/access
- **L3 (32MB)**: 10-15 ns/access
- **Main Memory**: 65-75 ns/access

---

### 10. Real-World Memory Usage Scenarios

**Purpose**: Test memory in practical scenarios

```bash
# Large dataset processing (Python/NumPy)
cat > memory_workload.py << 'EOF'
import numpy as np
import time

print("Testing large array operations...")

# Allocate large arrays (use ~40GB)
size = 5000000000  # 5 billion elements = ~40GB
print(f"Allocating {size * 8 / 1e9:.1f} GB...")

start = time.time()
a = np.arange(size, dtype=np.int64)
end = time.time()
print(f"Allocation time: {end - start:.2f}s")

# Memory operations
start = time.time()
b = a * 2
end = time.time()
print(f"Multiplication time: {end - start:.2f}s")

start = time.time()
c = a + b
end = time.time()
print(f"Addition time: {end - start:.2f}s")

print("Memory test complete!")
EOF

python3 memory_workload.py
```

---

## 📈 Performance Summary Table

| Benchmark | Test Type | Expected Result | Notes |
|-----------|-----------|-----------------|-------|
| STREAM Copy | Bandwidth | 43-48 GB/s | Dual channel |
| STREAM Triad | Bandwidth | 45-50 GB/s | Best case |
| Sysbench Sequential | Bandwidth | 45-50 GB/s | 1M blocks |
| MBW MEMCPY | Bandwidth | 45-50 GB/s | Standard copy |
| Latency | Access time | 65-75 ns | DDR4-3200 |
| L3 Cache | Access time | 10-15 ns | 64MB total |
| Multi-threaded | Aggregate | 40-50 GB/s | 24 threads |
| Memtester | Stability | PASS | No errors |

---

## 🎯 Memory Configuration Optimization

### Check XMP/DOCP Profile

```bash
# Check if XMP is enabled in BIOS
sudo dmidecode -t memory | grep -i speed

# Should show:
# Configured Memory Speed: 3200 MT/s
# If showing 2133 or 2666, XMP/DOCP is not enabled
```

### Enable XMP/DOCP in BIOS

1. Reboot and enter BIOS (DEL or F2 key)
2. Navigate to AI Tweaker or Extreme Tweaker
3. Set "Memory Frequency" to "D.O.C.P."
4. Select "D.O.C.P. DDR4-3200 16-18-18-36"
5. Save and exit

### Verify Memory Timings

```bash
# Install decode-dimms
sudo apt install i2c-tools

# Read SPD data
sudo modprobe eeprom
sudo decode-dimms
```

---

## 💡 Real-World Performance Impact

### Gaming
- **64GB Capacity**: Run games + Discord + browser + streaming software
- **3200MHz Speed**: 5-10% better FPS vs 2666MHz in CPU-bound games
- **Dual Channel**: 2x bandwidth vs single channel

### Content Creation
- **Video Editing**: Load entire 4K project in RAM
- **3D Rendering**: Large scenes fit in memory
- **Photo Editing**: Hundreds of layers without slowdown

### Software Development
- **IDEs**: Multiple projects open simultaneously
- **Containers**: Run 20+ Docker containers
- **VMs**: Run 4-6 VMs with 8-16GB each
- **Build Systems**: Massive parallel compilation

### Data Science
- **Large Datasets**: 40-50GB datasets in memory
- **Machine Learning**: Large batch sizes
- **Data Processing**: In-memory analytics

---

## 📝 Memory Benchmark Script

Save as `scripts/memory-bench.sh`:

```bash
#!/bin/bash
# Memory Benchmark Script for Luna Super Machine

RESULTS_DIR="results/memory"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "=== Luna Super Machine - Memory Benchmarks ==="
echo "Timestamp: $TIMESTAMP"
echo "RAM: Corsair Vengeance LPX 64GB DDR4-3200 CL16"
echo ""

# Memory info
echo "Getting memory information..."
sudo dmidecode -t memory > "$RESULTS_DIR/memory_info_${TIMESTAMP}.txt"
free -h >> "$RESULTS_DIR/memory_info_${TIMESTAMP}.txt"

# Sysbench sequential
echo "Running Sysbench sequential test..."
sysbench memory --memory-block-size=1M --memory-total-size=50G run \
    > "$RESULTS_DIR/sysbench_seq_${TIMESTAMP}.txt"

# Sysbench random
echo "Running Sysbench random test..."
sysbench memory --memory-block-size=1M --memory-total-size=50G \
    --memory-access-mode=rnd run \
    > "$RESULTS_DIR/sysbench_rnd_${TIMESTAMP}.txt"

# STREAM benchmark
echo "Running STREAM benchmark..."
stream > "$RESULTS_DIR/stream_${TIMESTAMP}.txt"

# MBW test
echo "Running MBW test..."
mbw 2048 > "$RESULTS_DIR/mbw_${TIMESTAMP}.txt"

echo ""
echo "Memory benchmarks complete! Results saved to $RESULTS_DIR"
```

---

**Next**: [System Benchmarks](./05-system-benchmarks.md)

