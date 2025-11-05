'use client'

import { Skill } from '@/lib/types'
import { ChevronDown, Search, Palette, Code, Layout } from 'lucide-react'

interface SkillAccordionProps {
  skill: Skill
  isOpen: boolean
  onToggle: () => void
}

const iconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
}

export default function SkillAccordion({ skill, isOpen, onToggle }: SkillAccordionProps) {
  const icon = iconMap[skill.icon] || <Code className="w-6 h-6" />

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="border border-dark-border rounded-lg overflow-hidden bg-dark-surface hover:border-dark-accent-primary transition-colors">
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        aria-expanded={isOpen}
        aria-controls={`skill-content-${skill.id}`}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center gap-4 flex-1">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-dark-accent-primary/10 flex items-center justify-center text-dark-accent-primary">
            {icon}
          </div>

          {/* Title and Subtitle */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-dark-text-primary mb-1">
              {skill.title}
            </h3>
            <p className="text-sm text-dark-text-secondary">
              {skill.subtitle}
            </p>
          </div>
        </div>

        {/* Chevron Icon */}
        <ChevronDown
          className={`w-5 h-5 text-dark-text-secondary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable Content */}
      <div
        id={`skill-content-${skill.id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-dark-text-secondary leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  )
}
