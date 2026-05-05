import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="relative bg-ink-50/60 py-20 dark:bg-ink-800/40 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 — Skills"
          title="Technical Skills"
          description="Languages, frameworks, and tools I’ve used across production software, ML research, and shipped projects."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILLS.map((g) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900/60"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
                {g.label}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-ink-200 bg-white px-2.5 py-1 font-mono text-xs text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-accent-700 dark:hover:text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
