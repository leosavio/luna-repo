# Storage Benchmarks - Kingston KC3000 2TB NVMe SSD

## 🎯 Overview

The Kingston KC3000 is a high-performance PCIe 4.0 NVMe SSD featuring exceptional read/write speeds up to 7000 MB/s. This guide covers comprehensive storage benchmarking.

## 📊 Specifications Recap

- **Model**: Kingston KC3000
- **Capacity**: 2TB
- **Interface**: PCIe 4.0 x4, NVMe 1.4
- **Form Factor**: M.2 2280
- **Controller**: Phison E18
- **NAND**: 3D TLC
- **Sequential Read**: Up to 7,000 MB/s
- **Sequential Write**: Up to 7,000 MB/s
- **Random Read (4K)**: Up to 1,000,000 IOPS
- **Random Write (4K)**: Up to 1,000,000 IOPS
- **DRAM Cache**: Yes
- **Endurance (TBW)**: 1,600 TB

---

## 🔧 Prerequisites

### Check NVMe Drive Information

```bash
# List NVMe devices
sudo nvme list

# Get detailed info
sudo nvme id-ctrl /dev/nvme0

# Check SMART data
sudo nvme smart-log /dev/nvme0

# Install nvme-cli if needed
sudo apt install nvme-cli
```

### Install Benchmark Tools

```bash
# Install fio (Flexible I/O Tester)
sudo apt install fio

# Install hdparm
sudo apt install hdparm

# Install iozone
sudo apt install iozone3

# Install bonnie++
sudo apt install bonnie++

# Install dd for basic tests
# (already installed on Ubuntu)
```

---

## 🧪 Benchmark Tests

### 1. FIO - Comprehensive I/O Testing

**Purpose**: Industry-standard storage benchmark

#### Sequential Read Test

```bash
# Sequential read (1GB file, 128K block size)
sudo fio --name=seq-read \
    --filename=/tmp/fio-test \
    --size=1G \
    --rw=read \
    --bs=128k \
    --direct=1 \
    --numjobs=1 \
    --time_based \
    --runtime=60 \
    --group_reporting
```

**Expected Result**: 6,800-7,000 MB/s

#### Sequential Write Test

```bash
# Sequential write (1GB file, 128K block size)
sudo fio --name=seq-write \
    --filename=/tmp/fio-test \
    --size=1G \
    --rw=write \
    --bs=128k \
    --direct=1 \
    --numjobs=1 \
    --time_based \
    --runtime=60 \
    --group_reporting
```

**Expected Result**: 6,800-7,000 MB/s

#### Random Read Test (4K)

```bash
# Random read (4K blocks)
sudo fio --name=rand-read-4k \
    --filename=/tmp/fio-test \
    --size=1G \
    --rw=randread \
    --bs=4k \
    --direct=1 \
    --numjobs=4 \
    --time_based \
    --runtime=60 \
    --group_reporting \
    --ioengine=libaio \
    --iodepth=32
```

**Expected Result**: 600,000-800,000 IOPS

#### Random Write Test (4K)

```bash
# Random write (4K blocks)
sudo fio --name=rand-write-4k \
    --filename=/tmp/fio-test \
    --size=1G \
    --rw=randwrite \
    --bs=4k \
    --direct=1 \
    --numjobs=4 \
    --time_based \
    --runtime=60 \
    --group_reporting \
    --ioengine=libaio \
    --iodepth=32
```

**Expected Result**: 600,000-800,000 IOPS

#### Mixed Read/Write Test (70/30)

```bash
# Mixed workload (70% read, 30% write)
sudo fio --name=mixed-rw \
    --filename=/tmp/fio-test \
    --size=1G \
    --rw=randrw \
    --rwmixread=70 \
    --bs=4k \
    --direct=1 \
    --numjobs=4 \
    --time_based \
    --runtime=60 \
    --group_reporting \
    --ioengine=libaio \
    --iodepth=32
```

**Expected Result**: 400,000-600,000 IOPS combined

---

### 2. DD - Simple Sequential Tests

