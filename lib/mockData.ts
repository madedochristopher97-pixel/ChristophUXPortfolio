import { Project, Skill, ContactInfo } from './types'

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Mobile App',
    description: 'Designed an intuitive mobile shopping experience with seamless checkout flow and personalized recommendations.',
    category: 'Mobile Design',
    image_url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    tags: ['UI Design', 'Mobile', 'E-Commerce'],
    order: 1,
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Created a comprehensive analytics dashboard with data visualization and real-time insights for business intelligence.',
    category: 'Web Design',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Data Visualization', 'UI Design', 'SaaS'],
    order: 2,
  },
  {
    id: '3',
    title: 'HealthCare Platform',
    description: 'Developed a patient-centered healthcare platform with appointment scheduling and telemedicine features.',
    category: 'Healthcare',
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['User Psychology', 'UI Design', 'Healthcare'],
    order: 3,
  },
  {
    id: '4',
    title: 'Fitness Tracking App',
    description: 'Built a motivating fitness app with workout tracking, progress analytics, and social features.',
    category: 'Mobile Design',
    image_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    tags: ['Mobile', 'UI Design', 'Gamification'],
    order: 4,
  },
]

export const mockSkills: Skill[] = [
  {
    id: '1',
    title: 'UX Research & Strategy',
    subtitle: 'Understanding users to create meaningful experiences',
    description: 'I conduct comprehensive user research including interviews, surveys, and usability testing to uncover insights that drive design decisions. My strategic approach ensures that every design choice is backed by data and user needs.',
    icon: 'search',
    order: 1,
  },
  {
    id: '2',
    title: 'UI/UX Design',
    subtitle: 'Beautiful interfaces that users love',
    description: 'I craft pixel-perfect interfaces that balance aesthetics with functionality. From wireframes to high-fidelity prototypes, I ensure every interaction is intuitive and delightful.',
    icon: 'palette',
    order: 2,
  },
  {
    id: '3',
    title: 'Web Development',
    subtitle: 'Bringing designs to life with code',
    description: 'I bridge the gap between design and development with proficiency in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. This allows me to prototype quickly and collaborate effectively with development teams.',
    icon: 'code',
    order: 3,
  },
  {
    id: '4',
    title: 'Design Systems',
    subtitle: 'Creating scalable and consistent design languages',
    description: 'I build comprehensive design systems that ensure consistency across products while enabling teams to work efficiently. From component libraries to documentation, I create the foundation for scalable design.',
    icon: 'layout',
    order: 4,
  },
]

export const mockContact: ContactInfo = {
  id: '1',
  email: 'madedochristopher97@gmail.com',
  github_url: 'https://github.com/madedochristopher97-pixel',
  linkedin_url: 'https://www.linkedin.com/in/christophermadedo',
  twitter_url: 'https://x.com/ChristophUX',
}
