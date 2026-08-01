/**
 * Happy Tails — site-wide contact & brand settings.
 * Update these values in one place to change them across the website.
 */
export const site = {
  name: 'Happy Tails',
  tagline: 'Professional Pet Sitting & Boarding in Southport',
  location: 'Southport',
  areas: 'Southport and the surrounding areas',
  phone: '07943 117923',
  phoneHref: 'tel:+447943117923',
  whatsappHref: 'https://wa.me/447943117923',
  /** Change this email address whenever needed */
  email: 'happytailsnorthwest@gmail.com',
  get emailHref() {
    return `mailto:${this.email}?subject=${encodeURIComponent('Happy Tails Enquiry')}`
  },
  hours: [
    { label: 'Monday – Friday', value: '8:00am – 7:00pm' },
    { label: 'Saturday', value: '9:00am – 5:00pm' },
    { label: 'Sunday', value: 'By arrangement' },
  ],
  addressLine: 'Southport, Merseyside',
} as const

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
] as const
