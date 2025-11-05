import Image from 'next/image'
import { Star } from 'lucide-react'

interface HeroProps {
  name: string
  tagline: string
  photoUrl: string
  yearsOfExperience: number
  webPowerRating: number
}

export default function Hero({
  name,
  tagline,
  photoUrl,
  yearsOfExperience,
  webPowerRating,
}: HeroProps) {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-dark-surface border border-dark-border rounded-full">
              <span className="text-dark-text-secondary text-sm">UX Designer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text-primary leading-tight">
              {name}
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed">
              {tagline}
            </p>

            {/* Experience Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-dark-surface border border-dark-border rounded-lg">
                <div className="text-3xl font-bold text-dark-accent-primary">
                  {yearsOfExperience < 1 ? '6' : `${yearsOfExperience}+`}
                </div>
                <div className="text-sm text-dark-text-secondary">
                  {yearsOfExperience < 1 ? 'Months of' : 'Years of'}
                  <br />
                  Experience
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-dark-surface border border-dark-border rounded-lg">
                <div className="flex items-center gap-1">
                  <Star className="w-6 h-6 fill-dark-accent-primary text-dark-accent-primary" />
                  <span className="text-3xl font-bold text-dark-accent-primary">
                    {webPowerRating}
                  </span>
                </div>
                <div className="text-sm text-dark-text-secondary">
                  Web Power
                  <br />
                  Rating
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-dark-accent-primary text-white font-medium rounded-lg hover:bg-dark-accent-hover transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-dark-surface text-dark-text-primary font-medium rounded-lg border border-dark-border hover:border-dark-accent-primary hover:text-dark-accent-primary transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-border shadow-2xl">
                <Image
                  src={photoUrl}
                  alt={`${name} - UX Designer`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
