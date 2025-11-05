'use client'

import { useState } from 'react'
import { Skill } from '@/lib/types'
import SkillAccordion from './SkillAccordion'

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  const [openSkillId, setOpenSkillId] = useState<string | null>(null)

  const handleToggle = (skillId: string) => {
    setOpenSkillId(openSkillId === skillId ? null : skillId)
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary">
            My Super Powers
          </h2>
          <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
            Like a superhero with multiple abilities, I bring a diverse set of skills to every challenge.
          </p>
        </div>

        {/* Skills Accordion */}
        <div className="space-y-4">
          {skills.map((skill) => (
            <SkillAccordion
              key={skill.id}
              skill={skill}
              isOpen={openSkillId === skill.id}
              onToggle={() => handleToggle(skill.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
