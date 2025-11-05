'use client'

import { useState } from 'react'
import { Project } from '@/lib/types'
import ProjectCard from './ProjectCard'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false)
  
  const displayedProjects = showAll ? projects : projects.slice(0, 4)
  const hasMore = projects.length > 4

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary">
            My Web of Projects
          </h2>
          <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
            Every project is a thread in my web of expertise. Here are some of my favorite digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        {hasMore && !showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-dark-surface text-dark-text-primary font-medium rounded-lg border border-dark-border hover:border-dark-accent-primary hover:text-dark-accent-primary transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View All Projects
            </button>
          </div>
        )}

        {showAll && hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-4 bg-dark-surface text-dark-text-primary font-medium rounded-lg border border-dark-border hover:border-dark-accent-primary hover:text-dark-accent-primary transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
