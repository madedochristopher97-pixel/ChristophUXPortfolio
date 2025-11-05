import { supabase } from '@/lib/supabase'
import { Project, Skill, ContactInfo } from '@/lib/types'
import { mockProjects, mockSkills, mockContact } from '@/lib/mockData'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

// Enable ISR with 60 second revalidation
export const revalidate = 60

async function getData() {
  // Check if Supabase is configured
  const isSupabaseConfigured = 
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'

  if (!isSupabaseConfigured) {
    console.log('Using mock data - Supabase not configured')
    return {
      projects: mockProjects,
      skills: mockSkills,
      contact: mockContact,
    }
  }

  try {
    const [projectsResult, skillsResult, contactResult] = await Promise.all([
      supabase.from('projects').select('*').order('order', { ascending: true }),
      supabase.from('skills').select('*').order('order', { ascending: true }),
      supabase.from('contact_info').select('*').single(),
    ])

    // If any query fails, fall back to mock data
    if (projectsResult.error || skillsResult.error || contactResult.error) {
      console.log('Supabase query failed, using mock data')
      return {
        projects: mockProjects,
        skills: mockSkills,
        contact: mockContact,
      }
    }

    return {
      projects: (projectsResult.data as Project[]) || mockProjects,
      skills: (skillsResult.data as Skill[]) || mockSkills,
      contact: contactResult.data || mockContact,
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      projects: mockProjects,
      skills: mockSkills,
      contact: mockContact,
    }
  }
}

export default async function Home() {
  const { projects, skills, contact } = await getData()

  return (
    <>
      <Header />
      <main>
        <Hero
          name="Christopher Madedo"
          tagline="Creating heroic digital experiences that users love"
          photoUrl="/images/profile.jpg"
          yearsOfExperience={0.5}
          webPowerRating={98}
        />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact
          email={contact.email}
          socialLinks={{
            github: contact.github_url,
            linkedin: contact.linkedin_url,
            twitter: contact.twitter_url,
          }}
        />
      </main>
    </>
  )
}
