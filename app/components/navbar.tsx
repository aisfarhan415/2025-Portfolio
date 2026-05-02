"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8">
      <nav className="ui-surface mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <Link href="/#hero" className="code-font text-sm font-semibold text-blue-700">aisfarhan.dev</Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700">
              {item.name}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden">
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {open && (
        <div className="ui-surface mx-auto mt-2 max-w-6xl rounded-xl p-2 md:hidden">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
