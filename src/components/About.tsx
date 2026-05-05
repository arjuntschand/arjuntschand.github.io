import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';
import { COURSEWORK } from '../data/skills';

const STATS = [
  { label: 'Major', value: 'ECE + CS' },
  { label: 'Grad', value: 'May 2028' },
  { label: 'Degree', value: 'BS / MS (3+1)' },
  { label: 'GPA', value: '3.81 / 4.00' },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="01 — About" title="About me" />

        <div className="grid gap-10 md:grid-cols-5 md:gap-12">
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="space-y-6 md:col-span-3"
          >
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-ink-700 dark:text-ink-200"
            >
              I’m an undergraduate at{' '}
              <span className="font-medium text-ink-900 dark:text-white">Duke University</span>{' '}
              studying Electrical and Computer Engineering and Computer Science, on an
              accelerated BS/MS 3+1 track with an{' '}
              <span className="font-medium text-ink-900 dark:text-white">M.S. in ECE</span>. My
              work sits at the intersection of applied machine learning and software systems
              engineering.
            </motion.p>

            <motion.dl
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-ink-200 bg-white px-4 py-3 dark:border-ink-700 dark:bg-ink-800"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink-900 dark:text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.div variants={fadeUp} className="pt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
                Selected coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {COURSEWORK.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-ink-200 bg-white px-2.5 py-1 font-mono text-xs text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent-300/40 to-cyan-300/40 blur-2xl dark:from-accent-700/30 dark:to-cyan-700/30" />
              <figure className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm dark:border-ink-700 dark:bg-ink-800">
                <img
                  src="/images/arjun-headshot.jpg"
                  alt="Arjun Tschand on Duke University's campus"
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="border-t border-ink-200 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 dark:border-ink-700 dark:text-ink-400">
                  Duke University · Durham, NC
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
