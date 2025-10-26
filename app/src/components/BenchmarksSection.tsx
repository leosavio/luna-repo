import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Cpu, MonitorDot, HardDrive, MemoryStick, Award } from 'lucide-react';

const cpuBenchmarkData = [
  { name: 'Single-Core', score: 5421, expected: 5200 },
  { name: 'Multi-Core', score: 63705, expected: 60000 },
  { name: '7-Zip Comp', score: 87931, expected: 80000 },
  { name: '7-Zip Decomp', score: 96799, expected: 85000 },
];

const gpuBenchmarkData = [
  { name: 'GLMark2', score: 5163, expected: 5000 },
  { name: '1080p FPS', score: 150, expected: 120 },
  { name: '1440p FPS', score: 95, expected: 80 },
  { name: 'RT FPS', score: 75, expected: 60 },
];

const storageBenchmarkData = [
  { name: 'Seq Read', score: 7510, expected: 7000 },
  { name: 'Seq Write', score: 4959, expected: 5000 },
  { name: 'Random Read', score: 3074, expected: 2800 },
  { name: 'Random Write', score: 2100, expected: 2200 },
];

const overallPerformance = [
  { category: 'CPU', performance: 106.2, fullMark: 110 },
  { category: 'GPU', performance: 103.3, fullMark: 110 },
  { category: 'Storage', performance: 107.3, fullMark: 110 },
  { category: 'Memory', performance: 100, fullMark: 110 },
  { category: 'Thermal', performance: 95, fullMark: 110 },
];

