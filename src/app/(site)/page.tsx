import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import SocialChips from '@/components/ui/social-chips';
import Link from 'next/link';
import { CONTACT } from '@/lib/constants';
import { STACK } from '@/content/skills';
import TechBadge from '@/components/ui/tech-badge';
import { Card, CardBody } from '@/components/ui/card';
import { ServerCog, Boxes, Rocket, Users } from 'lucide-react';
import ProjectCard from '@/components/ui/project-card';
import { PROJECTS } from '@/content/projects';
import ContactForm from '@/components/contact-form';
import CompanyMarquee from '@/components/ui/company-marquee';
import { CLIENTS } from '@/content/clients';
import Image from 'next/image';
import RoleTicker from '@/components/ui/role-ticker';
import RoleTyper from '@/components/ui/role-typer';
import { FileDown, Linkedin, Github, Mail, Phone } from 'lucide-react';


export default function HomePage() {
  const notable = PROJECTS.slice(0, 3);

  return (
    <Container>
      {/* HERO */}
      <Section
        eyebrow="Hello, I’m Nikhil"
        eyebrowClassName="text-base md:text-lg font-semibold tracking-tight text-slate-700"
        title="Tech Strategist & Senior Full-Stack Engineer"
        titleClassName="text-4xl md:text-5xl font-bold leading-tight"
        description={
          <>
            <p className="leading-8">
              I help teams ship reliable systems faster with clean architecture, sharp tooling, and pragmatic mentoring.
              Strategy meets engineering craft across <strong>React/Next</strong>, <strong>Node/Nest</strong>,{' '}
              <strong>Python/Django</strong>, and <strong>PHP/Laravel</strong>.
            </p>

            {/* Letter-by-letter slideshow (bigger, bold; single gradient per word: blue/red alternates) */}
            <div className="mt-5">
              <RoleTyper
                roles={['Full-Stack Developer', 'System Architect', 'Senior SDE']}
                className="text-2xl md:text-3xl"
              />
            </div>

            {/* ↓ Buttons + Social chips directly below the ticker */}
            <div className="mt-6 flex flex-col items-start gap-5">
              {/* Row 1: social chips */}
              <div className="w-full">
                      <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                          <a
                          href="/cv/Nikhil_Prakash.pdf"
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                      hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                          aria-label="Download CV"
                          >
                          <FileDown size={14} className="text-slate-600" />
                          <span>CV</span>
                          </a>
                      </span>

                      <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                          <a
                          href={CONTACT.linkedin}
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                      hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                          aria-label="LinkedIn"
                          >
                          <Linkedin size={14} className="text-slate-600" />
                          <span>LinkedIn</span>
                          </a>
                      </span>

                      <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                          <a
                          href={CONTACT.github}
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                      hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                          aria-label="GitHub"
                          >
                          <Github size={14} className="text-slate-600" />
                          <span>GitHub</span>
                          </a>
                      </span>

                      <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                          <a
                          href={`mailto:${CONTACT.email}`}
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                      hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                          aria-label="Email"
                          >
                          <Mail size={14} className="text-slate-600" />
                          <span>Email</span>
                          </a>
                      </span>

                      <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                          <a
                          href={`tel:${CONTACT.phone}`}
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                      hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                          aria-label="Phone"
                          >
                          <Phone size={14} className="text-slate-600" />
                          <span>Mobile</span>
                          </a>
                      </span>
              </div>

              {/* Row 2: buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/projects">
                  <Button variant="primary">View Projects</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Know more</Button>
                </Link>
              </div>
            </div>

          </>
        }
        side={
          <div className="mx-auto mb-8 w-full max-w-sm">
            {/* Fully visible image: no crop, no hover */}
            <div className="relative h-80 w-full md:h-96 lg:h-[28rem]">
              <Image
                src="/self/nikhil-bg.png"
                alt="Nikhil Prakash — illustration"
                fill
                priority
                sizes="(min-width:1024px) 26rem, (min-width:768px) 20rem, 90vw"
                className="rounded-3xl object-contain"
              />
            </div>
          </div>
        }
      >
      </Section>

      {/* COMPANIES MARQUEE */}
      <Section
        eyebrow="Trusted by"
        title="Companies & teams"
        description="Grayscale by default; hover to reveal subtle color."
      >
        <div className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <CompanyMarquee items={CLIENTS} itemsPerView={6} speed={26} gap={28} />
        </div>
      </Section>

      {/* SERVICES / WHAT I DO */}
      <Section
        eyebrow="What I do"
        title="Services"
        description="Clear value: I ship, optimize, and enable teams."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Full-Stack Product Engineering',
              icon: Rocket,
              desc: 'React/Next, Node, PHP/Laravel with clean architectures and CI.',
              bullets: ['Feature velocity', 'DX improvements', 'Maintainability'],
            },
            {
              title: 'Architecture & Scalability',
              icon: ServerCog,
              desc: 'CI/CD, environments, cloud basics, and observability.',
              bullets: ['Resilience', 'Faster releases', 'Fewer incidents'],
            },
            {
              title: 'Growth & Performance',
              icon: Boxes,
              desc: 'Audits, profiling, and targeted optimizations.',
              bullets: ['Faster loads', 'Lower costs', 'Happier users'],
            },
            {
              title: 'Team Enablement & Training',
              icon: Users,
              desc: 'Workshops and mentoring to raise the bar across the team.',
              bullets: ['Onboarding', 'Standards', 'Confidence'],
            },
          ].map((s) => (
            <Card key={s.title}>
              <CardBody>
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-gradient-to-r from-indigo-600/10 to-sky-500/10 p-2">
                    <s.icon className="text-slate-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-slate-600">{s.desc}</p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                      {s.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section
        eyebrow="Toolbox"
        title="Tech stack"
        description="Frameworks, languages, and tooling I use day-to-day."
      >
        <div className="grid gap-6">
          <StackGroup title="Frontend">
            {STACK.frontend.map((t) => <TechBadge key={t.name} name={t.name} logo={t.logo} />)}
          </StackGroup>
          <StackGroup title="Backend & Frameworks">
            {STACK.backend.map((t) => <TechBadge key={t.name} name={t.name} logo={t.logo} />)}
          </StackGroup>
          <StackGroup title="Languages">
            {STACK.languages.map((t) => <TechBadge key={t.name} name={t.name} logo={t.logo} />)}
          </StackGroup>
          <StackGroup title="Databases & Caches">
            {STACK.data.map((t) => <TechBadge key={t.name} name={t.name} logo={t.logo} />)}
          </StackGroup>
          <StackGroup title="DevOps • Hosting • Tooling">
            {STACK.devops.map((t) => <TechBadge key={t.name} name={t.name} logo={t.logo} />)}
          </StackGroup>
          <StackGroup title="Messaging & Email">
            {STACK.messaging.map((t) => <TechBadge key={t.name} name={t.name} logo={t.logo} />)}
          </StackGroup>
        </div>
      </Section>

      {/* NOTABLE PROJECTS */}
      <Section
        eyebrow="Selected work"
        title="Notable projects"
        description="A few highlights. Many more under the hood."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notable.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
        <div className="mt-6">
          <Link href="/projects"><Button variant="outline">More projects</Button></Link>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section
        eyebrow="Let’s talk"
        title="Contact"
        description={
          <>
            <p>Use the form or reach me directly — powered by EmailJS, no server required.</p>
            <p>
              Prefer email?{' '}
              <a href={`mailto:${CONTACT.email}`} className="underline underline-offset-2 hover:text-slate-900">
                {CONTACT.email}
              </a>
            </p>
          </>
        }
      >
        <ContactForm />
      </Section>
    </Container>
  );
}

/** Local helper: glass + gradient frame group for stack badges */
function StackGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-r from-indigo-600/15 via-blue-600/15 to-sky-500/15 p-[1.5px]">
      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 backdrop-blur shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">{title}</div>
          <div className="h-px w-24 bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-sky-400/30" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
}
