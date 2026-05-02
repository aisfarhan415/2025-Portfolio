"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="px-4 pb-10 md:px-8">
      <div className="ui-fancy mx-auto max-w-6xl rounded-3xl p-6 md:p-10">
        <p className="code-font text-xs uppercase tracking-wider text-blue-700">Available for freelance / full-time</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold text-slate-900 md:text-4xl">Let&apos;s build products that are easy to use, fast to ship, and hard to forget.</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Link href="mailto:aisfarhan.professional@gmail.com" className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            aisfarhan.professional@gmail.com
          </Link>
          <Link href="https://www.linkedin.com/in/aisfarhan/" target="_blank" className="rounded-xl border border-slate-300 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white">
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
