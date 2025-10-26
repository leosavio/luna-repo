import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Gamepad2, Target, TrendingUp } from 'lucide-react';

const gamingPerformance = [
  { game: 'CS:GO', fps1080p: '350+', fps1440p: '300+', notes: 'Competitive ready', color: 'from-green-500 to-emerald-500' },
  { game: 'Valorant', fps1080p: '350+', fps1440p: '300+', notes: 'Competitive ready', color: 'from-green-500 to-emerald-500' },
  { game: 'Apex Legends', fps1080p: '200', fps1440p: '140', notes: 'Smooth gameplay', color: 'from-blue-500 to-cyan-500' },
  { game: 'Cyberpunk 2077', fps1080p: '70', fps1440p: '55', notes: 'RT + DLSS: 75 FPS', color: 'from-purple-500 to-violet-500' },
  { game: 'Red Dead Redemption 2', fps1080p: '85', fps1440p: '60', notes: 'Beautiful visuals', color: 'from-orange-500 to-amber-500' },
  { game: 'Control', fps1080p: '90', fps1440p: '65', notes: 'RT + DLSS supported', color: 'from-purple-500 to-pink-500' },
  { game: 'Shadow of Tomb Raider', fps1080p: '110', fps1440p: '80', notes: 'Excellent performance', color: 'from-teal-500 to-cyan-500' },
];

const useCases = [
  {
    title: 'Competitive Gaming',
    description: '300+ FPS in esports titles',
    icon: Target,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AAA Gaming',
    description: '100+ FPS at 1080p Ultra, 60-90 FPS at 1440p',
    icon: Gamepad2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Streaming',
    description: 'NVENC hardware encoding with minimal impact',
    icon: TrendingUp,
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Video Editing',
    description: '4K timeline scrubbing, fast exports',
    icon: Gamepad2,
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: '3D Rendering',
    description: 'Blender, Cinema 4D with GPU acceleration',
    icon: TrendingUp,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Machine Learning',
    description: 'CUDA/TensorFlow with 12GB VRAM',
    icon: Target,
    color: 'from-indigo-500 to-purple-500'
  },
];

export function GamingSection() {
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
            Gaming Performance
          </h2>
          <p className="text-purple-300">Real-world FPS in popular titles</p>
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
                    <TableHead className="text-purple-300">Game</TableHead>
                    <TableHead className="text-purple-300">1080p Ultra</TableHead>
                    <TableHead className="text-purple-300">1440p High</TableHead>
                    <TableHead className="text-purple-300">Notes</TableHead>
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
            Excellent For
          </h2>
          <p className="text-purple-300">Versatile performance for any workload</p>
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
            <h3 className="text-2xl text-white mb-6 text-center">Why Luna Super Machine?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <div className="text-white mb-1">Balanced Performance</div>
                <div className="text-sm text-purple-300">Perfect component harmony</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-white mb-1">Future-Proof</div>
                <div className="text-sm text-purple-300">12-core CPU & 12GB VRAM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💾</div>
                <div className="text-white mb-1">Massive RAM</div>
                <div className="text-sm text-purple-300">64GB handles everything</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-white mb-1">Blazing Storage</div>
                <div className="text-sm text-purple-300">7,510 MB/s verified! ⭐</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
