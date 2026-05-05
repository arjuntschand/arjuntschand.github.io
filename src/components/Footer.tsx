import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from '../data/site';

function DevpostIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M5 5 L19 5 L23 12 L19 19 L5 19 L1 12 Z" />
      <path d="M9 8.5 V15.5 H12.5 A3.5 3.5 0 0 0 12.5 8.5 Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-white py-10 dark:border-ink-700 dark:bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
          © {year} Arjun Tschand
        </p>
        <div className="flex items-center gap-4 text-sm text-ink-500 dark:text-ink-400">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-ink-900 dark:hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-ink-900 dark:hover:text-white"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={SITE.devpost}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Devpost"
            className="transition-colors hover:text-ink-900 dark:hover:text-white"
          >
            <DevpostIcon size={16} />
          </a>
          <a
            href={`mailto:${SITE.emailPrimary}`}
            aria-label="Email"
            className="transition-colors hover:text-ink-900 dark:hover:text-white"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
