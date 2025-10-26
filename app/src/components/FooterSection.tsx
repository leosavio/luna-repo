import { motion } from 'motion/react';
import { Github, Heart, Cpu, Award } from 'lucide-react';
import { Badge } from './ui/badge';

export function FooterSection() {
  return (
    <footer className="py-20 px-4 border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main footer content */}
          <div className="mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Luna Super Machine
            </motion.h3>
            <p className="text-xl text-purple-300 mb-6">
              Built with passion. Benchmarked with precision. Ready for anything. 🚀
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="bg-orange-500/20 border border-orange-500/50 text-orange-300 px-4 py-2">
                <img src="https://cdn.simpleicons.org/ubuntu/E95420" alt="Ubuntu" className="w-4 h-4 mr-2" />
                Ubuntu 22.04.5 LTS
              </Badge>
              <Badge className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                Ryzen 9 5900X (12C/24T)
              </Badge>
              <Badge className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-2">
                <img src="https://cdn.simpleicons.org/nvidia/76B900" alt="NVIDIA" className="w-4 h-4 mr-2" />
                RTX 3060 12GB
              </Badge>
              <Badge className="bg-purple-500/20 border border-purple-500/50 text-purple-300 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                5.0/5.0 Perfect Score
              </Badge>
            </div>
          </div>

          {/* GitHub link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <a
              href="https://github.com/leosavio/luna-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>github.com/leosavio/luna-repo</span>
            </a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl text-white mb-1">12</div>
              <div className="text-sm text-purple-300">CPU Cores</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl text-white mb-1">64GB</div>
              <div className="text-sm text-purple-300">RAM</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl text-white mb-1">7,510</div>
              <div className="text-sm text-purple-300">MB/s Read ⭐</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl text-white mb-1">12GB</div>
              <div className="text-sm text-purple-300">VRAM</div>
            </div>
          </motion.div>

          {/* Copyright and license */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by the Luna Super Machine team</span>
            </div>
            
            <div className="text-sm text-purple-400">
              Benchmarked October 26, 2025 | All Results Verified ✓
            </div>
            
            <div className="text-sm text-purple-400">
              Licensed under MIT License
            </div>

            <div className="pt-4 text-xs text-purple-500">
              This page is optimized for Cloudflare Pages hosting
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 100%'
        }}
      />
    </footer>
  );
}
