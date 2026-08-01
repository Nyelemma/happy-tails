import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../lib/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (href: string) => {
    setOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-sand/80 bg-cream/92 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('#home')
          }}
          className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <img
            src="/assets/logo.svg"
            alt={`${site.name} logo`}
            className={`h-11 w-auto transition-all duration-300 group-hover:scale-[1.02] md:h-12 ${
              solid ? '' : 'brightness-0 invert'
            }`}
            width={180}
            height={48}
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                  solid
                    ? 'text-charcoal/80 hover:text-sage-dark'
                    : 'text-cream/90 hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`text-sm font-medium transition-colors ${
              solid
                ? 'text-charcoal/70 hover:text-sage-dark'
                : 'text-cream/85 hover:text-cream'
            }`}
          >
            {site.phone}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#contact')
            }}
            className="btn-primary !px-5 !py-2.5 !text-sm"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden ${
            solid
              ? 'text-charcoal hover:bg-sand/70'
              : 'text-cream hover:bg-cream/10'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-sand bg-cream lg:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(link.href)
                    }}
                    className="block rounded-md px-2 py-3 text-base font-medium text-charcoal transition-colors hover:bg-sand/50 hover:text-sage-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-sand pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav('#contact')
                  }}
                  className="btn-primary w-full text-center"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
