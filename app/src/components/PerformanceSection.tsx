import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Star, TrendingUp, Zap, ThermometerSun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';

export function PerformanceSection() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const performanceMetrics = [
    {
      category: t.performance.cpuPerformance,
      rating: 5,
      status: t.performance.cpuStatus,
      color: 'text-green-400',
      metrics: [
        { name: t.performance.sysbenchMultiCore, value: 63705, expected: 60000, unit: 'events/s' },
        { name: t.performance.sevenZipCompression, value: 87931, expected: 80000, unit: 'MIPS' },
        { name: t.performance.sevenZipDecompression, value: 96799, expected: 85000, unit: 'MIPS' },
      ]
    },
    {
      category: t.performance.gpuPerformance,
      rating: 5,
      status: t.performance.gpuStatus,
      color: 'text-green-400',
      metrics: [
        { name: t.performance.glmark2Score, value: 5163, expected: 5000, unit: '' },
        { name: t.performance.vram, value: 12288, expected: 12288, unit: 'MiB' },
        { name: t.performance.powerDraw, value: 170, expected: 170, unit: 'W' },
      ]
    },
    {
      category: t.performance.storagePerformance,
      rating: 5,
      status: t.performance.storageStatus,
      color: 'text-green-400',
      metrics: [
        { name: t.performance.sequentialRead, value: 7510, expected: 7000, unit: 'MB/s', highlight: true },
        { name: t.performance.sequentialWrite, value: 4959, expected: 5000, unit: 'MB/s' },
        { name: t.performance.randomReadIOPS, value: 750000, expected: 700000, unit: 'IOPS' },
      ]
    },
    {
      category: t.performance.memoryPerformance,
      rating: 5,
      status: t.performance.memoryStatus,
      color: 'text-green-400',
      metrics: [
        { name: t.performance.capacity, value: 64, expected: 64, unit: 'GB' },
        { name: t.performance.speed, value: 3200, expected: 3200, unit: 'MT/s' },
        { name: t.performance.configuration, value: 100, expected: 100, unit: '% Dual-Channel' },
      ]
    }
  ];

  return (
    <section id="performance" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
            {t.performance.title}
          </h2>
          <p className="text-purple-300">{t.performance.subtitle}</p>
          <div className="mt-4">
            <Badge className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-2">
              {t.performance.overallRating}
            </Badge>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {performanceMetrics.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl text-white mb-2">{section.category}</h3>
                    <Badge className={`${section.color} bg-green-500/10 border-green-500/50`}>
                      {section.status}
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(section.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {section.metrics.map((metric, metricIndex) => {
                    const percentage = (metric.value / metric.expected) * 100;
                    const exceeds = percentage > 100;

                    return (
                      <div key={metric.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-purple-300">{metric.name}</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${exceeds ? 'text-green-400' : 'text-purple-200'}`}>
                              {metric.value.toLocaleString()} {metric.unit}
                            </span>
                            {exceeds && (
                              <TrendingUp className="w-4 h-4 text-green-400" />
                            )}
                            {metric.highlight && (
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            )}
                          </div>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={isVisible ? Math.min(percentage, 100) : 0}
                            className="h-2 bg-slate-800"
                          />
                          {exceeds && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: sectionIndex * 0.1 + metricIndex * 0.1, duration: 0.8 }}
                              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                              style={{ width: `${Math.min(percentage, 100)}%` }}
                            />
                          )}
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-purple-400">
                            {t.performance.expected}: {metric.expected.toLocaleString()} {metric.unit}
                          </span>
                          {exceeds && (
                            <span className="text-xs text-green-400">
                              +{(percentage - 100).toFixed(1)}% {t.performance.aboveTarget}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-4 mt-12"
        >
          <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/50 p-6 text-center">
            <Zap className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl text-white mb-1">92,365</div>
            <div className="text-sm text-red-300">{t.performance.sevenZipOverall}</div>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 p-6 text-center">
            <MonitorDot className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl text-white mb-1">5,163</div>
            <div className="text-sm text-green-300">{t.performance.glmark2Score}</div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 border border-purple-500/50 p-6 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl text-white mb-1">7,510</div>
            <div className="text-sm text-purple-300">{t.performance.readSpeed}</div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/50 p-6 text-center">
            <ThermometerSun className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl text-white mb-1">Excellent</div>
            <div className="text-sm text-cyan-300">{t.performance.thermalPerformance}</div>
          </Card>
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
