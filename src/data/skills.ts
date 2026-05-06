export type SkillGroup = {
  label: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C++', 'C', 'SQL', 'Swift', 'HTML/CSS'],
  },
  {
    label: 'ML / Data',
    items: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'ChromaDB', 'LangGraph'],
  },
  {
    label: 'Backend / Systems',
    items: ['FastAPI', 'Flask', 'Docker', 'Linux', 'AWS', 'REST'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Observability / Tools',
    items: ['Git', 'GitHub', 'Grafana', 'Humio'],
  },
];

export const COURSEWORK = [
  'Deep Learning (Graduate)',
  'Robust Machine Learning',
  'Natural Language Processing',
  'Data Structures & Algorithms',
  'Computer Architecture',
  'Signals and Systems',
  'Probability',
  'Linear Algebra',
  'Multivariable Calculus',
];
