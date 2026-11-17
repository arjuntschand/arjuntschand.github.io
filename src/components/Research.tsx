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
      'A GroupDRO objective over excess loss on top of the encoder–classifier stack focuses gradient updates on underserved groups rather than those inherently harder to predict, improving worst-group performance without chasing irreducible error.',
  },
  {
    label: 'Impact',
    body:
      'Anchors and GroupDRO are synergistic: neither helps much alone, but together they structure the latent space so GroupDRO can reweight effectively across heterogeneous groups. This extends prior personalized-federated approaches (Rakotomamonjy et al., 2023) to a centralized setting, validated on tabular and imaging medical datasets. Co-first-authored paper under review at AISTATS 2027.',
  },
];

const RESULTS = [
  { metric: 'up to 79%', label: 'Lower worst-group loss vs. published baselines' },
  { metric: 'up to 95%', label: 'Lower excess loss vs. published baselines' },
  { metric: 'up to 18×', label: 'Fewer parameters than published baselines' },
  { metric: 'AISTATS 2027', label: 'Co-first author, paper under review' },
  { metric: '2×', label: 'Duke ECE poster sessions (Fall ’25, Spring ’26)' },
];

const DATASETS = ['NHANES (tabular)', 'Fed-Heart (tabular)', 'EMBED (mammography imaging)'];

export function Research() {
  return (
    <section id="research" className="relative bg-ink-50/60 py-20 dark:bg-ink-800/40 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Research"
          title="GroupDRO with heterogeneous feature spaces"
          description="Distributionally robust learning across heterogeneous feature spaces. Co-first author with Xenia Konti, advised by Prof. Michael Zavlanos at the Zavlanos Lab, Duke."
        />

        {/* Lead block: paper card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="flex flex-col gap-5 rounded-xl border border-ink-200 bg-white p-6 shadow-sm dark:border-ink-700 dark:bg-ink-900/60 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
              Paper · AISTATS 2027 (under review)
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-2xl">
              Learning Across Heterogeneous Feature Spaces with Group Robustness
            </h3>
            <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
              Xenia Konti*, <span className="font-medium text-ink-900 dark:text-white">Arjun Tschand*</span>, Chuan Hong, Nicoleta J. Economou-Zavlanos, Michael M. Zavlanos
            </p>
            <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">*Equal contribution</p>
          </div>
          <a
            href={SITE.paperArxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink-900 px-6 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:bg-ink-800 hover:shadow-md dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
          >
            <FileText size={18} /> Read the paper on arXiv
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mt-8 grid gap-5 lg:grid-cols-5"
        >
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div className="h-full rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900/60">
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

          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
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
