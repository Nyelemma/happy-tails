import { ScrollReveal } from './ScrollReveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  id,
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'

  return (
    <ScrollReveal className={`mb-12 flex max-w-2xl flex-col gap-4 md:mb-16 ${alignment}`}>
      {eyebrow ? (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-sage-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-display text-3xl leading-tight text-charcoal md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-charcoal/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  )
}
