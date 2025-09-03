import Link from 'next/link';
import { CONTACT, NAV_LINKS, SITE } from '@/lib/constants';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, SquareCode } from 'lucide-react';

export default function Footer() {
  // split quick links into 2 columns, 4 max per column
  const leftLinks = NAV_LINKS.slice(0, 4);
  const rightLinks = NAV_LINKS.slice(4, 8);

  const socials = [
    { label: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin },
    { label: 'GitHub', href: CONTACT.github, icon: Github },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/nikhiljp_skj', icon: Code2 },
    { label: 'LeetCode', href: 'https://leetcode.com/u/nikhiljp/', icon: SquareCode }
  ] as const;

  return (
    <footer className="mt-24 border-t border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & summary */}
          <div className="md:col-span-5">
            <div className="text-xl font-semibold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500">
                {SITE.name}
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              {SITE.description}
            </p>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-3 py-1.5 text-sm text-slate-700 backdrop-blur transition hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick Links
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1">
              <ul className="space-y-2 text-[15px] leading-6">
                {leftLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-slate-700 hover:text-slate-950 transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-[15px] leading-6">
                {rightLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-slate-700 hover:text-slate-950 transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </div>
            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-slate-500" />
                <span className="tracking-normal">{CONTACT.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-slate-500" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-slate-500" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:underline underline-offset-2"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/60" />

        {/* Bottom line */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-6 text-xs text-slate-500 tracking-normal">
          <div>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>Pathanamthitta, Kerala</span>
            <span className="hidden md:inline">•</span>
            <a href="/privacy" className="hover:text-slate-700">Privacy</a>
            <span className="hidden md:inline">•</span>
            <a href="/terms" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
