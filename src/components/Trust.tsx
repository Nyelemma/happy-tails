import { HeartHandshake, MapPinned, Home, CalendarClock } from 'lucide-react'
import { trustItems } from '../data/content'
import { ScrollReveal } from './ScrollReveal'

const icons = [HeartHandshake, CalendarClock, Home, MapPinned]

export function Trust() {
  return (
    <section
      className="relative z-10 -mt-10 px-5 md:-mt-14 md:px-8"
      aria-label="Why pet owners trust Happy Tails"
    >
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {trustItems.map((item, index) => {
          const Icon = icons[index]
          return (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="group h-full rounded-2xl border border-sand bg-cream p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 md:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage/15 text-sage-dark transition-colors group-hover:bg-sage/25">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