**Purpose**: Quick sequential performance check

```bash
# Sequential write test (10GB)
dd if=/dev/zero of=/tmp/test-write bs=1M count=10240 conv=fdatasync

# Sequential read test (clear cache first)
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
dd if=/tmp/test-write of=/dev/null bs=1M count=10240

# Clean up
rm /tmp/test-write
```

**Expected Results**:
- Write: 6,500-7,000 MB/s
- Read: 6,800-7,000 MB/s

---

### 3. hdparm - Drive Speed Test

**Purpose**: Quick read performance test

```bash
# Cached reads
sudo hdparm -t /dev/nvme0n1

# Direct reads (bypassing cache)
sudo hdparm -T /dev/nvme0n1

# Both tests
sudo hdparm -tT /dev/nvme0n1
```

**Expected Results**:
- Cached reads: 6,500-7,000 MB/s
- Buffered reads: 10,000+ MB/s (from RAM cache)

---

### 4. Bonnie++ - File System Benchmark

**Purpose**: Real-world file system performance

```bash
# Run bonnie++ (as regular user, not root)
bonnie++ -d /tmp -s 16G -n 0 -m "Luna-KC3000" -f -b

# With file creation tests
bonnie++ -d /tmp -s 16G -n 128 -m "Luna-KC3000" -f -b
```

**Expected Results**:
- Sequential Output (Block): 6,500+ MB/s
- Sequential Input (Block): 6,800+ MB/s
- Random Seeks: 400+ /sec

---

### 5. IOzone - Comprehensive File System Test

**Purpose**: Detailed file system performance analysis

```bash
# Run IOzone with various file sizes
iozone -a -s 1G -r 4k -r 128k -r 1m -i 0 -i 1 -i 2 -f /tmp/iozone-test

# Automated test with graph output
iozone -Ra -g 4G -f /tmp/iozone-test > results/storage/iozone_$(date +%Y%m%d_%H%M%S).txt
```

**Expected Results**:
- Sequential Write: 6,500+ MB/s
- Sequential Read: 6,800+ MB/s
- Random Read: 2,500+ MB/s
- Random Write: 2,500+ MB/s

---

### 6. Real-World File Operations

**Purpose**: Practical performance scenarios

#### Large File Copy Test

```bash
# Create 10GB test file
dd if=/dev/urandom of=/tmp/source-file bs=1M count=10240

# Time the copy
time cp /tmp/source-file /tmp/dest-file

# Calculate speed
# Speed = 10240 MB / time_in_seconds
```

**Expected Result**: 3,000-5,000 MB/s (internal copy)

#### Many Small Files Test

```bash
# Create directory with 10,000 small files
mkdir -p /tmp/small-files-test
cd /tmp/small-files-test

# Create files
time for i in {1..10000}; do echo "test data" > file_$i.txt; done

# Read all files
time cat file_*.txt > /dev/null

# Delete all files
time rm -rf /tmp/small-files-test
```

**Expected Results**:
- Create 10,000 files: 2-5 seconds
- Read 10,000 files: 1-3 seconds
- Delete 10,000 files: 1-2 seconds

#### Archive Compression Test

```bash
# Create test data
dd if=/dev/urandom of=/tmp/test-data bs=1M count=5120

# Compress with tar
time tar -czf /tmp/test-archive.tar.gz /tmp/test-data

# Decompress
time tar -xzf /tmp/test-archive.tar.gz -C /tmp/
```

**Expected Results**:
- Compression: Limited by CPU, not storage
- Decompression: Limited by CPU, not storage
- No I/O bottleneck

---

### 7. Database-Style Workload (SQLite)

**Purpose**: Database I/O performance

