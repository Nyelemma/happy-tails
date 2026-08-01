import { useEffect } from 'react'
import { faqs } from '../data/content'
import { site } from '../lib/site'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://happytailssouthport.co.uk/#business',
  name: site.name,
  description:
    'Professional pet sitting and home-from-home boarding in Southport and surrounding areas. Dog sitting, cat care, puppy visits and small animal care.',
  url: 'https://happytailssouthport.co.uk',
  telephone: '+447943117923',
  email: site.email,
  image: '/assets/hero.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Southport',
    addressRegion: 'Merseyside',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Southport and surrounding areas',
  },
  priceRange: '££',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [site.whatsappHref],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function Seo() {
  useEffect(() => {
    const scriptId = 'happy-tails-schema'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify([localBusinessSchema, faqSchema])
  }, [])

  return null
}
