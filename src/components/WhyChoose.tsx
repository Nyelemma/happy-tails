import {
  BadgeCheck,
  Clock3,
  Heart,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { whyChoose } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

const icons = [Heart, ShieldCheck, Clock3, Sparkles, MessagesSquare, BadgeCheck]

export function WhyChoose() {
  return (
    <section className="section-pad" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Choose Happy Tails"
          title="Care that feels personal from the first hello"
          description="We combine professional reliability with the warmth of someone who truly loves animals — so you can leave home with confidence."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => {
            const Icon = icons[index]
            return (
              <ScrollReveal key={item.title} delay={index * 0.07}>
                <article className="relative h-full overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-cream to-sand/50 p-6 md:p-7">
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sage/10"
                  />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-sage-dark shadow-soft">
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/65 md:text-[0.95rem]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