```bash
# Install SQLite
sudo apt install sqlite3

# Create benchmark script
cat > storage_db_bench.sh << 'EOF'
#!/bin/bash
DB_FILE="/tmp/test.db"
rm -f $DB_FILE

# Create database and table
sqlite3 $DB_FILE << SQL
CREATE TABLE test_data (
    id INTEGER PRIMARY KEY,
    data TEXT,
    timestamp INTEGER
);
SQL

# Insert 100,000 records
echo "Inserting 100,000 records..."
time sqlite3 $DB_FILE << SQL
BEGIN TRANSACTION;
$(for i in {1..100000}; do echo "INSERT INTO test_data VALUES ($i, 'test data $i', $(date +%s));"; done)
COMMIT;
SQL

# Query performance
echo "Running queries..."
time sqlite3 $DB_FILE "SELECT COUNT(*) FROM test_data;"
time sqlite3 $DB_FILE "SELECT * FROM test_data WHERE id = 50000;"

# Clean up
rm -f $DB_FILE
EOF

chmod +x storage_db_bench.sh
./storage_db_bench.sh
```

**Expected Results**:
- 100,000 inserts: 5-10 seconds
- Count query: <1 second
- Single record query: <0.1 second

---

### 8. Sustained Write Performance Test

**Purpose**: Test for write performance degradation (SLC cache exhaustion)

```bash
# Write 100GB continuously to test SLC cache behavior
sudo fio --name=sustained-write \
    --filename=/tmp/fio-sustained \
    --size=100G \
    --rw=write \
    --bs=128k \
    --direct=1 \
    --numjobs=1 \
    --group_reporting \
    --output=results/storage/sustained_write_$(date +%Y%m%d_%H%M%S).txt

# Monitor write speed over time
# Should see:
# - First ~100-200GB: Full speed (7000 MB/s) - SLC cache
# - After cache full: Slower (2000-3000 MB/s) - TLC direct write
```

**Expected Behavior**:
- **SLC Cache Size**: ~100-200GB (dynamic)
- **Cache Speed**: 6,500-7,000 MB/s
- **Post-Cache Speed**: 2,000-3,000 MB/s
- **Recovery**: Fast (cache rebuilds during idle)

---

### 9. Latency Testing

**Purpose**: Measure access latency

```bash
# Install ioping
sudo apt install ioping

# Test latency
ioping -c 100 /tmp

# Detailed latency stats
ioping -c 1000 -s 4k /tmp
```

**Expected Results**:
- **Average Latency**: 50-100 microseconds
- **Min Latency**: 30-50 microseconds
- **Max Latency**: <1 millisecond (99th percentile)

---

### 10. NVMe-Specific Tests

**Purpose**: NVMe protocol performance

```bash
# Check NVMe features
sudo nvme id-ctrl /dev/nvme0 | grep -i "volatile write cache"

# Flush performance
sudo nvme flush /dev/nvme0

# Format performance (WARNING: DESTROYS DATA)
# sudo nvme format /dev/nvme0 --ses=1

# Get error log
sudo nvme error-log /dev/nvme0

# Get SMART health info
sudo nvme smart-log /dev/nvme0
```

---

## 📈 Performance Summary Table

| Benchmark | Test Type | Expected Result | Notes |
|-----------|-----------|-----------------|-------|
| FIO Sequential Read | 128K blocks | 6,800-7,000 MB/s | PCIe 4.0 max |
| FIO Sequential Write | 128K blocks | 6,800-7,000 MB/s | SLC cache |
| FIO Random Read | 4K blocks | 600K-800K IOPS | QD32 |
| FIO Random Write | 4K blocks | 600K-800K IOPS | QD32 |
| DD Sequential Read | 1M blocks | 6,800-7,000 MB/s | Simple test |
| DD Sequential Write | 1M blocks | 6,500-7,000 MB/s | Simple test |
| Latency (ioping) | 4K | 50-100 μs | Average |
| Sustained Write | 100GB+ | 2,000-3,000 MB/s | Post-cache |
| Small Files (10K) | Create | 2-5 seconds | File system |

---

## 🌡️ Thermal Performance

### Monitor SSD Temperature

```bash
# Check temperature
sudo nvme smart-log /dev/nvme0 | grep temperature

# Continuous monitoring
watch -n 1 'sudo nvme smart-log /dev/nvme0 | grep temperature'
```

### Expected Temperatures

