import { motion } from 'framer-motion';
import { ArrowUpRight, Github, GraduationCap, Linkedin, Mail } from 'lucide-react';
import { SITE } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let’s build something."
          className="mb-[46px]"
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="space-y-[46px]"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.emailPrimary}`}
              className="group inline-flex items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-ink-800 hover:shadow-md dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
            >
              <Mail size={16} /> {SITE.emailPrimary}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500 dark:text-ink-400"
          >
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink-900 dark:hover:text-white"
            >
              <Github size={14} /> github.com/arjuntschand
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink-900 dark:hover:text-white"
            >
              <Linkedin size={14} /> linkedin.com/in/arjuntschand
            </a>
            <a
              href={`mailto:${SITE.emailAcademic}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink-900 dark:hover:text-white"
            >
              <GraduationCap size={14} /> {SITE.emailAcademic}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
