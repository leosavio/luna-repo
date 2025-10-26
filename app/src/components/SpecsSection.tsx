import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Cpu, MonitorDot, MemoryStick, HardDrive, Layers, Fan, Zap, Box } from 'lucide-react';

const specs = [
  {
    icon: Cpu,
    label: 'CPU',
    value: 'AMD Ryzen 9 5900X',
    details: '12C/24T, 3.7-4.8 GHz, 70MB Cache',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: MonitorDot,
    label: 'GPU',
    value: 'ASUS TUF Gaming RTX 3060',
    details: '12GB GDDR6',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MemoryStick,
    label: 'RAM',
    value: 'Corsair Vengeance LPX 64GB',
    details: '2x32GB DDR4-3200 CL16',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HardDrive,
    label: 'Storage',
    value: 'Kingston KC3000 2TB NVMe',
    details: 'PCIe 4.0 (7000 MB/s R/W)',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Layers,
    label: 'Motherboard',
    value: 'ASUS TUF Gaming B550-PLUS',
    details: 'WI-FI',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Fan,
    label: 'Cooling',
    value: 'Corsair H60 120mm AIO',
    details: 'Water Cooler (White LED)',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Zap,
    label: 'PSU',
    value: 'Corsair RM850x 850W',
    details: '80+ Gold Modular (White)',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Box,
    label: 'Case',
    value: 'XPG Starker Compact',
    details: 'Mid Tower (Tempered Glass, 2x ARGB)',
    color: 'from-pink-500 to-rose-500'
  }
];

export function SpecsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
            System Specifications
          </h2>
          <p className="text-purple-300">Premium components for maximum performance</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${spec.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-sm text-purple-400 mb-1">{spec.label}</div>
                  <div className="text-white mb-2">{spec.value}</div>
                  <div className="text-sm text-purple-300/70">{spec.details}</div>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${spec.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* OS Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-orange-900/30 to-orange-800/30 backdrop-blur-sm border border-orange-500/50 px-8 py-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.simpleicons.org/ubuntu/E95420" alt="Ubuntu" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-orange-300">Operating System</div>
                <div className="text-white">Ubuntu 22.04.5 LTS</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
