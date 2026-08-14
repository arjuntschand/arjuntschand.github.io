// Site-wide configuration. Edit values here to update the site.
// Resume PDF lives at public/resume.pdf and is served at /resume.pdf.
export const RESUME_URL = '/resume.pdf';

export const SITE = {
  name: 'Arjun Tschand',
  role: 'Duke ECE + CS ’27',
  headline:
    'ML, systems, and quant software engineering. Duke ECE + CS ’27.',
  subheadline:
    'Two-time SWE intern at Bloomberg LP, data science and AI intern at SoFi, and ML researcher at the Zavlanos Lab.',
  location: 'Durham, NC',
  emailPrimary: 'arjuntschand1@gmail.com',
  emailAcademic: 'arjun.tschand@duke.edu',
  github: 'https://github.com/arjuntschand',
  linkedin: 'https://www.linkedin.com/in/arjuntschand',
  devpost: 'https://devpost.com/arjuntschand',
  zavlanosLab: 'https://michaelmzavlanos.org/group',
  resumeUrl: RESUME_URL,
} as const;

export const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;
