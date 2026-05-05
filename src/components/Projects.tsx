import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Trophy } from 'lucide-react';
import { FEATURED_PROJECTS, HACKATHON_WINS, type Project } from '../data/projects';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

function linkIcon(label: string) {
  if (label.toLowerCase() === 'github') return <Github size={13} />;
  return <ExternalLink size={13} />;
}

const CATEGORY_LABEL: Record<Project['category'], string> = {
  quant: 'Quant',
  ml: 'ML',
  systems: 'Systems',
  embedded: 'Embedded',
  web: 'Web',
};

function ProjectCard({ p }: { p: Project }) {
  const primaryLink = p.links?.[0];
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-md dark:border-ink-700 dark:bg-ink-800 dark:hover:border-ink-600"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-accent-300/30 to-cyan-300/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-accent-700/30 dark:to-cyan-700/30"
      />

      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
            {CATEGORY_LABEL[p.category]}
            {p.date && <span className="ml-2 text-ink-400 dark:text-ink-500">{p.date}</span>}
          </p>
          <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
            {p.title}
          </h3>
        </div>
        {primaryLink && (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.title} — ${primaryLink.label}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-ink-200 text-ink-600 transition-all hover:border-ink-300 hover:bg-ink-50 hover:text-ink-900 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-700 dark:hover:text-white"
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </header>

      <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{p.blurb}</p>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {p.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-ink-100 px-2 py-0.5 font-mono text-[11px] text-ink-700 dark:bg-ink-700/60 dark:text-ink-200"
            >
              {t}
            </span>
          ))}
        </div>

        {p.links && p.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-ink-200 px-2.5 py-1 font-mono text-[11px] text-ink-700 transition-colors hover:border-accent-400 hover:text-ink-900 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-600 dark:hover:text-white"
              >
                {linkIcon(l.label)}
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function HackathonCard({ p }: { p: Project }) {
  const link = p.links?.[0];
  return (
    <motion.a
      variants={fadeUp}
      href={link?.href ?? '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      className="group flex flex-col gap-2 rounded-lg border border-ink-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-sm dark:border-ink-700 dark:bg-ink-800 dark:hover:border-ink-600"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
          <Trophy size={11} /> Winner
        </div>
        <ArrowUpRight
          size={14}
          className="text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <h4 className="text-sm font-semibold tracking-tight text-ink-900 dark:text-white">
        {p.title}
      </h4>
      <p className="text-xs text-ink-600 dark:text-ink-300">{p.blurb}</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {p.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[10px] text-ink-700 dark:bg-ink-700/60 dark:text-ink-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work"
          description="A curated set of technical projects across quantitative software, ML research, and embedded systems."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-5 md:grid-cols-2"
        >
          {FEATURED_PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </motion.div>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mt-16"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
              Selected hackathon wins
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
              via Devpost
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HACKATHON_WINS.map((p) => (
              <HackathonCard key={p.title} p={p} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
