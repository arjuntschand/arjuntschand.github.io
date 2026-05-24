export type LogoKey = 'bloomberg' | 'duke' | 'sofi' | 'wit' | 'pec';

export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
  current?: boolean;
  upcoming?: boolean;
  logo: LogoKey;
  image?: { src: string; alt: string; caption?: string };
  links?: { label: string; href: string }[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'SoFi',
    role: 'Incoming Data Scientist Intern',
    location: 'San Francisco, CA',
    start: 'Jun 2026',
    end: 'Aug 2026',
    upcoming: true,
    logo: 'sofi',
    highlights: [
      'Data Science and AI Team, Money',
    ],
  },
  {
    company: 'Duke University — Zavlanos Lab',
    role: 'Machine Learning Researcher',
    location: 'Durham, NC',
    start: 'Aug 2025',
    end: 'Present',
    current: true,
    logo: 'duke',
    stack: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Linux'],
    highlights: [
      'Built PyTorch training pipelines applying distributionally robust optimization (GroupDRO) on heterogeneous multimodal datasets, improving worst-group accuracy by 15.0% on the NHANES cardiovascular disease dataset',
      'Designed a representation-learning architecture with per-group encoders and a shared classifier, aligning latent spaces via Gaussian class anchors and 2-Wasserstein distance',
      'Authored ETL, preprocessing, and experiment tooling supporting hyperparameter and architecture sweeps across UCI Heart Disease and MNIST/USPS, with up to +8.1% over ERM',
      'Presented research at Duke ECE poster sessions in Fall 2025 and Spring 2026',
    ],
    image: {
      src: '/images/research-presentation-2026.jpg',
      alt: 'Arjun Tschand presenting GroupDRO research at Duke ECE Poster Session, Spring 2026',
      caption: 'Duke ECE Poster Session · Spring 2026',
    },
  },
  {
    company: 'Bloomberg LP',
    role: 'Software Engineering Intern',
    location: 'New York, NY',
    start: 'Jun 2025',
    end: 'Aug 2025',
    logo: 'bloomberg',
    stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'TypeScript'],
    highlights: [
      'Developed a Large Language Model (LLM)-powered diagnostic system to automate post-trade issue resolution for fixed income trade allocations, reducing resolution time by 85% on the Sell Side Specialty Assets Team',
      'Architected a Python + FastAPI backend with LangGraph agents querying 1,200+ trade audit logs per request and Bloomberg-hosted LLMs to identify pipeline issues and recommend fixes',
      'Built a React + TypeScript chatbot UI with conversational memory and enterprise SSO',
      'Implemented agent observability, structured logging, and offline evaluation to monitor LLM response quality and end-to-end system reliability',
    ],
    image: {
      src: '/images/bloomberg-2025.jpg',
      alt: 'Arjun Tschand with Michael Bloomberg, Bloomberg LP internship 2025',
      caption: 'With Michael Bloomberg · Summer 2025',
    },
  },
  {
    company: 'Bloomberg LP',
    role: 'Software Engineering Intern',
    location: 'Princeton, NJ',
    start: 'Jun 2024',
    end: 'Aug 2024',
    logo: 'bloomberg',
    stack: ['Python', 'Grafana', 'Humio'],
    highlights: [
      'Developed observability tooling for Bloomberg Terminal equity index workflows on the Index Reference Data team',
      'Built real-time dashboards over equity index usage metrics serving 20,000+ daily users, used to monitor a multi-quarter migration',
      'Authored flexible Grafana and Humio queries powering telemetry across two internal data systems',
      'Drove adoption of the new EQIX workflow for 625+ engineers by highlighting legacy-function usage in dashboards',
    ],
    image: {
      src: '/images/bloomberg-2024.jpg',
      alt: 'Arjun Tschand with Michael Bloomberg, Bloomberg LP internship 2024',
      caption: 'With Michael Bloomberg · Summer 2024',
    },
  },
  {
    company: 'WIT',
    role: 'Software Engineer Intern',
    location: 'Aberdeen, NJ',
    start: 'Jun 2023',
    end: 'Aug 2023',
    logo: 'wit',
    stack: ['Phaser.js', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Built a cross-platform Phaser.js Whack-a-Mole fan-engagement game for the NFL Baltimore Ravens, reaching 635,380 in-stadium fans during the 2023–24 season',
      'Designed a multi-scene JavaScript game architecture with event-driven gameplay logic (randomized targets, timers, score tracking, animated feedback) and responsive layouts across iOS, Android, and large in-stadium displays',
    ],
  },
  {
    company: 'Parwan Electronics Corporation',
    role: 'Software Engineer Intern',
    location: 'Aberdeen, NJ',
    start: 'Jun 2022',
    end: 'Aug 2022',
    logo: 'pec',
    stack: ['C#', '.NET', 'Visual Studio', 'WinForms'],
    highlights: [
      'Built OrderSaver™, a commercial Visual C# / .NET desktop application for e-commerce order verification, shipping verification, and fraud prevention',
      'Implemented barcode-driven order fulfillment workflows, photo/video capture during packing, and integrations with e-commerce platforms (e.g. SellerCloud) for automated order audit trails',
    ],
    links: [
      { label: 'Product page', href: 'https://www.voicesaver.com/e-commerce-solutions.html' },
    ],
  },
];
