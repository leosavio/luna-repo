import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, Star, Zap, Award } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export function HeroSection() {
  const { t } = useI18n();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center gap-2 flex-wrap"
          >
            <Badge variant="outline" className="bg-purple-500/10 border-purple-500/50 text-purple-300 px-4 py-1">
              <Star className="w-4 h-4 mr-1" />
              {t.hero.verifiedPerformance}
            </Badge>
            <Badge variant="outline" className="bg-green-500/10 border-green-500/50 text-green-300 px-4 py-1">
              <Award className="w-4 h-4 mr-1" />
              {t.hero.perfectScore}
            </Badge>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-purple-200"
          >
            <p>{t.hero.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            <Badge className="bg-orange-500/20 border border-orange-500/50 text-orange-300 px-4 py-2 hover:bg-orange-500/30 transition-colors">
              <img src="https://cdn.simpleicons.org/ubuntu/E95420" alt="Ubuntu" className="w-4 h-4 mr-2" />
              Ubuntu 22.04.5 LTS
            </Badge>
            <Badge className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-2 hover:bg-red-500/30 transition-colors">
              <img src="https://cdn.simpleicons.org/amd/ED1C24" alt="AMD" className="w-4 h-4 mr-2" />
              Ryzen 9 5900X
            </Badge>
            <Badge className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-2 hover:bg-green-500/30 transition-colors">
              <img src="https://cdn.simpleicons.org/nvidia/76B900" alt="NVIDIA" className="w-4 h-4 mr-2" />
              RTX 3060 12GB
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-green-400">{t.hero.verifiedDate}</span>
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-purple-300">{t.hero.cpu}</div>
                <div className="text-white">+13% Exceeds</div>
              </div>
              <div>
                <div className="text-purple-300">{t.hero.gpu}</div>
                <div className="text-white">5,163</div>
              </div>
              <div>
                <div className="text-purple-300">{t.hero.storage}</div>
                <div className="text-white">7,510 MB/s ⭐</div>
              </div>
              <div>
                <div className="text-purple-300">{t.hero.thermal}</div>
                <div className="text-white">Excellent</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6"
            >
              <a href="https://github.com/leosavio/luna-repo" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                {t.hero.viewOnGitHub}
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6"
              onClick={() => document.getElementById('benchmarks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Award className="w-5 h-5 mr-2" />
              {t.hero.viewBenchmarks}
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}