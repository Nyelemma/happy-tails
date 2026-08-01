import { site } from '../lib/site'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

const highlights = [
  'Passion for animals at the heart of everything',
  'Reliable care you can trust day after day',
  'Peace of mind for busy pet owners',
  'Personal service from a local independent business',
  'A safe, calm environment for every pet',
]

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-sage/20 blur-2xl md:-left-8"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-sand blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="/assets/about.webp"
                alt={`${site.name} providing caring pet sitting and boarding in ${site.location}`}
                className="aspect-[4/5] w-full object-cover"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-display text-xl text-cream md:text-2xl">
                Local care with a personal touch
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <SectionHeading
            id="about-heading"
            align="left"
            eyebrow="About Happy Tails"
            title="A warmer way to care for the pets you love"
            description="Happy Tails is an independent pet sitting and boarding service based in Southport, built around kindness, reliability and genuine affection for animals."
          />

          <ScrollReveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-charcoal/70">
              Whether you need home visits, puppy support or calm home-from-home
              boarding, every booking is handled with the same careful attention
              you would give yourself. We take time to understand your pet&apos;s
              personality, routines and comforts — so they feel safe, settled and
              happily looked after while you are away.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-sage"
                  />
                  <span className="text-[0.95rem] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
