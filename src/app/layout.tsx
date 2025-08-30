import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingCalendly } from "@/components/FloatingCalendly";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabakaran Annadurai | Software Developer Portfolio",
  description: "Portfolio of Prabakaran Annadurai – Software Developer specializing in React, Next.js, Node, AWS, and scalable systems. Open to SDE roles. Projects, experience, skills, and contact.",
  keywords: [
    "Prabakaran Annadurai",
    "Software Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Full Stack",
    "Arizona State University",
    "SDE",
    "Web Developer",
    "Cloud",
    "TypeScript",
    "JavaScript",
    "Projects",
    "Resume"
  ],
  authors: [{ name: "Prabakaran Annadurai", url: "https://www.linkedin.com/in/praba2210/" }],
  creator: "Prabakaran Annadurai",
  openGraph: {
    title: "Prabakaran Annadurai | Software Developer Portfolio",
    description: "Portfolio of Prabakaran Annadurai – Software Developer specializing in React, Next.js, Node, AWS, and scalable systems. Open to SDE roles. Projects, experience, skills, and contact.",
  url: "https://prabakaran.pro/",
  siteName: "prabakaran.pro",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/10242690?v=4",
        width: 400,
        height: 400,
        alt: "Prabakaran Annadurai profile photo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabakaran Annadurai | Software Developer Portfolio",
    description: "Portfolio of Prabakaran Annadurai – Software Developer specializing in React, Next.js, Node, AWS, and scalable systems. Open to SDE roles. Projects, experience, skills, and contact.",
    creator: "@praba2210",
    images: ["https://avatars.githubusercontent.com/u/10242690?v=4"]
  },
  metadataBase: new URL("https://prabakaran.pro"),
  applicationName: "prabakaran.pro",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
  {/* Floating Calendly icon */}
  <FloatingCalendly />
      </body>
    </html>
  );
}
