import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Alex Parker - UX Designer Portfolio",
  description:
    "Creating heroic digital experiences that users love. View my portfolio of UX design projects and get in touch.",
  keywords: ["UX Designer", "UI Design", "Portfolio", "Web Design", "User Experience"],
  authors: [{ name: "Alex Parker" }],
  openGraph: {
    title: "Alex Parker - UX Designer Portfolio",
    description: "Creating heroic digital experiences that users love",
    url: "https://alexparker-portfolio.vercel.app",
    siteName: "Alex Parker Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Parker - UX Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Parker - UX Designer Portfolio",
    description: "Creating heroic digital experiences that users love",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Parker",
  jobTitle: "UX Designer",
  url: "https://alexparker-portfolio.vercel.app",
  sameAs: [
    "https://github.com/alexparker",
    "https://linkedin.com/in/alexparker",
    "https://twitter.com/alexparker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-dark-bg text-dark-text-primary`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
