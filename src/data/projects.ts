export type Project = {
  title: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  category: 'quant' | 'ml' | 'systems' | 'embedded' | 'web';
  date?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Crypto Options Pricing & Risk Engine',
    blurb:
      'BTC/ETH options pricer benchmarked against live Deribit market data, with model calibration and a mispricing watchlist.',
    date: 'Apr 2026',
    category: 'quant',
    tags: ['Python', 'NumPy', 'SciPy', 'Black-Scholes', 'Monte Carlo', 'Heston'],
    bullets: [
      'Implemented Black-Scholes, Monte Carlo, and Heston pricers; validated on 1,505 Deribit contracts at 8.4% MAPE.',
      'Calibrated Heston via differential evolution, outperforming Black-Scholes by 166 percentage points in 2020 / 2022 crash regimes.',
      'Designed a flagging algorithm surfacing 110+ contracts with >15% model-vs-market mispricings as a trading watchlist.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/arjuntschand/Crypto-Options-Pricing' }],
    featured: true,
  },
  {
    title: 'Duke Scheduling Assistant',
    blurb:
      'RAG-based course planning chatbot grounded in structured Duke degree and course documents.',
    date: 'Dec 2025',
    category: 'ml',
    tags: ['Python', 'RAG', 'ChromaDB', 'all-MiniLM-L6-v2', 'GPT-4o'],
    bullets: [
      'Chunked and embedded structured degree/course documents with all-MiniLM-L6-v2; indexed in ChromaDB with cosine retrieval.',
      'Answer generation through GPT-4o API, conditioned on top-k retrieved context.',
      'Evaluated 100+ queries; tuned chunk size to lift hit@5 from 67% to 86%, with 80% end-to-end accuracy.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/arjuntschand/DukeSchedulingAssistant' }],
    featured: true,
  },
  {
    title: 'Realtime Drowning Detection',
    blurb:
      'Embedded Raspberry Pi system for poolside drowning detection with sub-2-second iOS alerts.',
    date: 'Jan 2024 — Jun 2024',
    category: 'embedded',
    tags: ['Raspberry Pi', 'TensorFlow', 'Flask', 'SQL', 'Swift'],
    bullets: [
      'Trained a real-time TensorFlow CNN on a custom labeled dataset (drowning, swimming, empty pool) reaching 96% accuracy.',
      'Built a Flask + SQL backend and a Swift iOS app streaming live video with sub-2-second drowning alerts.',
      'Self-filed USPTO provisional patent: Intelligent Audio-Visual Observation System to Detect Pool Drownings.',
    ],
    links: [{ label: 'Poster', href: '/posters/drowning-detection-poster.pdf' }],
    featured: true,
  },
  {
    title: 'Custom CPU Design',
    blurb:
      '16-bit single-cycle CPU built from scratch in Logisim with a custom MIPS-like ISA.',
    date: 'Mar 2025 — Apr 2025',
    category: 'systems',
    tags: ['Logisim', 'RTL', 'Computer Architecture', 'MIPS-like ISA'],
    bullets: [
      'Designed and simulated a 16-bit single-cycle CPU datapath and control logic in Logisim, implementing a custom MIPS-like ISA.',
      'Implemented and verified ALU operations, register file, instruction decoding, and control signals at the RTL level.',
    ],
    featured: true,
  },
  {
    title: 'DevilsEats',
    blurb:
      'Mobile nutrition tracker for Duke students that logs on-campus dining meals and tracks macros against daily goals.',
    date: 'Apr 2026',
    category: 'web',
    tags: ['Expo', 'React Native', 'TypeScript', 'Zustand', 'NativeWind'],
    bullets: [
      'Built with Expo + React Native + TypeScript, Zustand for state management, and NativeWind for styling.',
      '7-day consumption charts, preloaded Duke restaurant menus, and local persistence for offline-first onboarding.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/arjuntschand/DevilsEats' }],
    featured: true,
  },
  {
    title: 'RecyclAIble',
    blurb:
      'Computer-vision-powered mechanical waste bin that classifies and sorts recyclables in real time.',
    date: 'Sep 2024',
    category: 'embedded',
    tags: ['Python', 'TensorFlow', 'Arduino', 'Hardware'],
    bullets: [
      'Achieved 95.4% classification accuracy on the recyclable / non-recyclable task.',
      'Won Best Hardware Hack out of 62 teams at PennApps XXIII.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Kevin-Liu-01/RecyclAIble' },
      { label: 'Devpost', href: 'https://devpost.com/software/recycleai-v1dqz5' },
    ],
    featured: true,
  },
];

export const HACKATHON_WINS: Project[] = [
  {
    title: 'Eyeonics',
    blurb:
      'ML-driven computer vision glove that helps visually impaired users navigate their surroundings.',
    category: 'embedded',
    tags: ['Python', 'TensorFlow', 'C++'],
    bullets: ['Hackathon winner.'],
    links: [
      { label: 'GitHub', href: 'https://github.com/arjuntschand/Eyeonics' },
      { label: 'Devpost', href: 'https://devpost.com/software/eyeonics' },
    ],
  },
  {
    title: 'LetMeCook',
    blurb:
      'Mobile app that suggests personalized recipes from available ingredients via computer vision.',
    category: 'web',
    tags: ['Swift', 'Python', 'React'],
    bullets: ['Hackathon winner.'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/letmecook' },
    ],
  },
  {
    title: 'FireSense',
    blurb:
      'Raspberry Pi early-fire detection system with image capture, color analysis, and a web dashboard.',
    category: 'embedded',
    tags: ['Python', 'C++', 'Arduino'],
    bullets: ['Hackathon winner.'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/firesense-zn4m1l' },
    ],
  },
  {
    title: 'Biometricz',
    blurb:
      'Telehealth platform for virtual consultations with real-time biometric data sharing.',
    category: 'web',
    tags: ['TypeScript', 'React', 'SQL'],
    bullets: ['Hackathon winner.'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/biometricz' },
    ],
  },
];