- **Idle**: 35-45°C
- **Light Load**: 45-55°C
- **Heavy Load**: 55-70°C
- **Thermal Throttle**: >80°C (should not occur with proper airflow)

**Note**: The ASUS TUF B550-PLUS motherboard has M.2 heatsinks which help maintain optimal temperatures.

---

## 💾 Health Monitoring

### Check Drive Health

```bash
# SMART data
sudo nvme smart-log /dev/nvme0

# Key metrics to monitor:
# - Percentage Used
# - Data Units Written
# - Power Cycles
# - Unsafe Shutdowns
# - Media Errors

# Detailed SMART info
sudo smartctl -a /dev/nvme0
```

### Expected Endurance

- **TBW Rating**: 1,600 TB
- **Daily Write (5 years)**: ~875 GB/day
- **Warranty**: 5 years

---

## 📝 Storage Benchmark Script

Save as `scripts/storage-bench.sh`:

```bash
#!/bin/bash
# Storage Benchmark Script for Luna Super Machine

RESULTS_DIR="results/storage"
mkdir -p "$RESULTS_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "=== Luna Super Machine - Storage Benchmarks ==="
echo "Timestamp: $TIMESTAMP"
echo "SSD: Kingston KC3000 2TB NVMe"
echo ""

# NVMe info
echo "Getting NVMe information..."
sudo nvme list > "$RESULTS_DIR/nvme_info_${TIMESTAMP}.txt"
sudo nvme smart-log /dev/nvme0 >> "$RESULTS_DIR/nvme_info_${TIMESTAMP}.txt"

# Sequential read
echo "Running sequential read test..."
sudo fio --name=seq-read --filename=/tmp/fio-test --size=1G \
    --rw=read --bs=128k --direct=1 --numjobs=1 \
    --time_based --runtime=60 --group_reporting \
    --output="$RESULTS_DIR/seq_read_${TIMESTAMP}.txt"

# Sequential write
echo "Running sequential write test..."
sudo fio --name=seq-write --filename=/tmp/fio-test --size=1G \
    --rw=write --bs=128k --direct=1 --numjobs=1 \
    --time_based --runtime=60 --group_reporting \
    --output="$RESULTS_DIR/seq_write_${TIMESTAMP}.txt"

# Random read 4K
echo "Running random read test..."
sudo fio --name=rand-read-4k --filename=/tmp/fio-test --size=1G \
    --rw=randread --bs=4k --direct=1 --numjobs=4 \
    --time_based --runtime=60 --group_reporting \
    --ioengine=libaio --iodepth=32 \
    --output="$RESULTS_DIR/rand_read_${TIMESTAMP}.txt"

# Random write 4K
echo "Running random write test..."
sudo fio --name=rand-write-4k --filename=/tmp/fio-test --size=1G \
    --rw=randwrite --bs=4k --direct=1 --numjobs=4 \
    --time_based --runtime=60 --group_reporting \
    --ioengine=libaio --iodepth=32 \
    --output="$RESULTS_DIR/rand_write_${TIMESTAMP}.txt"

# Cleanup
rm -f /tmp/fio-test

echo ""
echo "Storage benchmarks complete! Results saved to $RESULTS_DIR"
```

---

## 🎯 Real-World Performance Scenarios

### Gaming
- **Game Loading**: 2-5 seconds for large games
- **Level Loading**: Near-instant (<2 seconds)
- **Asset Streaming**: No stuttering, smooth texture loading

### Video Editing
- **4K Timeline Scrubbing**: Real-time, no lag
- **Project Loading**: Fast, even with large projects
- **Export Speed**: Not storage-limited

### Software Development
- **Project Compilation**: Fast I/O, no bottleneck
- **Git Operations**: Near-instant
- **IDE Indexing**: Quick, responsive

### Virtual Machines
- **VM Boot Time**: 5-10 seconds
- **Multiple VMs**: No I/O contention
- **Snapshot Operations**: Fast

---

**Next**: [Memory Benchmarks](./04-memory-benchmarks.md)

