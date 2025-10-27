import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Gamepad2, Target, TrendingUp } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export function GamingSection() {
  const { t } = useI18n();

  const gamingPerformance = [
    { game: 'CS:GO', fps1080p: '350+', fps1440p: '300+', fps3440p: '200+', notes: t.gaming.competitiveReady, color: 'from-green-500 to-emerald-500' },
    { game: 'Valorant', fps1080p: '350+', fps1440p: '300+', fps3440p: '180+', notes: t.gaming.competitiveReady, color: 'from-green-500 to-emerald-500' },
    { game: 'Apex Legends', fps1080p: '200', fps1440p: '140', fps3440p: '85', notes: t.gaming.smoothGameplay, color: 'from-blue-500 to-cyan-500' },
    { game: 'The First Descendant', fps1080p: '90', fps1440p: '65', fps3440p: '47', notes: t.gaming.dlssBalanced, color: 'from-cyan-500 to-blue-500' },
    { game: 'Cyberpunk 2077', fps1080p: '70', fps1440p: '55', fps3440p: '38', notes: t.gaming.rtDlss, color: 'from-purple-500 to-violet-500' },
    { game: 'Red Dead Redemption 2', fps1080p: '85', fps1440p: '60', fps3440p: '40', notes: t.gaming.beautifulVisuals, color: 'from-orange-500 to-amber-500' },
    { game: 'Control', fps1080p: '90', fps1440p: '65', fps3440p: '45', notes: t.gaming.rtDlssSupported, color: 'from-purple-500 to-pink-500' },
    { game: 'Shadow of Tomb Raider', fps1080p: '110', fps1440p: '80', fps3440p: '55', notes: t.gaming.excellentPerformance, color: 'from-teal-500 to-cyan-500' },
  ];

  const useCases = [
    {
      title: t.gaming.competitiveGaming,
      description: t.gaming.competitiveGamingDesc,
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: t.gaming.aaaGaming,
      description: t.gaming.aaaGamingDesc,
      icon: Gamepad2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t.gaming.streaming,
      description: t.gaming.streamingDesc,
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: t.gaming.videoEditing,
      description: t.gaming.videoEditingDesc,
      icon: Gamepad2,
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: t.gaming.rendering3d,
      description: t.gaming.rendering3dDesc,
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: t.gaming.machineLearning,
      description: t.gaming.machineLearningDesc,
      icon: Target,
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Gaming Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
            {t.gaming.title}
          </h2>
          <p className="text-purple-300">{t.gaming.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-purple-500/30 hover:bg-purple-500/5">
                    <TableHead className="text-purple-300">{t.gaming.game}</TableHead>
                    <TableHead className="text-purple-300">{t.gaming.ultra1080p}</TableHead>
                    <TableHead className="text-purple-300">{t.gaming.high1440p}</TableHead>
                    <TableHead className="text-purple-300">{t.gaming.ultra3440p}</TableHead>
                    <TableHead className="text-purple-300">{t.gaming.notes}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gamingPerformance.map((game, index) => (
                    <motion.tr
                      key={game.game}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="border-purple-500/20 hover:bg-purple-500/5 transition-colors"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${game.color}`} />
                          <span className="text-white">{game.game}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-500/20 border-green-500/50 text-green-300">
                          {game.fps1080p} FPS
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500/20 border-blue-500/50 text-blue-300">
                          {game.fps1440p} FPS
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500/20 border-blue-500/50 text-blue-300">
                          {game.fps3440p} FPS
                        </Badge>
                      </TableCell>
                      <TableCell className="text-purple-300">{game.notes}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
            {t.gaming.excellentForTitle}
          </h2>
          <p className="text-purple-300">{t.gaming.excellentForSubtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group h-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl text-white mb-2">{useCase.title}</h3>
                  <p className="text-purple-300">{useCase.description}</p>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 backdrop-blur-sm border border-purple-500/50 p-8">
            <h3 className="text-2xl text-white mb-6 text-center">{t.gaming.whyLunaTitle}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <div className="text-white mb-1">{t.gaming.balancedPerformance}</div>
                <div className="text-sm text-purple-300">{t.gaming.balancedPerformanceDesc}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-white mb-1">{t.gaming.futureProof}</div>
                <div className="text-sm text-purple-300">{t.gaming.futureProofDesc}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💾</div>
                <div className="text-white mb-1">{t.gaming.massiveRam}</div>
                <div className="text-sm text-purple-300">{t.gaming.massiveRamDesc}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-white mb-1">{t.gaming.blazingStorage}</div>
                <div className="text-sm text-purple-300">{t.gaming.blazingStorageDesc}</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}