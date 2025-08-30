
"use client";
import React from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileDown, MapPin, Briefcase, Code2, Cpu, Database, Star, Send, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/data/site";
import { nav as navItems } from "@/data/nav";
import { experience as expItems } from "@/data/experience";
import { projects as projectItems } from "@/data/projects";
import { skills as skillGroups } from "@/data/skills";
import { education as schoolItems } from "@/data/education";
import { activities as activityItems } from "@/data/activities";

// Simple fade-up animation helper
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.2 },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 antialiased">
      {/* JSON-LD: Person */}
      <Script id="ld-person" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Prabakaran Annadurai",
          url: site.url + "/",
          sameAs: [
            site.github,
            site.linkedin
          ],
          jobTitle: "Software Developer",
          worksFor: {
            "@type": "Organization",
            name: "Arizona State University"
          }
        })}
      </Script>
      {/* JSON-LD: Website */}
      <Script id="ld-website" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url + "/",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${site.url}/?q={search_term_string}`
            },
            queryInput: "required name=search_term_string"
          }
        })}
      </Script>
      <Header />
      <main className="mx-auto max-w-7xl px-6 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            <span className="text-zinc-100">{site.name.split(".")[0]}</span>
            <span className="text-indigo-400">.{site.name.split(".")[1]}</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-zinc-300 hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button as="a" href={site.linkedin} target="_blank" rel="noreferrer" variant="secondary" className="hidden sm:inline-flex">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button as="a" href={site.github} target="_blank" rel="noreferrer" variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative py-20 sm:py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <MapPin className="h-3.5 w-3.5" /> {site.location}
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="text-indigo-400">Prabakaran Annadurai</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Software Developer building reliable, scalable systems. I work across <strong>React/Next.js</strong>,
          <strong> Node/Flask</strong>, and <strong>AWS</strong>. Recently at <strong>Amazon Neptune</strong> improving
          zero-downtime upgrades and replication.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button as="a" href="#projects" className="rounded-2xl">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button as="a" href={`mailto:${site.email}`} variant="secondary" className="rounded-2xl">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
          <Button as="a" href={site.github + "/"} target="_blank" rel="noreferrer" variant="outline" className="rounded-2xl">
            <Github className="mr-2 h-4 w-4" /> Code
          </Button>
          <Button as="a" href={site.linkedin} target="_blank" rel="noreferrer" variant="outline" className="rounded-2xl">
            <Linkedin className="mr-2 h-4 w-4" /> Connect
          </Button>
          <Button as="a" href="#resume" variant="ghost" className="rounded-2xl">
            <FileDown className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 text-sm text-zinc-400">Who I am and what I love to build</p>
        </div>
        <div className="md:col-span-2">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6 px-6 pb-6 text-zinc-300 leading-relaxed">
              I&apos;m a builder who enjoys turning ambiguous problems into production-ready systems. My focus areas are
              cloud-backed apps, data-heavy features, and resilient services. I value ownership, customer obsession,
              and clear communication.
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

function Experience() {
  const iconMap: Record<string, React.ReactNode> = {
    briefcase: <Briefcase className="h-5 w-5" />,
    code: <Code2 className="h-5 w-5" />,
    cpu: <Cpu className="h-5 w-5" />,
  };

  return (
    <section id="experience" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-2 text-sm text-zinc-400">Impact and ownership</p>
        </div>
        <div className="md:col-span-2 grid gap-6">
    {expItems.map((item, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
      <span className="text-indigo-400">{iconMap[item.icon]}</span>
                  {item.role} • <span className="font-normal text-zinc-300">{item.org}</span>
                </CardTitle>
                <span className="text-sm text-zinc-400">{item.time}</span>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="list-disc pl-6 text-zinc-300">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="mb-1">{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  const projects = projectItems;

  return (
    <section id="projects" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-sm text-zinc-400">Selected work</p>
        </div>
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-indigo-400/40 transition">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  {p.title}
                  <ExternalLink className="h-4 w-4 text-zinc-400" />
                </CardTitle>
                <div className="text-xs text-zinc-400">{p.tag}</div>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">{p.desc}</CardContent>
              <div className="px-6 pb-4">
                {p.links.map((l, k) => (
                  <a key={k} href={l.href} className="inline-flex items-center text-sm text-indigo-300 hover:text-indigo-200">
                    {l.label} <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  const iconMap: Record<string, React.ReactNode> = {
    code: <Code2 className="h-5 w-5" />,
    database: <Database className="h-5 w-5" />,
    cpu: <Cpu className="h-5 w-5" />,
    star: <Star className="h-5 w-5" />,
  };
  const groups = skillGroups;

  return (
    <section id="skills" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-sm text-zinc-400">Tools I use to ship</p>
        </div>
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-3">
          {groups.map((g, i) => (
            <Card key={i} className="bg-white/5 border-white/10">
              <CardHeader className="flex flex-row items-center gap-2">
                <span className="text-indigo-400">{iconMap[g.icon as keyof typeof iconMap]}</span>
                <CardTitle className="text-base">{g.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">
                <ul className="space-y-1">
                  {g.items.map((it, k) => (
                    <li key={k} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> {it}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Education() {
  const schools = schoolItems;
  return (
    <section id="education" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <p className="mt-2 text-sm text-zinc-400">Foundations</p>
        </div>
        <div className="md:col-span-2 grid gap-6">
          {schools.map((s, i) => (
            <Card key={i} className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>{s.degree}</span>
                  <span className="text-zinc-400">{s.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Activities() {
  const acts = activityItems;
  return (
    <section id="activities" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">Activities</h2>
          <p className="mt-2 text-sm text-zinc-400">Community & campus</p>
        </div>
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
          {acts.map((a, i) => (
            <Card key={i} className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">{a.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">
                <div className="mb-2 text-zinc-400">{a.org}</div>
                <p>{a.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-sm text-zinc-400">Let&apos;s build something</p>
        </div>
        <div className="md:col-span-2">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6 pb-6">
              <form className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-xs text-zinc-400">Name</label>
                  <input className="w-full rounded-xl bg-zinc-800/60 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-indigo-400" placeholder="Your name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-xs text-zinc-400">Email</label>
                  <input className="w-full rounded-xl bg-zinc-800/60 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-indigo-400" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs text-zinc-400">Message</label>
                  <textarea rows={4} className="w-full rounded-xl bg-zinc-800/60 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-indigo-400" placeholder="What can we build together?" />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <div className="text-sm text-zinc-400">Or email me directly: <a className="underline hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></div>
                  <Button type="button">
                    <Send className="mr-2 h-4 w-4" /> Send
                  </Button>
                </div>
                <div className="sm:col-span-2 flex items-center justify-end">
      <Button as="a" href={site.calendly} target="_blank" rel="noreferrer" variant="outline">
                    Book a call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div id="resume" className="mt-4 text-sm text-zinc-400">
    Prefer a resume? <a className="underline hover:text-white" href={site.github} target="_blank" rel="noreferrer">View code</a> • <a className="underline hover:text-white" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col items-center gap-3 text-sm text-zinc-400">
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} className="hover:text-white inline-flex items-center gap-1"><Mail className="h-4 w-4" /> Email</a>
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-1"><Github className="h-4 w-4" /> GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-1"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
        <div>© {new Date().getFullYear()} Prabakaran Annadurai • Built with React + Tailwind</div>
      </div>
    </footer>
  );
}
