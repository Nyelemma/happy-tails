import { navLinks, site } from '../lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-sand bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-16">
        <div>
          <img
            src="/assets/logo.svg"
            alt={`${site.name} logo`}
            className="h-12 w-auto brightness-0 invert"
            width={180}
            height={48}
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Professional pet sitting and home-from-home boarding in Southport —
            caring for your pets like they&apos;re our own.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-cream">Quick links</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-cream">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="text-cream/70 transition-colors hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 transition-colors hover:text-cream"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="inline-block whitespace-nowrap text-cream/70 transition-colors hover:text-cream"
              >
                {site.email}
              </a>
            </li>
            <li className="text-cream/60">{site.addressLine}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Pet sitting &amp; boarding in Southport and surrounding areas.</p>
        </div>
      </div>
    </footer>
  )
}
