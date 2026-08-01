import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site } from '../lib/site'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let’s talk about your pets"
          description="Ready to book or just have a question? Reach out by phone, WhatsApp or email — we’ll get back to you as soon as we can."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="group rounded-2xl border border-sand bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage/12 text-sage-dark">
                  <Phone size={22} aria-hidden />
                </div>
                <h3 className="font-display text-xl text-charcoal">Phone</h3>
                <p className="mt-2 text-lg font-semibold text-sage-dark group-hover:underline">
                  {site.phone}
                </p>
                <p className="mt-2 text-sm text-charcoal/60">
                  Tap to call on mobile
                </p>
              </a>

              <a
                href={site.emailHref}
                className="group rounded-2xl border border-sand bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage/12 text-sage-dark">
                  <Mail size={22} aria-hidden />
                </div>
                <h3 className="font-display text-xl text-charcoal">Email Us</h3>
                <p className="mt-2 break-all text-base font-semibold text-sage-dark group-hover:underline">
                  {site.email}
                </p>
                <p className="mt-2 text-sm text-charcoal/60">
                  Opens your default email app
                </p>
              </a>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl bg-[#25D366] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe57] sm:col-span-2"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <MessageCircle size={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-2xl">Chat on WhatsApp</h3>
                  <p className="mt-2 max-w-md text-sm text-white/90 md:text-base">
                    The quickest way to enquire about pet sitting, boarding or
                    puppy visits in Southport.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Message Happy Tails
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="h-full rounded-[1.75rem] border border-sand bg-gradient-to-br from-cream to-sand/60 p-7 md:p-8">
              <div className="mb-8">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-sage-dark shadow-soft">
                  <Clock3 size={20} aria-hidden />
                </div>
                <h3 className="font-display text-2xl text-charcoal">Business hours</h3>
                <ul className="mt-4 space-y-3">
                  {site.hours.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between gap-4 border-b border-sand/80 pb-3 text-sm last:border-none last:pb-0"
                    >
                      <span className="text-charcoal/70">{row.label}</span>
                      <span className="font-medium text-charcoal">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-sage-dark shadow-soft">
                  <MapPin size={20} aria-hidden />
                </div>
                <h3 className="font-display text-2xl text-charcoal">Areas covered</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 md:text-base">
                  Based in {site.addressLine}, Happy Tails provides pet sitting,
                  dog boarding, cat sitting and home pet care across{' '}
                  {site.areas}. Message us with your location to confirm.
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
