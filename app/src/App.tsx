import { useEffect } from 'react';
import { I18nProvider } from './i18n/I18nProvider';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { HeroSection } from './components/HeroSection';
import { SpecsSection } from './components/SpecsSection';
import { PerformanceSection } from './components/PerformanceSection';
import { BenchmarksSection } from './components/BenchmarksSection';
import { GamingSection } from './components/GamingSection';
import { ThermalsSection } from './components/ThermalsSection';
import { VideosSection } from './components/VideosSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-MKM6J3DCSS';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MKM6J3DCSS');
    `;
    document.head.appendChild(script2);

    // Meta tags for SEO and social sharing
    const metaTags = [
      { property: 'og:title', content: 'Luna Super Machine 🚀 - High-Performance Gaming & Workstation' },
      { property: 'og:description', content: 'AMD Ryzen 9 5900X (12C/24T) | RTX 3060 12GB | 64GB RAM | 2TB NVMe PCIe 4.0 (7,510 MB/s!) | Ubuntu 22.04 LTS | Verified Performance ⭐⭐⭐⭐⭐' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&h=630&fit=crop' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Luna Super Machine 🚀 - High-Performance Gaming & Workstation' },
      { name: 'twitter:description', content: 'AMD Ryzen 9 5900X (12C/24T) | RTX 3060 12GB | 64GB RAM | 2TB NVMe PCIe 4.0 (7,510 MB/s!)' },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&h=630&fit=crop' },
      { name: 'description', content: 'Luna Super Machine - High-Performance Gaming & Workstation Computer. AMD Ryzen 9 5900X, RTX 3060 12GB, 64GB RAM, 2TB NVMe. Verified benchmarks with exceptional performance!' },
      { name: 'keywords', content: 'gaming pc, ryzen 9 5900x, rtx 3060, ubuntu, workstation, benchmarks, performance pc' },
      { name: 'author', content: 'Luna Super Machine' },
      { name: 'theme-color', content: '#7c3aed' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    ];

    metaTags.forEach(({ property, name, content }) => {
      const meta = document.createElement('meta');
      if (property) meta.setAttribute('property', property);
      if (name) meta.setAttribute('name', name);
      meta.content = content;
      document.head.appendChild(meta);
    });

    // Update title
    document.title = 'Luna Super Machine 🚀 - High-Performance Gaming & Workstation';
  }, []);

  return (
    <I18nProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3YzNhZWQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0wIDI0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0ek0xMiAxNmMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHptMCAyNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <LanguageSwitcher />
        
        <div className="relative z-10">
          <HeroSection />
          <SpecsSection />
          <PerformanceSection />
          <BenchmarksSection />
          <GamingSection />
          <ThermalsSection />
          <VideosSection />
          <FooterSection />
        </div>
      </div>
    </I18nProvider>
  );
}