import { Mail, MessageCircle, Calendar, Github, Linkedin } from 'lucide-react'
import ContactCard from './ContactCard'

interface ContactProps {
  email: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export default function Contact({ email, socialLinks }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
            Ready to bring your next project to life? Let&apos;s collaborate and create something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={<Mail className="w-8 h-8" />}
            title="Email Me"
            description={email}
            action={{
              label: "Send an email",
              href: `mailto:${email}`,
            }}
          />

          <ContactCard
            icon={<MessageCircle className="w-8 h-8" />}
            title="Quick Chat"
            description="Let's have a quick conversation about your project"
            action={{
              label: "Start chatting",
              href: `mailto:${email}?subject=Quick Chat Request`,
            }}
          />

          <ContactCard
            icon={<Calendar className="w-8 h-8" />}
            title="Schedule Call"
            description="Book a time slot that works best for you"
            action={{
              label: "Book a call",
              href: "#contact",
            }}
          />
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-dark-text-secondary mb-6">Find me on the web</p>
          <div className="flex justify-center gap-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-text-secondary hover:text-dark-accent-primary hover:border-dark-accent-primary hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-text-secondary hover:text-dark-accent-primary hover:border-dark-accent-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-text-secondary hover:text-dark-accent-primary hover:border-dark-accent-primary hover:scale-110 transition-all duration-300"
                aria-label="X (Twitter) Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-dark-border text-center">
          <p className="text-dark-text-muted text-sm">
            © {new Date().getFullYear()} Christopher Madedo. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
