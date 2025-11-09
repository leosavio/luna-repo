export type Language = 'en' | 'pt-BR';

export interface Translations {
  // Language Switcher
  languageName: string;
  
  // Hero Section
  hero: {
    verifiedPerformance: string;
    perfectScore: string;
    title: string;
    subtitle: string;
    verifiedDate: string;
    cpu: string;
    gpu: string;
    storage: string;
    thermal: string;
    viewOnGitHub: string;
    viewBenchmarks: string;
  };
  
  // Specs Section
  specs: {
    title: string;
    subtitle: string;
    cpu: string;
    cpuValue: string;
    cpuDetails: string;
    gpu: string;
    gpuValue: string;
    gpuDetails: string;
    ram: string;
    ramValue: string;
    ramDetails: string;
    storage: string;
    storageValue: string;
    storageDetails: string;
    motherboard: string;
    motherboardValue: string;
    motherboardDetails: string;
    cooling: string;
    coolingValue: string;
    coolingDetails: string;
    psu: string;
    psuValue: string;
    psuDetails: string;
    case: string;
    caseValue: string;
    caseDetails: string;
    os: string;
    osValue: string;
  };
  
  // Performance Section
  performance: {
    title: string;
    subtitle: string;
    overallRating: string;
    cpuPerformance: string;
    cpuStatus: string;
    gpuPerformance: string;
    gpuStatus: string;
    storagePerformance: string;
    storageStatus: string;
    memoryPerformance: string;
    memoryStatus: string;
    sysbenchMultiCore: string;
    sevenZipCompression: string;
    sevenZipDecompression: string;
    glmark2Score: string;
    vram: string;
    powerDraw: string;
    sequentialRead: string;
    sequentialWrite: string;
    randomReadIOPS: string;
    capacity: string;
    speed: string;
    configuration: string;
    expected: string;
    aboveTarget: string;
    sevenZipOverall: string;
    readSpeed: string;
    thermalPerformance: string;
  };
  
  // Benchmarks Section
  benchmarks: {
    title: string;
    subtitle: string;
    allVerified: string;
    overallSystem: string;
    performancePercent: string;
    cpu: string;
    cpuTitle: string;
    cpuRating: string;
    gpu: string;
    gpuTitle: string;
    gpuRating: string;
    storage: string;
    storageTitle: string;
    storageRating: string;
    memory: string;
    memoryTitle: string;
    memoryRating: string;
    actualScore: string;
    expectedScore: string;
    actualPerformance: string;
    expectedPerformance: string;
    actualSpeed: string;
    expectedSpeed: string;
    workingPerfectly: string;
    performance: string;
    latestDriver: string;
    cuda: string;
    rayTracing: string;
    pcieLink: string;
    totalCapacity: string;
    dualChannel: string;
    xmpEnabled: string;
    manufacturer: string;
    vengeance: string;
    optimal: string;
    dualRank: string;
    casLatency: string;
    partNumber: string;
    category: {
      cpu: string;
      gpu: string;
      storage: string;
      memory: string;
      thermal: string;
    };
  };
  
  // Gaming Section
  gaming: {
    title: string;
    subtitle: string;
    game: string;
    ultra1080p: string;
    high1440p: string;
    ultra3440p: string;
    notes: string;
    competitiveReady: string;
    smoothGameplay: string;
    rtDlss: string;
    beautifulVisuals: string;
    rtDlssSupported: string;
    excellentPerformance: string;
    dlssBalanced: string;
    highSettings: string;
    maxSettings: string;
    excellentForTitle: string;
    excellentForSubtitle: string;
    competitiveGaming: string;
    competitiveGamingDesc: string;
    aaaGaming: string;
    aaaGamingDesc: string;
    streaming: string;
    streamingDesc: string;
    videoEditing: string;
    videoEditingDesc: string;
    rendering3d: string;
    rendering3dDesc: string;
    machineLearning: string;
    machineLearningDesc: string;
    whyLunaTitle: string;
    balancedPerformance: string;
    balancedPerformanceDesc: string;
    futureProof: string;
    futureProofDesc: string;
    massiveRam: string;
    massiveRamDesc: string;
    blazingStorage: string;
    blazingStorageDesc: string;
  };
  
