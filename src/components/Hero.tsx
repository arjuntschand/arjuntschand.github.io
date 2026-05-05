import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';

export function Hero() {
  const hasResume = Boolean(SITE.resumeUrl);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24"
    >
      {/* Background grid + gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:48px_48px] opacity-[0.5] dark:bg-grid-dark"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[480px] max-w-5xl"
      >
        <div className="absolute left-1/4 top-12 h-72 w-72 rounded-full bg-accent-300/40 blur-3xl dark:bg-accent-700/30" />
        <div className="absolute right-1/4 top-24 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl dark:bg-cyan-700/30" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3 py-1 font-mono text-xs text-ink-600 backdrop-blur dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to Summer 2027 internships
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Arjun Tschand.
            <span className="block bg-gradient-to-r from-accent-500 to-sky-500 bg-clip-text text-transparent opacity-80 dark:opacity-90">
              Applied ML, systems, and quantitative software.
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SITE.emailPrimary}`}
              className="group inline-flex items-center gap-2 rounded-md bg-ink-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-ink-800 hover:shadow-md dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
            >
              <Mail size={16} />
              Get in touch
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            {hasResume ? (
              <a
                href={SITE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-900 transition-all hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-800 dark:text-white dark:hover:bg-ink-700"
              >
                <FileText size={16} /> Resume
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Resume coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-400 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-500"
              >
                <FileText size={16} /> Resume
              </button>
            )}

            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-md border border-ink-200 bg-white text-ink-700 transition-all hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700"
            >
              <Github size={16} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-md border border-ink-200 bg-white text-ink-700 transition-all hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700"
            >
              <Linkedin size={16} />
            </a>
          </motion.div>

          {/* Quick affiliations strip */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500"
          >
            <span>Duke ECE + CS</span>
            <span aria-hidden className="hidden h-px w-6 bg-ink-200 dark:bg-ink-700 sm:block" />
            <span>Bloomberg L.P.</span>
            <span aria-hidden className="hidden h-px w-6 bg-ink-200 dark:bg-ink-700 sm:block" />
            <span>Zavlanos Lab</span>
            <span aria-hidden className="hidden h-px w-6 bg-ink-200 dark:bg-ink-700 sm:block" />
            <span>Accenture</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
