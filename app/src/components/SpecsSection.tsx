import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Cpu, MonitorDot, MemoryStick, HardDrive, Layers, Fan, Zap, Box } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

const specsConfig = [
  {
    icon: Cpu,
    key: 'cpu' as const,
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: MonitorDot,
    key: 'gpu' as const,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MemoryStick,
    key: 'ram' as const,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HardDrive,
    key: 'storage' as const,
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Layers,
    key: 'motherboard' as const,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Fan,
    key: 'cooling' as const,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Zap,
    key: 'psu' as const,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Box,
    key: 'case' as const,
    color: 'from-pink-500 to-rose-500'
  }
];

export function SpecsSection() {
  const { t } = useI18n();

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
            {t.specs.title}
          </h2>
          <p className="text-purple-300">{t.specs.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specsConfig.map((spec, index) => (
            <motion.div
              key={spec.key}
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
                  
                  <div className="text-sm text-purple-400 mb-1">{t.specs[spec.key]}</div>
                  <div className="text-white mb-2">{t.specs[`${spec.key}Value` as keyof typeof t.specs]}</div>
                  <div className="text-sm text-purple-300/70">{t.specs[`${spec.key}Details` as keyof typeof t.specs]}</div>
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
                <div className="text-orange-300">{t.specs.os}</div>
                <div className="text-white">{t.specs.osValue}</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}