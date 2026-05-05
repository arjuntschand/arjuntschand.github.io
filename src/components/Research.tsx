import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { SITE } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

const SECTIONS = [
  {
    label: 'Problem',
    body:
      'Standard ERM and vanilla GroupDRO assume a shared feature space across groups. Real datasets often have groups with different feature dimensions, modalities, or sample sizes, where worst-group performance collapses.',
  },
  {
    label: 'Approach',
    body:
      'Per-group encoders map heterogeneous inputs into a shared latent space, followed by a single shared classifier. Same-class embeddings are pulled together across groups by anchoring each class with a learnable Gaussian and aligning via the squared 2-Wasserstein distance.',
  },
  {
    label: 'Optimization',
    body:
      'A GroupDRO objective on top of the encoder–classifier stack focuses gradient updates on the worst-performing groups, trading average accuracy for robust, equitable performance across the distribution of groups.',
  },
  {
    label: 'Impact',
    body:
      'Anchors and GroupDRO are synergistic: neither helps much alone, but together they structure the latent space so GroupDRO can reweight effectively across heterogeneous groups. This extends prior personalized-federated approaches (Rakotomamonjy et al., 2023) to a centralized setting, validated on real medical datasets.',
  },
];

const RESULTS = [
  { metric: '+15.0%', label: 'Worst-group accuracy on NHANES CVD' },
  { metric: 'up to +8.1%', label: 'Over ERM on UCI Heart Disease & MNIST/USPS' },
  { metric: '2×', label: 'Duke ECE poster sessions (Fall ’25, Spring ’26)' },
];

const DATASETS = ['NHANES Cardiovascular Disease', 'UCI Heart Disease', 'MNIST / USPS'];

export function Research() {
  return (
    <section id="research" className="relative bg-ink-50/60 py-20 dark:bg-ink-800/40 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Research"
          title="GroupDRO with heterogeneous feature spaces"
          description="Distributionally robust learning across heterogeneous feature spaces. Joint work with Xenia Konti, advised by Prof. Michael Zavlanos at the Zavlanos Lab, Duke."
        />

        {/* Lead block: poster photo + summary */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-8 lg:grid-cols-5 lg:gap-10"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 lg:col-span-2"
          >
            <figure className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm dark:border-ink-700 dark:bg-ink-900/60">
              <img
                src="/images/research-poster-2026.jpg"
                alt="GroupDRO with Heterogeneous Feature Spaces research poster, Duke ECE Spring 2026"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
              <figcaption className="border-t border-ink-200 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 dark:border-ink-700 dark:text-ink-400">
                Duke ECE Poster Session · Spring 2026
              </figcaption>
            </figure>
            <a
              href="/posters/groupdro-research-poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-900 transition-all hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-800 dark:text-white dark:hover:bg-ink-700"
            >
              <FileText size={14} /> View research poster (PDF)
              <ArrowUpRight
                size={14}
                className="text-accent-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-accent-400"
              />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-5 lg:col-span-3">
            <div className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900/60">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                Results
              </p>
              <ul className="mt-3 space-y-3">
                {RESULTS.map((r) => (
                  <li key={r.label} className="flex items-baseline gap-3">
                    <span className="font-mono text-base font-semibold text-accent-700 dark:text-accent-400">
                      {r.metric}
                    </span>
                    <span className="text-sm text-ink-600 dark:text-ink-300">{r.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900/60">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                  Datasets
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-700 dark:text-ink-200">
                  {DATASETS.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900/60">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                  Affiliation
                </p>
                <a
                  href={SITE.zavlanosLab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink-900 dark:text-white"
                >
                  Zavlanos Lab Group Page
                  <ArrowUpRight
                    size={14}
                    className="text-accent-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-accent-400"
                  />
                </a>
                <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                  Duke University · Department of ECE
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 2x2 problem / approach / optimization / impact grid */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {SECTIONS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900/60"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
                {s.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
