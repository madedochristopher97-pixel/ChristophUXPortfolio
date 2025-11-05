import Image from 'next/image'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-dark-surface border border-dark-border rounded-xl overflow-hidden hover:border-dark-accent-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-dark-accent-primary/20">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-dark-accent-primary/20 to-dark-accent-secondary/20 overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="inline-block">
          <span className="px-3 py-1 bg-dark-accent-primary/10 text-dark-accent-primary text-xs font-medium rounded-full border border-dark-accent-primary/20">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-dark-text-primary group-hover:text-dark-accent-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-dark-text-secondary text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-bg text-dark-text-muted text-xs rounded-full border border-dark-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
