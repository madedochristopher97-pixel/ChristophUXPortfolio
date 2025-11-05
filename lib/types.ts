// TypeScript type definitions for the portfolio website

export interface Project {
  id: string
  title: string
  description: string
  category: string
  image_url: string
  tags: string[]
  order: number
  created_at?: string
  updated_at?: string
}

export interface Skill {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  order: number
  created_at?: string
  updated_at?: string
}

export interface ContactInfo {
  id: string
  email: string
  github_url?: string
  linkedin_url?: string
  twitter_url?: string
  updated_at?: string
}

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project
        Insert: Omit<Project, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>
      }
      skills: {
        Row: Skill
        Insert: Omit<Skill, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Skill, 'id' | 'created_at' | 'updated_at'>>
      }
      contact_info: {
        Row: ContactInfo
        Insert: Omit<ContactInfo, 'id' | 'updated_at'>
        Update: Partial<Omit<ContactInfo, 'id' | 'updated_at'>>
      }
    }
  }
}
