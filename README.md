# UX Designer Portfolio Website

A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a hero section, project showcase, skills accordion, and contact section.

## 🚀 Features

- **Dark Theme** - Professional color scheme with smooth animations
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dynamic Content** - Powered by Supabase (with mock data fallback)
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Accessible** - WCAG AA compliant with keyboard navigation
- **Performance** - ISR caching and optimized images

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🗄️ Database Setup

### Supabase Tables

Create the following tables in your Supabase project:

#### Projects Table
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  tags TEXT[] NOT NULL,
  order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_projects_order ON projects(order);
```

#### Skills Table
```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_skills_order ON skills(order);
```

#### Contact Info Table
```sql
CREATE TABLE contact_info (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  github_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Row Level Security (RLS)

Enable RLS and create policies for public read access:

```sql
-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON contact_info FOR SELECT USING (true);
```

## 📝 Mock Data

The application includes mock data for development. If Supabase is not configured, it will automatically use the mock data from `lib/mockData.ts`.

## 🎨 Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Name
- Tagline
- Years of experience
- Web power rating
- Profile photo

### Update Colors

Edit `tailwind.config.ts` and `app/globals.css` to customize the color scheme.

### Update Content

- **Projects**: Add/edit in Supabase `projects` table or `lib/mockData.ts`
- **Skills**: Add/edit in Supabase `skills` table or `lib/mockData.ts`
- **Contact**: Update in Supabase `contact_info` table or `lib/mockData.ts`

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your production URL)
4. Deploy!

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
