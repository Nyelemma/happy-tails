import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="faqs"
      className="section-pad scroll-mt-24 bg-sand/35"
      aria-labelledby="faqs-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="faqs-heading"
          eyebrow="FAQs"
          title="Answers before you book"
          description="Everything you need to know about pet sitting, boarding and how Happy Tails works across Southport."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <ScrollReveal key={faq.question} delay={index * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-sand bg-cream">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sand/30 md:px-6 md:py-5"
                    >
                      <span className="font-display text-lg text-charcoal md:text-xl">
                        {faq.question}
                      </span>
                      <span
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/12 text-sage-dark transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        <Plus size={18} aria-hidden />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal/70 md:px-6 md:pb-6 md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
