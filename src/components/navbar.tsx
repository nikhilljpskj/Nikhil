'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from './ui/button';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-white/65 backdrop-blur border-b border-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5 min-h-[72px]">
        <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500">
            NP
          </span>
        </Link>

        <ul className="hidden md:flex gap-7">
          {NAV_LINKS.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`text-sm transition hover:text-slate-950 ${
                    active ? 'text-slate-950' : 'text-slate-600'
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="primary" size="md">Let’s Build Together</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Link href="/contact" className="text-base text-slate-700 underline">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
