import { useEffect, useState } from 'react';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_SECTIONS, SITE } from '../data/site';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/80 bg-white/80 backdrop-blur-md dark:border-ink-700/60 dark:bg-ink-900/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label="Arjun Tschand — home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-600 to-cyan-500 font-mono text-sm font-semibold text-white shadow-sm transition-transform group-hover:scale-[1.04]">
            AT
          </span>
          <span className="hidden font-mono text-sm font-medium tracking-tight text-ink-900 dark:text-ink-100 sm:inline">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active === s.id
                    ? 'text-ink-900 dark:text-white'
                    : 'text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                }`}
              >
                <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400">
                  {String(NAV_SECTIONS.indexOf(s) + 1).padStart(2, '0')}.
                </span>{' '}
                {s.label}
                {active === s.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-600 dark:bg-accent-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {SITE.resumeUrl && (
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center gap-1.5 rounded-md border border-ink-200 px-3 text-sm text-ink-700 transition-colors hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-800 sm:inline-flex"
            >
              <FileText size={14} /> Resume
            </a>
          )}
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-9 w-9 place-items-center rounded-md border border-ink-200 text-ink-600 transition-colors hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-ink-200 text-ink-600 transition-colors hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-200/80 bg-white/95 backdrop-blur dark:border-ink-700/60 dark:bg-ink-900/95 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    active === s.id
                      ? 'bg-ink-100 text-ink-900 dark:bg-ink-800 dark:text-white'
                      : 'text-ink-600 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800'
                  }`}
                >
                  <span className="font-mono text-xs text-accent-600 dark:text-accent-400">
                    {String(NAV_SECTIONS.indexOf(s) + 1).padStart(2, '0')}.
                  </span>{' '}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
