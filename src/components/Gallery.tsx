import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryImages } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') {
        setActive((i) => (i === null ? 0 : (i + 1) % galleryImages.length))
      }
      if (e.key === 'ArrowLeft') {
        setActive((i) =>
          i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length,
        )
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section
      id="gallery"
      className="section-pad scroll-mt-24 bg-sand/35"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Gallery"
          title="Moments from life with Happy Tails"
          description="A glimpse of the happy faces we care for — dogs, cats and companions enjoying life with Happy Tails."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.src} delay={(index % 3) * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                aria-label={`View larger: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                    image.span === 'tall'
                      ? 'aspect-[3/4]'
                      : image.span === 'wide'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                  }`}
                  width={900}
                  height={image.span === 'tall' ? 1200 : 900}
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 text-charcoal transition hover:bg-cream"
              aria-label="Close lightbox"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              key={galleryImages[active].src}
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-lift"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
