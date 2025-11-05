interface ContactCardProps {
  icon: React.ReactNode
  title: string
  description: string
  action: {
    label: string
    href?: string
    onClick?: () => void
  }
}

export default function ContactCard({ icon, title, description, action }: ContactCardProps) {
  const content = (
    <div className="group h-full bg-dark-surface border border-dark-border rounded-xl p-8 hover:border-dark-accent-primary hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-dark-accent-primary/10">
      {/* Icon */}
      <div className="w-16 h-16 rounded-lg bg-dark-accent-primary/10 flex items-center justify-center text-dark-accent-primary mb-6 group-hover:bg-dark-accent-primary/20 transition-colors">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-dark-text-primary mb-3 group-hover:text-dark-accent-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-dark-text-secondary mb-6 leading-relaxed">
        {description}
      </p>

      {/* Action */}
      <div className="text-dark-accent-primary font-medium group-hover:underline">
        {action.label} →
      </div>
    </div>
  )

  if (action.href) {
    return (
      <a
        href={action.href}
        className="block h-full"
        aria-label={`${title}: ${description}`}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={action.onClick}
      className="block h-full w-full text-left"
      aria-label={`${title}: ${description}`}
    >
      {content}
    </button>
  )
}
