import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../lib/site'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <img
        src="/assets/hero.webp"
        alt="Happy dog outdoors enjoying professional pet care in Southport"
        className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
        width={1600}
        height={1067}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/88 via-charcoal/55 to-charcoal/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-charcoal/25" />

      {!reduceMotion ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-16 top-28 h-56 w-56 rounded-full bg-sage/25 blur-3xl"
            animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-24 right-8 h-64 w-64 rounded-full bg-sand/20 blur-3xl"
            animate={{ y: [0, -22, 0], x: [0, -12, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[18%] top-[22%] h-24 w-24 rounded-full border border-cream/20"
            animate={{ y: [0, -14, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      ) : null}

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:pb-20 md:justify-center md:px-8 md:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-sand"
          >
            {site.name} · {site.location}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-[2.35rem] leading-[1.12] text-cream sm:text-5xl md:text-6xl"
          >
            Professional Pet Sitting &amp; Boarding in Southport
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg"
          >
            Caring for your pets like they&apos;re our own. Reliable pet sitting and
            home-from-home boarding across Southport and the surrounding areas.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
              className="btn-primary"
            >
              Enquire Now
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('services')
              }}
              className="btn-secondary-light"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
