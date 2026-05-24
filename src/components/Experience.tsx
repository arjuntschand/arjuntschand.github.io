import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { EXPERIENCE } from '../data/experience';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';
import { CompanyLogo } from './CompanyLogo';

type Lightbox = { src: string; alt: string } | null;

export function Experience() {
  const [lightbox, setLightbox] = useState<Lightbox>(null);

  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I’ve worked"
          description="Engineering production systems at Bloomberg, conducting ML research at Duke, and incoming at SoFi."
        />

        <motion.ol
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="relative space-y-6 border-l border-ink-200 pl-12 dark:border-ink-700 sm:space-y-8 sm:pl-14"
        >
          {EXPERIENCE.map((exp) => (
            <motion.li key={`${exp.company}-${exp.start}`} variants={fadeUp} className="relative">
              <span
                aria-hidden
                className="absolute -left-[68px] top-2 sm:-left-[76px]"
              >
                <CompanyLogo company={exp.logo} size={48} />
              </span>

              <article className="rounded-xl border border-ink-200 bg-white p-5 shadow-sm transition-all hover:border-ink-300 hover:shadow-md dark:border-ink-700 dark:bg-ink-800 dark:hover:border-ink-600 sm:p-6">
                <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-ink-900 dark:text-white sm:text-lg">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-ink-600 dark:text-ink-300">
                      {exp.company}
                      {exp.location && (
                        <span className="text-ink-400 dark:text-ink-500"> · {exp.location}</span>
                      )}
                    </p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
                    {exp.start} — {exp.end}
                    {exp.current && (
                      <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                    {exp.upcoming && (
                      <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent-500/10 px-2 py-0.5 text-[10px] font-medium text-accent-700 dark:text-accent-300">
                        Incoming
                      </span>
                    )}
                  </p>
                </header>

                <div className={`mt-4 ${exp.image ? 'grid gap-5 md:grid-cols-[1fr_180px]' : ''}`}>
                  <div>
                    <ul className="space-y-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {(exp.stack || (exp.links && exp.links.length > 0)) && (
                      <div className="mt-4 flex flex-wrap items-center gap-1.5">
                        {exp.links?.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-ink-200 px-2 py-0.5 font-mono text-[11px] text-ink-700 transition-colors hover:border-accent-400 hover:text-ink-900 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-600 dark:hover:text-white"
                          >
                            <ExternalLink size={11} />
                            {l.label}
                          </a>
                        ))}
                        {exp.stack?.map((s) => (
                          <span
                            key={s}
                            className="rounded-md bg-ink-100 px-2 py-0.5 font-mono text-[11px] text-ink-700 dark:bg-ink-700/60 dark:text-ink-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {exp.image && (
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: exp.image!.src, alt: exp.image!.alt })}
                      className="group relative block overflow-hidden rounded-lg border border-ink-200 bg-ink-50 dark:border-ink-700 dark:bg-ink-900"
                      aria-label={`Open photo: ${exp.image.caption ?? exp.image.alt}`}
                    >
                      <img
                        src={exp.image.src}
                        alt={exp.image.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {exp.image.caption && (
                        <span className="block border-t border-ink-200 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 dark:border-ink-700 dark:text-ink-400">
                          {exp.image.caption}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink-900/85 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-md border border-white/20 text-white/80 hover:bg-white/10"
          >
            <X size={18} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-[92vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
