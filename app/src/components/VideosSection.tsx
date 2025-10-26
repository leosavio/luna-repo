import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Video, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const videos = [
  {
    title: 'Motherboard',
    url: 'https://youtu.be/T5hraZKx8gY',
    thumbnail: 'https://img.youtube.com/vi/T5hraZKx8gY/maxresdefault.jpg'
  },
  {
    title: 'Motherboard on Case',
    url: 'https://youtu.be/rgjwlXlZPcU',
    thumbnail: 'https://img.youtube.com/vi/rgjwlXlZPcU/maxresdefault.jpg'
  },
  {
    title: 'Motherboard Fixing on Case',
    url: 'https://youtu.be/_rAUn3Zc7eo',
    thumbnail: 'https://img.youtube.com/vi/_rAUn3Zc7eo/maxresdefault.jpg'
  },
  {
    title: 'WaterCooler Part 1',
    url: 'https://youtu.be/UBpIvL8APe4',
    thumbnail: 'https://img.youtube.com/vi/UBpIvL8APe4/maxresdefault.jpg'
  },
  {
    title: 'WaterCooler Part 2',
    url: 'https://youtu.be/JWQUUx0IBlw',
    thumbnail: 'https://img.youtube.com/vi/JWQUUx0IBlw/maxresdefault.jpg'
  },
  {
    title: 'Case',
    url: 'https://youtube.com/shorts/nQewL7FmGMw',
    thumbnail: 'https://img.youtube.com/vi/nQewL7FmGMw/maxresdefault.jpg'
  },
  {
    title: 'GPU Installation',
    url: 'https://youtu.be/ZXM7xkRR7J0',
    thumbnail: 'https://img.youtube.com/vi/ZXM7xkRR7J0/maxresdefault.jpg'
  },
  {
    title: 'Front Panel',
    url: 'https://youtu.be/C4o4SE9Y79I',
    thumbnail: 'https://img.youtube.com/vi/C4o4SE9Y79I/maxresdefault.jpg'
  },
  {
    title: 'Support Installation',
    url: 'https://youtu.be/KwdanlJgcWE',
    thumbnail: 'https://img.youtube.com/vi/KwdanlJgcWE/maxresdefault.jpg'
  },
  {
    title: 'BIOS Setup',
    url: 'https://youtu.be/LatsR-tt_z0',
    thumbnail: 'https://img.youtube.com/vi/LatsR-tt_z0/maxresdefault.jpg'
  },
  {
    title: 'First Boot',
    url: 'https://youtu.be/n48Gs9FtPHY',
    thumbnail: 'https://img.youtube.com/vi/n48Gs9FtPHY/maxresdefault.jpg'
  },
];

export function VideosSection() {
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
            Build Videos
          </h2>
          <p className="text-purple-300">Watch the Luna Super Machine come to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group overflow-hidden h-full">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-video bg-slate-800 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=225&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-white group-hover:text-purple-400 transition-colors">{video.title}</h3>
                      <ExternalLink className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-purple-300 mb-4">Want to see more?</p>
          <Button 
            asChild
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8"
          >
            <a href="https://github.com/leosavio/luna-repo" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit GitHub Repository
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