export function BenchmarksSection() {
  return (
    <section id="benchmarks" className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
            Comprehensive Benchmarks
          </h2>
          <p className="text-purple-300 mb-6">Detailed performance analysis across all components</p>
          <Badge className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-2">
            <Award className="w-4 h-4 mr-2" />
            All Results Verified - October 26, 2025
          </Badge>
        </motion.div>

        {/* Overall Performance Radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8">
            <h3 className="text-2xl text-white mb-6 text-center">Overall System Performance</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={overallPerformance}>
                  <PolarGrid stroke="#7c3aed" opacity={0.3} />
                  <PolarAngleAxis dataKey="category" tick={{ fill: '#c4b5fd' }} />
                  <PolarRadiusAxis angle={90} domain={[0, 110]} tick={{ fill: '#c4b5fd' }} />
                  <Radar name="Performance %" dataKey="performance" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  <Legend wrapperStyle={{ color: '#c4b5fd' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                    labelStyle={{ color: '#c4b5fd' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Detailed Benchmarks Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Tabs defaultValue="cpu" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-purple-500/30 mb-8">
              <TabsTrigger value="cpu" className="data-[state=active]:bg-purple-600">
                <Cpu className="w-4 h-4 mr-2" />
                CPU
              </TabsTrigger>
              <TabsTrigger value="gpu" className="data-[state=active]:bg-purple-600">
                <MonitorDot className="w-4 h-4 mr-2" />
                GPU
              </TabsTrigger>
              <TabsTrigger value="storage" className="data-[state=active]:bg-purple-600">
                <HardDrive className="w-4 h-4 mr-2" />
                Storage
              </TabsTrigger>
              <TabsTrigger value="memory" className="data-[state=active]:bg-purple-600">
                <MemoryStick className="w-4 h-4 mr-2" />
                Memory
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cpu">
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">CPU Performance - AMD Ryzen 9 5900X</h3>
                  <Badge className="bg-green-500/20 border border-green-500/50 text-green-300">
                    ⭐⭐⭐⭐⭐ EXCEEDS EXPECTATIONS
                  </Badge>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cpuBenchmarkData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#7c3aed" opacity={0.3} />
                      <XAxis dataKey="name" tick={{ fill: '#c4b5fd' }} />
                      <YAxis tick={{ fill: '#c4b5fd' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                        labelStyle={{ color: '#c4b5fd' }}
                      />
                      <Legend wrapperStyle={{ color: '#c4b5fd' }} />
                      <Bar dataKey="score" fill="#8b5cf6" name="Actual Score" />
                      <Bar dataKey="expected" fill="#6366f1" name="Expected Score" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300">
                    <strong className="text-white">Sysbench Multi-Core:</strong> 63,705 events/s ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">7-Zip Overall:</strong> 92,365 MIPS ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">All 24 Threads:</strong> Working perfectly ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">Performance:</strong> +10-14% above target ⭐
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="gpu">
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">GPU Performance - RTX 3060 12GB</h3>
                  <Badge className="bg-green-500/20 border border-green-500/50 text-green-300">
                    ⭐⭐⭐⭐⭐ PERFECT CONFIGURATION
                  </Badge>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gpuBenchmarkData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#7c3aed" opacity={0.3} />
                      <XAxis dataKey="name" tick={{ fill: '#c4b5fd' }} />
                      <YAxis tick={{ fill: '#c4b5fd' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                        labelStyle={{ color: '#c4b5fd' }}
                      />
                      <Legend wrapperStyle={{ color: '#c4b5fd' }} />
                      <Bar dataKey="score" fill="#10b981" name="Actual Performance" />
                      <Bar dataKey="expected" fill="#059669" name="Expected Performance" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300">
                    <strong className="text-white">GLMark2 Score:</strong> 5,163 ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">VRAM:</strong> 12GB GDDR6 ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">CUDA:</strong> 12.8 (Latest) ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">Ray Tracing:</strong> DLSS 2.0+ Supported ✓
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="storage">
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">Storage Performance - Kingston KC3000 2TB</h3>
                  <Badge className="bg-green-500/20 border border-green-500/50 text-green-300">
                    ⭐⭐⭐⭐⭐ EXCEEDS SPECIFICATION!
                  </Badge>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={storageBenchmarkData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#7c3aed" opacity={0.3} />
                      <XAxis dataKey="name" tick={{ fill: '#c4b5fd' }} />
                      <YAxis tick={{ fill: '#c4b5fd' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                        labelStyle={{ color: '#c4b5fd' }}
                      />
                      <Legend wrapperStyle={{ color: '#c4b5fd' }} />
                      <Bar dataKey="score" fill="#a855f7" name="Actual Speed (MB/s)" />
                      <Bar dataKey="expected" fill="#9333ea" name="Expected Speed (MB/s)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300">
                    <strong className="text-white">Sequential Read:</strong> 7,510 MB/s ⭐ (+7%)
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">Sequential Write:</strong> 4,959 MB/s ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">Random Read IOPS:</strong> 750,000 IOPS ✓
                  </div>
                  <div className="text-purple-300">
                    <strong className="text-white">PCIe Link:</strong> Gen 4.0 x4 ✓
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="memory">
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">Memory Performance - Corsair 64GB DDR4-3200</h3>
                  <Badge className="bg-green-500/20 border border-green-500/50 text-green-300">
                    ⭐⭐⭐⭐⭐ PERFECT CONFIGURATION
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <div className="text-purple-300 mb-1">Total Capacity</div>
                      <div className="text-3xl text-white">64 GB</div>
                      <div className="text-sm text-purple-400 mt-1">2x32GB Dual-Channel ✓</div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <div className="text-purple-300 mb-1">Speed</div>
                      <div className="text-3xl text-white">3200 MT/s</div>
                      <div className="text-sm text-purple-400 mt-1">XMP/DOCP Enabled ✓</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <div className="text-purple-300 mb-1">Manufacturer</div>
                      <div className="text-3xl text-white">Corsair</div>
                      <div className="text-sm text-purple-400 mt-1">Vengeance LPX ✓</div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <div className="text-purple-300 mb-1">Configuration</div>
                      <div className="text-3xl text-white">Optimal</div>
                      <div className="text-sm text-purple-400 mt-1">Dual-rank for Ryzen ✓</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center text-sm text-purple-300">
                  <strong className="text-white">CAS Latency:</strong> CL16 | 
                  <strong className="text-white"> Part Number:</strong> CMK64GX4M2E3200C16 ✓
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function MonitorDot({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="19" cy="6" r="3"/>
      <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>
      <path d="M12 17v4"/>
      <path d="M8 21h8"/>
    </svg>
  );
}
