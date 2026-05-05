import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15% 0px' }}
      className="mb-10 md:mb-14"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent-600" aria-hidden />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-ink-500 dark:text-ink-300">{description}</p>
      )}
    </motion.div>
  );
}