  // Thermals Section
  thermals: {
    title: string;
    subtitle: string;
    thermalPerformance: string;
    celsius: string;
    idle: string;
    gaming: string;
    stressTest: string;
    powerConsumption: string;
    watts: string;
    psuEfficiency: string;
    goldRated: string;
    efficiency: string;
    temperatureDuringGaming: string;
    cpuTemp: string;
    gpuTemp: string;
    corsairH60: string;
    excellentCooling: string;
    waterCooler: string;
    caseAirflow: string;
    strategicFan: string;
    argbFans: string;
    operatingNoise: string;
    silentToModerate: string;
    whisperQuiet: string;
    scenarios: {
      idle: string;
      web: string;
      gaming: string;
      fullLoad: string;
      peak: string;
    };
  };
  
  // Videos Section
  videos: {
    title: string;
    subtitle: string;
    motherboard: string;
    motherboardOnCase: string;
    motherboardFixing: string;
    waterCoolerPart1: string;
    waterCoolerPart2: string;
    upgradeWatercooler: string;
    case: string;
    gpuInstallation: string;
    frontPanel: string;
    supportInstallation: string;
    biosSetup: string;
    firstBoot: string;
    seeMore: string;
    visitRepo: string;
  };
  
  // Footer
  footer: {
    tagline: string;
    perfectScore: string;
    cpuCores: string;
    ram: string;
    readSpeed: string;
    vram: string;
    madeWith: string;
    by: string;
    benchmarked: string;
    allVerified: string;
    license: string;
    optimizedFor: string;
  };
}

