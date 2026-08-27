import Link from "next/link";
import { ShieldX } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <main className="control-shell flex min-h-screen items-center justify-center px-4">
      <div className="control-grid" aria-hidden="true" />
      <section className="control-panel relative z-10 max-w-md rounded-[2rem] p-9 text-center">
        <ShieldX className="mx-auto text-rose-400" size={38} />
        <h1 className="mt-5 text-2xl font-semibold text-white">Access denied</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          This Google account is not authorized to enter the control room.
        </p>
        <Link
          href="/control-room/login"
          className="control-primary mt-7 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
        >
          Try another account
        </Link>
      </section>
    </main>
  );
}

