import { LockKeyhole, Orbit, ShieldCheck } from "lucide-react";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ControlRoomLogin() {
  const session = await auth();
  const allowedEmail = (
    process.env.CONTROL_ROOM_ALLOWED_EMAIL ?? "aisfarhan415@gmail.com"
  ).toLowerCase();

  if (session?.user?.email?.toLowerCase() === allowedEmail) {
    redirect("/control-room");
  }

  return (
    <main className="control-shell flex min-h-screen items-center justify-center px-4 py-12">
      <div className="control-grid" aria-hidden="true" />
      <section className="control-panel relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] p-7 md:p-9">
        <div className="mb-10 flex items-center justify-between">
          <div className="control-icon flex h-12 w-12 items-center justify-center rounded-2xl">
            <Orbit size={24} />
          </div>
          <span className="control-kicker">PRIVATE NODE // 01</span>
        </div>

        <p className="control-kicker text-cyan-300">IDENTITY GATEWAY</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Enter your control room.
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          This console is invisible to portfolio visitors and accepts one
          authorized operator password only.
        </p>

        <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Email allowlist enforced server-side</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <LockKeyhole size={16} className="text-cyan-400" />
            <span>Agent credentials never reach the browser</span>
          </div>
        </div>

        <form
          className="mt-8"
          action={async (formData: FormData) => {
            "use server";
            await signIn("credentials", {
              password: formData.get("password"),
              redirectTo: "/control-room",
            });
          }}
        >
          <label htmlFor="password" className="sr-only">Control room password</label>
          <input id="password" name="password" type="password" required autoComplete="current-password" placeholder="Enter your private password" className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50" />
          <button className="control-primary flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-semibold">
            Unlock control room
          </button>
        </form>

        <Link
          href="/"
          className="mt-5 block text-center text-xs text-slate-500 transition hover:text-slate-300"
        >
          Return to public portfolio
        </Link>
      </section>
    </main>
  );
}
