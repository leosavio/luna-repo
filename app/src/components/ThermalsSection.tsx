import { motion } from 'motion/react';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ThermometerSun, Zap } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export function ThermalsSection() {
  const { t } = useI18n();

  const thermalData = [
    { name: 'CPU', idle: 45, gaming: 70, stress: 80 },
    { name: 'GPU', idle: 35, gaming: 70, stress: 77 },
    { name: 'NVMe', idle: 40, gaming: 55, stress: 65 },
  ];

  const powerData = [
    { scenario: t.thermals.scenarios.idle, power: 75 },
    { scenario: t.thermals.scenarios.web, power: 115 },
    { scenario: t.thermals.scenarios.gaming, power: 350 },
    { scenario: t.thermals.scenarios.fullLoad, power: 500 },
    { scenario: t.thermals.scenarios.peak, power: 550 },
  ];

  const temperatureTimeline = [
    { time: '0m', cpu: 35, gpu: 30 },
    { time: '5m', cpu: 45, gpu: 40 },
    { time: '10m', cpu: 68, gpu: 65 },
    { time: '15m', cpu: 72, gpu: 70 },
    { time: '20m', cpu: 73, gpu: 72 },
    { time: '25m', cpu: 74, gpu: 73 },
    { time: '30m', cpu: 73, gpu: 72 },
  ];

  return (
    <section className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
            {t.thermals.title}
          </h2>
          <p className="text-purple-300">{t.thermals.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Thermal Performance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">{t.thermals.thermalPerformance}</h3>
                  <p className="text-sm text-purple-300">{t.thermals.celsius}</p>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={thermalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#7c3aed" opacity={0.3} />
                    <XAxis dataKey="name" tick={{ fill: '#c4b5fd' }} />
                    <YAxis tick={{ fill: '#c4b5fd' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                      labelStyle={{ color: '#c4b5fd' }}
                    />
                    <Legend wrapperStyle={{ color: '#c4b5fd' }} />
                    <Bar dataKey="idle" fill="#06b6d4" name={t.thermals.idle} />
                    <Bar dataKey="gaming" fill="#f59e0b" name={t.thermals.gaming} />
                    <Bar dataKey="stress" fill="#ef4444" name={t.thermals.stressTest} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-cyan-900/30 rounded-lg p-3">
                  <div className="text-cyan-400">{t.thermals.idle}</div>
                  <div className="text-white">30-45°C</div>
                </div>
                <div className="bg-amber-900/30 rounded-lg p-3">
                  <div className="text-amber-400">{t.thermals.gaming}</div>
                  <div className="text-white">65-75°C</div>
                </div>
                <div className="bg-red-900/30 rounded-lg p-3">
                  <div className="text-red-400">{t.thermals.stressTest}</div>
                  <div className="text-white">75-85°C</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Power Consumption */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">{t.thermals.powerConsumption}</h3>
                  <p className="text-sm text-purple-300">{t.thermals.watts}</p>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={powerData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#7c3aed" opacity={0.3} />
                    <XAxis dataKey="scenario" tick={{ fill: '#c4b5fd' }} />
                    <YAxis tick={{ fill: '#c4b5fd' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                      labelStyle={{ color: '#c4b5fd' }}
                    />
                    <Bar dataKey="power" fill="#eab308" name="Power (W)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-yellow-400 text-sm">{t.thermals.psuEfficiency}</div>
                    <div className="text-white">{t.thermals.goldRated}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 text-sm">{t.thermals.efficiency}</div>
                    <div className="text-white">~90%</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Temperature Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 p-8">
            <h3 className="text-2xl text-white mb-6">{t.thermals.temperatureDuringGaming}</h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#7c3aed" opacity={0.3} />
                  <XAxis dataKey="time" tick={{ fill: '#c4b5fd' }} />
                  <YAxis tick={{ fill: '#c4b5fd' }} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed', borderRadius: '8px' }}
                    labelStyle={{ color: '#c4b5fd' }}
                  />
                  <Legend wrapperStyle={{ color: '#c4b5fd' }} />
                  <Line type="monotone" dataKey="cpu" stroke="#f59e0b" strokeWidth={3} name={t.thermals.cpuTemp} dot={{ fill: '#f59e0b' }} />
                  <Line type="monotone" dataKey="gpu" stroke="#10b981" strokeWidth={3} name={t.thermals.gpuTemp} dot={{ fill: '#10b981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                <div className="text-purple-300 text-sm mb-1">{t.thermals.corsairH60}</div>
                <div className="text-white">{t.thermals.excellentCooling}</div>
                <div className="text-xs text-purple-400 mt-1">{t.thermals.waterCooler}</div>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                <div className="text-purple-300 text-sm mb-1">{t.thermals.caseAirflow}</div>
                <div className="text-white">{t.thermals.strategicFan}</div>
                <div className="text-xs text-purple-400 mt-1">{t.thermals.argbFans}</div>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                <div className="text-purple-300 text-sm mb-1">{t.thermals.operatingNoise}</div>
                <div className="text-white">{t.thermals.silentToModerate}</div>
                <div className="text-xs text-purple-400 mt-1">{t.thermals.whisperQuiet}</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
