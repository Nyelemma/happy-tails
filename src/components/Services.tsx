import { Bone, Cat, Dog, Home, Rabbit } from 'lucide-react'
import { services } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

const icons = {
  'pet-sitting': Dog,
  'pet-boarding': Home,
  'puppy-visits': Bone,
  'cat-care': Cat,
  'small-animal-care': Rabbit,
} as const

export function Services() {
  return (
    <section
      id="services"
      className="section-pad scroll-mt-24 bg-sand/40"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="Thoughtful care for every kind of companion"
          description="From daily home visits to calm overnight boarding, Happy Tails offers flexible pet care tailored to Southport families."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.id]
            return (
              <ScrollReveal key={service.id} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-sand bg-cream p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sage/35 hover:shadow-lift md:p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage/12 text-sage-dark transition-transform duration-300 group-hover:scale-110 group-hover:bg-sage/20">
                    <Icon size={24} strokeWidth={1.7} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl text-charcoal">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65 md:text-[0.95rem]">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sage-dark transition-colors hover:text-sage"
                  >
                    Enquire about {service.title}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
