import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const current = testimonials[index]

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const go = (direction: -1 | 1) => {
    setIndex((i) => (i + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-pad" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Loved by local pet owners"
          description="Kind words from Southport pet owners who trust Happy Tails with their much-loved companions."
        />

        <ScrollReveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-sand bg-cream px-6 py-10 shadow-soft md:px-12 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 top-8 font-display text-8xl text-sage/15"
            >
              “
            </div>

            <div className="relative min-h-[220px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.name + current.pet}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="text-center"
                >
                  <div className="mb-5 flex justify-center gap-1" aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-sage text-sage"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl leading-relaxed text-charcoal md:text-2xl">
                    {current.review}
                  </p>
                  <footer className="mt-8">
                    <cite className="not-italic">
                      <span className="block font-semibold text-charcoal">
                        {current.name}
                      </span>
                      <span className="mt-1 block text-sm text-charcoal/60">
                        Pet parent to {current.pet}
                      </span>
                    </cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-cream text-charcoal transition hover:border-sage/40 hover:text-sage-dark"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show review from ${item.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? 'w-7 bg-sage' : 'w-2.5 bg-sand hover:bg-sage/40'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-cream text-charcoal transition hover:border-sage/40 hover:text-sage-dark"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