export const translations: Record<Language, Translations> = {
  'en': {
    languageName: 'English',
    
    hero: {
      verifiedPerformance: 'Verified Performance ⭐⭐⭐⭐⭐',
      perfectScore: 'Score: 5.0/5.0',
      title: 'Luna Super Machine',
      subtitle: 'High-Performance Gaming & Workstation Computer',
      verifiedDate: 'VERIFIED PERFORMANCE - October 26, 2025',
      cpu: 'CPU',
      gpu: 'GPU GLMark2',
      storage: 'Storage',
      thermal: 'Thermal',
      viewOnGitHub: 'View on GitHub',
      viewBenchmarks: 'View Benchmarks',
    },
    
    specs: {
      title: 'System Specifications',
      subtitle: 'Premium components for maximum performance',
      cpu: 'CPU',
      cpuValue: 'AMD Ryzen 9 5900X',
      cpuDetails: '12C/24T, 3.7-4.8 GHz, 70MB Cache',
      gpu: 'GPU',
      gpuValue: 'ASUS TUF Gaming RTX 3060',
      gpuDetails: '12GB GDDR6',
      ram: 'RAM',
      ramValue: 'Corsair Vengeance LPX 64GB',
      ramDetails: '2x32GB DDR4-3200 CL16',
      storage: 'Storage',
      storageValue: 'Kingston KC3000 2TB NVMe',
      storageDetails: 'PCIe 4.0 (7000 MB/s R/W)',
      motherboard: 'Motherboard',
      motherboardValue: 'ASUS TUF Gaming B550-PLUS',
      motherboardDetails: 'WI-FI',
      cooling: 'Cooling',
      coolingValue: 'Husky Icy Comet WT650',
      coolingDetails: 'ARGB Water Cooler',
      psu: 'PSU',
      psuValue: 'Corsair RM850x 850W',
      psuDetails: '80+ Gold Modular (White)',
      case: 'Case',
      caseValue: 'XPG Starker Compact',
      caseDetails: 'Mid Tower (Tempered Glass, 2x ARGB)',
      os: 'Operating System',
      osValue: 'Ubuntu 22.04.5 LTS',
    },
    
    performance: {
      title: 'Performance Highlights',
      subtitle: 'Benchmarked October 26, 2025 - All Tests Verified ✓',
      overallRating: 'OVERALL RATING: 5.0/5.0 - PERFECT',
      cpuPerformance: 'CPU Performance',
      cpuStatus: 'EXCEEDS EXPECTATIONS',
      gpuPerformance: 'GPU Performance',
      gpuStatus: 'PERFECT CONFIGURATION',
      storagePerformance: 'Storage Performance',
      storageStatus: 'EXCEEDS SPECIFICATION!',
      memoryPerformance: 'Memory Performance',
      memoryStatus: 'PERFECT CONFIGURATION',
      sysbenchMultiCore: 'Sysbench Multi-Core (24T)',
      sevenZipCompression: '7-Zip Compression',
      sevenZipDecompression: '7-Zip Decompression',
      glmark2Score: 'GLMark2 Score',
      vram: 'VRAM',
      powerDraw: 'Power Draw',
      sequentialRead: 'Sequential Read',
      sequentialWrite: 'Sequential Write',
      randomReadIOPS: 'Random Read IOPS (4K)',
      capacity: 'Capacity',
      speed: 'Speed',
      configuration: 'Configuration',
      expected: 'Expected',
      aboveTarget: 'above target',
      sevenZipOverall: '7-Zip Overall MIPS',
      readSpeed: 'MB/s Read Speed ⭐',
      thermalPerformance: 'Thermal Performance',
    },
    
    benchmarks: {
      title: 'Comprehensive Benchmarks',
      subtitle: 'Detailed performance analysis across all components',
      allVerified: 'All Results Verified - October 26, 2025',
      overallSystem: 'Overall System Performance',
      performancePercent: 'Performance %',
      cpu: 'CPU',
      cpuTitle: 'CPU Performance - AMD Ryzen 9 5900X',
      cpuRating: '⭐⭐⭐⭐⭐ EXCEEDS EXPECTATIONS',
      gpu: 'GPU',
      gpuTitle: 'GPU Performance - RTX 3060 12GB',
      gpuRating: '⭐⭐⭐⭐⭐ PERFECT CONFIGURATION',
      storage: 'Storage',
      storageTitle: 'Storage Performance - Kingston KC3000 2TB',
      storageRating: '⭐⭐⭐⭐⭐ EXCEEDS SPECIFICATION!',
      memory: 'Memory',
      memoryTitle: 'Memory Performance - Corsair 64GB DDR4-3200',
      memoryRating: '⭐⭐⭐⭐⭐ PERFECT CONFIGURATION',
      actualScore: 'Actual Score',
      expectedScore: 'Expected Score',
      actualPerformance: 'Actual Performance',
      expectedPerformance: 'Expected Performance',
      actualSpeed: 'Actual Speed (MB/s)',
      expectedSpeed: 'Expected Speed (MB/s)',
      workingPerfectly: 'Working perfectly ✓',
      performance: 'Performance',
      latestDriver: 'Latest',
      cuda: 'CUDA',
      rayTracing: 'Ray Tracing',
      pcieLink: 'PCIe Link',
      totalCapacity: 'Total Capacity',
      dualChannel: 'Dual-Channel ✓',
      xmpEnabled: 'XMP/DOCP Enabled ✓',
      manufacturer: 'Manufacturer',
      vengeance: 'Vengeance LPX ✓',
      optimal: 'Optimal',
      dualRank: 'Dual-rank for Ryzen ✓',
      casLatency: 'CAS Latency',
      partNumber: 'Part Number',
      category: {
        cpu: 'CPU',
        gpu: 'GPU',
        storage: 'Storage',
        memory: 'Memory',
        thermal: 'Thermal',
      },
    },
    
    gaming: {
      title: 'Gaming Performance',
      subtitle: 'Real-world FPS in popular titles',
      game: 'Game',
      ultra1080p: '1080p Ultra',
      high1440p: '1440p High',
      ultra3440p: '3440p High',
      notes: 'Notes',
      competitiveReady: 'Competitive ready',
      smoothGameplay: 'Smooth gameplay',
      rtDlss: 'RT + DLSS: 75 FPS',
      beautifulVisuals: 'Beautiful visuals',
      rtDlssSupported: 'RT + DLSS supported',
      excellentPerformance: 'Excellent performance',
      dlssBalanced: 'DLSS Balanced',
      highSettings: 'High settings',
      maxSettings: 'Max settings, 60 FPS cap',
      excellentForTitle: 'Excellent For',
      excellentForSubtitle: 'Versatile performance for any workload',
      competitiveGaming: 'Competitive Gaming',
      competitiveGamingDesc: '300+ FPS in esports titles',
      aaaGaming: 'AAA Gaming',
      aaaGamingDesc: '100+ FPS at 1080p Ultra, 60-90 FPS at 1440p',
      streaming: 'Streaming',
      streamingDesc: 'NVENC hardware encoding with minimal impact',
      videoEditing: 'Video Editing',
      videoEditingDesc: '4K timeline scrubbing, fast exports',
      rendering3d: '3D Rendering',
      rendering3dDesc: 'Blender, Cinema 4D with GPU acceleration',
      machineLearning: 'Machine Learning',
      machineLearningDesc: 'CUDA/TensorFlow with 12GB VRAM',
      whyLunaTitle: 'Why Luna Super Machine?',
      balancedPerformance: 'Balanced Performance',
      balancedPerformanceDesc: 'Perfect component harmony',
      futureProof: 'Future-Proof',
      futureProofDesc: '12-core CPU & 12GB VRAM',
      massiveRam: 'Massive RAM',
      massiveRamDesc: '64GB handles everything',
      blazingStorage: 'Blazing Storage',
      blazingStorageDesc: '7,510 MB/s verified! ⭐',
    },
    
    thermals: {
      title: 'Thermal & Power',
      subtitle: 'Excellent cooling and efficient power consumption',
      thermalPerformance: 'Thermal Performance',
      celsius: 'Celsius (°C)',
      idle: 'Idle',
      gaming: 'Gaming',
      stressTest: 'Stress Test',
      powerConsumption: 'Power Consumption',
      watts: 'Watts (W)',
      psuEfficiency: 'PSU Efficiency',
      goldRated: '80+ Gold Rated',
      efficiency: 'Efficiency',
      temperatureDuringGaming: 'Temperature During Gaming Session',
      cpuTemp: 'CPU Temp (°C)',
      gpuTemp: 'GPU Temp (°C)',
      corsairH60: 'Husky Icy Comet WT650',
      excellentCooling: 'Excellent CPU Cooling',
      waterCooler: 'ARGB Water Cooler',
      caseAirflow: 'Case Airflow',
      strategicFan: 'Strategic Fan Setup',
      argbFans: '2x ARGB Fans',
      operatingNoise: 'Operating Noise',
      silentToModerate: 'Silent to Moderate',
      whisperQuiet: 'Whisper quiet at idle',
      scenarios: {
        idle: 'Idle',
        web: 'Web Browsing',
        gaming: 'Gaming',
        fullLoad: 'Full Load',
        peak: 'Peak',
      },
    },
    
    videos: {
      title: 'Build Videos',
      subtitle: 'Watch the Luna Super Machine come to life',
      motherboard: 'Motherboard',
      motherboardOnCase: 'Motherboard on Case',
      motherboardFixing: 'Motherboard Fixing on Case',
      waterCoolerPart1: 'WaterCooler Part 1',
      waterCoolerPart2: 'WaterCooler Part 2',
      upgradeWatercooler: 'Upgrade Watercooler - Husky WT650',
      case: 'Case',
      gpuInstallation: 'GPU Installation',
      frontPanel: 'Front Panel',
      supportInstallation: 'Support Installation',
      biosSetup: 'BIOS Setup',
      firstBoot: 'First Boot',
      seeMore: 'Want to see more?',
      visitRepo: 'Visit GitHub Repository',
    },
    
    footer: {
      tagline: 'Built with passion. Benchmarked with precision. Ready for anything. 🚀',
      perfectScore: '5.0/5.0 Perfect Score',
      cpuCores: 'CPU Cores',
      ram: 'RAM',
      readSpeed: 'MB/s Read ⭐',
      vram: 'VRAM',
      madeWith: 'Made with',
      by: 'by the Luna Super Machine team',
      benchmarked: 'Benchmarked October 26, 2025',
      allVerified: 'All Results Verified ✓',
      license: 'Licensed under MIT License',
      optimizedFor: 'This page is optimized for Cloudflare Pages hosting',
    },
  },
  
  'pt-BR': {
    languageName: 'Português',
    
    hero: {
      verifiedPerformance: 'Performance Verificado ⭐⭐⭐⭐⭐',
      perfectScore: 'Pontuação: 5.0/5.0',
      title: 'Luna Super Machine',
      subtitle: 'Computador de Alto Desempenho para Jogos e Trabalho',
      verifiedDate: 'DESEMPENHO VERIFICADO - 26 de Outubro de 2025',
      cpu: 'CPU',
      gpu: 'GPU GLMark2',
      storage: 'Armazenamento',
      thermal: 'Térmico',
      viewOnGitHub: 'Ver no GitHub',
      viewBenchmarks: 'Ver Benchmarks',
    },
    
    specs: {
      title: 'Especificações do Sistema',
      subtitle: 'Componentes premium para máximo desempenho',
      cpu: 'CPU',
      cpuValue: 'AMD Ryzen 9 5900X',
      cpuDetails: '12C/24T, 3.7-4.8 GHz, 70MB Cache',
      gpu: 'GPU',
      gpuValue: 'ASUS TUF Gaming RTX 3060',
      gpuDetails: '12GB GDDR6',
      ram: 'RAM',
      ramValue: 'Corsair Vengeance LPX 64GB',
      ramDetails: '2x32GB DDR4-3200 CL16',
      storage: 'Armazenamento',
      storageValue: 'Kingston KC3000 2TB NVMe',
      storageDetails: 'PCIe 4.0 (7000 MB/s L/E)',
      motherboard: 'Placa-Mãe',
      motherboardValue: 'ASUS TUF Gaming B550-PLUS',
      motherboardDetails: 'WI-FI',
      cooling: 'Resfriamento',
      coolingValue: 'Husky Icy Comet WT650',
      coolingDetails: 'Water Cooler ARGB',
      psu: 'Fonte',
      psuValue: 'Corsair RM850x 850W',
      psuDetails: '80+ Gold Modular (Branca)',
      case: 'Gabinete',
      caseValue: 'XPG Starker Compact',
      caseDetails: 'Mid Tower (Vidro Temperado, 2x ARGB)',
      os: 'Sistema Operacional',
      osValue: 'Ubuntu 22.04.5 LTS',
    },
    
    performance: {
      title: 'Destaques de Desempenho',
      subtitle: 'Benchmarks realizados em 26 de Outubro de 2025 - Todos os Testes Verificados ✓',
      overallRating: 'AVALIAÇÃO GERAL: 5.0/5.0 - PERFEITO',
      cpuPerformance: 'Desempenho da CPU',
      cpuStatus: 'SUPERA AS EXPECTATIVAS',
      gpuPerformance: 'Desempenho da GPU',
      gpuStatus: 'CONFIGURAÇÃO PERFEITA',
      storagePerformance: 'Desempenho de Armazenamento',
      storageStatus: 'SUPERA A ESPECIFICAÇÃO!',
      memoryPerformance: 'Desempenho da Memória',
      memoryStatus: 'CONFIGURAÇÃO PERFEITA',
      sysbenchMultiCore: 'Sysbench Multi-Core (24T)',
      sevenZipCompression: 'Compressão 7-Zip',
      sevenZipDecompression: 'Descompressão 7-Zip',
      glmark2Score: 'Pontuação GLMark2',
      vram: 'VRAM',
      powerDraw: 'Consumo de Energia',
      sequentialRead: 'Leitura Sequencial',
      sequentialWrite: 'Escrita Sequencial',
      randomReadIOPS: 'IOPS de Leitura Aleatória (4K)',
      capacity: 'Capacidade',
      speed: 'Velocidade',
      configuration: 'Configuração',
      expected: 'Esperado',
      aboveTarget: 'acima do esperado',
      sevenZipOverall: 'MIPS Geral 7-Zip',
      readSpeed: 'MB/s Leitura ⭐',
      thermalPerformance: 'Desempenho Térmico',
    },
    
    benchmarks: {
      title: 'Benchmarks Abrangentes',
      subtitle: 'Análise detalhada de desempenho de todos os componentes',
      allVerified: 'Todos os Resultados Verificados - 26 de Outubro de 2025',
      overallSystem: 'Desempenho Geral do Sistema',
      performancePercent: 'Desempenho %',
      cpu: 'CPU',
      cpuTitle: 'Desempenho da CPU - AMD Ryzen 9 5900X',
      cpuRating: '⭐⭐⭐⭐⭐ SUPERA AS EXPECTATIVAS',
      gpu: 'GPU',
      gpuTitle: 'Desempenho da GPU - RTX 3060 12GB',
      gpuRating: '⭐⭐⭐⭐⭐ CONFIGURAÇÃO PERFEITA',
      storage: 'Armazenamento',
      storageTitle: 'Desempenho de Armazenamento - Kingston KC3000 2TB',
      storageRating: '⭐⭐⭐⭐⭐ SUPERA A ESPECIFICAÇÃO!',
      memory: 'Memória',
      memoryTitle: 'Desempenho da Memória - Corsair 64GB DDR4-3200',
      memoryRating: '⭐⭐⭐⭐⭐ CONFIGURAÇÃO PERFEITA',
      actualScore: 'Pontuação Real',
      expectedScore: 'Pontuação Esperada',
      actualPerformance: 'Desempenho Real',
      expectedPerformance: 'Desempenho Esperado',
      actualSpeed: 'Velocidade Real (MB/s)',
      expectedSpeed: 'Velocidade Esperada (MB/s)',
      workingPerfectly: 'Funcionando perfeitamente ✓',
      performance: 'Desempenho',
      latestDriver: 'Mais recente',
      cuda: 'CUDA',
      rayTracing: 'Ray Tracing',
      pcieLink: 'Link PCIe',
      totalCapacity: 'Capacidade Total',
      dualChannel: 'Dual-Channel ✓',
      xmpEnabled: 'XMP/DOCP Ativado ✓',
      manufacturer: 'Fabricante',
      vengeance: 'Vengeance LPX ✓',
      optimal: 'Ótimo',
      dualRank: 'Dual-rank para Ryzen ✓',
      casLatency: 'Latência CAS',
      partNumber: 'Número de Peça',
      category: {
        cpu: 'CPU',
        gpu: 'GPU',
        storage: 'Armazenamento',
        memory: 'Memória',
        thermal: 'Térmico',
      },
    },
    
    gaming: {
      title: 'Desempenho em Jogos',
      subtitle: 'FPS real em títulos populares',
      game: 'Jogo',
      ultra1080p: '1080p Ultra',
      high1440p: '1440p Alto',
      ultra3440p: '3440p Alto',
      notes: 'Observações',
      competitiveReady: 'Pronto para competitivo',
      smoothGameplay: 'Gameplay suave',
      rtDlss: 'RT + DLSS: 75 FPS',
      beautifulVisuals: 'Visuais lindos',
      rtDlssSupported: 'RT + DLSS suportado',
      excellentPerformance: 'Excelente desempenho',
      dlssBalanced: 'DLSS Balanceado',
      highSettings: 'Configurações altas',
      maxSettings: 'Configurações máximas, 60 FPS cap',
      excellentForTitle: 'Excelente Para',
      excellentForSubtitle: 'Desempenho versátil para qualquer carga de trabalho',
      competitiveGaming: 'Jogos Competitivos',
      competitiveGamingDesc: '300+ FPS em títulos de esports',
      aaaGaming: 'Jogos AAA',
      aaaGamingDesc: '100+ FPS em 1080p Ultra, 60-90 FPS em 1440p',
      streaming: 'Streaming',
      streamingDesc: 'Codificação de hardware NVENC com impacto mínimo',
      videoEditing: 'Edição de Vídeo',
      videoEditingDesc: 'Timeline 4K fluida, exportação rápida',
      rendering3d: 'Renderização 3D',
      rendering3dDesc: 'Blender, Cinema 4D com aceleração GPU',
      machineLearning: 'Aprendizado de Máquina',
      machineLearningDesc: 'CUDA/TensorFlow com 12GB VRAM',
      whyLunaTitle: 'Por Que Luna Super Machine?',
      balancedPerformance: 'Desempenho Equilibrado',
      balancedPerformanceDesc: 'Harmonia perfeita de componentes',
      futureProof: 'À Prova de Futuro',
      futureProofDesc: 'CPU 12-core & 12GB VRAM',
      massiveRam: 'RAM Massiva',
      massiveRamDesc: '64GB aguenta tudo',
      blazingStorage: 'Armazenamento Veloz',
      blazingStorageDesc: '7.510 MB/s verificado! ⭐',
    },
    
    thermals: {
      title: 'Térmico & Energia',
      subtitle: 'Excelente resfriamento e consumo de energia eficiente',
      thermalPerformance: 'Desempenho Térmico',
      celsius: 'Celsius (°C)',
      idle: 'Ocioso',
      gaming: 'Jogando',
      stressTest: 'Teste de Estresse',
      powerConsumption: 'Consumo de Energia',
      watts: 'Watts (W)',
      psuEfficiency: 'Eficiência da Fonte',
      goldRated: '80+ Gold Certificado',
      efficiency: 'Eficiência',
      temperatureDuringGaming: 'Temperatura Durante Sessão de Jogo',
      cpuTemp: 'Temp. CPU (°C)',
      gpuTemp: 'Temp. GPU (°C)',
      corsairH60: 'Husky Icy Comet WT650',
      excellentCooling: 'Excelente Resfriamento da CPU',
      waterCooler: 'Water Cooler ARGB',
      caseAirflow: 'Fluxo de Ar do Gabinete',
      strategicFan: 'Configuração Estratégica de Ventoinhas',
      argbFans: '2x Ventoinhas ARGB',
      operatingNoise: 'Ruído Operacional',
      silentToModerate: 'Silencioso a Moderado',
      whisperQuiet: 'Sussurro silencioso em ocioso',
      scenarios: {
        idle: 'Ocioso',
        web: 'Navegação Web',
        gaming: 'Jogando',
        fullLoad: 'Carga Total',
        peak: 'Pico',
      },
    },
    
    videos: {
      title: 'Vídeos da Montagem',
      subtitle: 'Assista a Luna Super Machine ganhar vida',
      motherboard: 'Placa-Mãe',
      motherboardOnCase: 'Placa-Mãe no Gabinete',
      motherboardFixing: 'Fixação da Placa-Mãe no Gabinete',
      waterCoolerPart1: 'WaterCooler Parte 1',
      waterCoolerPart2: 'WaterCooler Parte 2',
      upgradeWatercooler: 'Upgrade Watercooler - Husky WT650',
      case: 'Gabinete',
      gpuInstallation: 'Instalação da GPU',
      frontPanel: 'Painel Frontal',
      supportInstallation: 'Instalação do Suporte',
      biosSetup: 'Configuração da BIOS',
      firstBoot: 'Primeira Inicialização',
      seeMore: 'Quer ver mais?',
      visitRepo: 'Visite o Repositório no GitHub',
    },
    
    footer: {
      tagline: 'Construído com paixão. Testado com precisão. Pronto para qualquer coisa. 🚀',
      perfectScore: 'Pontuação Perfeita 5.0/5.0',
      cpuCores: 'Núcleos da CPU',
      ram: 'RAM',
      readSpeed: 'MB/s Leitura ⭐',
      vram: 'VRAM',
      madeWith: 'Feito com',
      by: 'pela equipe Luna Super Machine',
      benchmarked: 'Benchmarks em 26 de Outubro de 2025',
      allVerified: 'Todos os Resultados Verificados ✓',
      license: 'Licenciado sob Licença MIT',
      optimizedFor: 'Esta página é otimizada para hospedagem no Cloudflare Pages',
    },
  },
};