"use client";

import {
  Activity,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Clock3,
  Cpu,
  HardDrive,
  MemoryStick,
  Orbit,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { useMemo, useState } from "react";

const agents = [
  {
    id: "antigravity",
    name: "Antigravity",
    role: "Technical Operator",
    model: "Gemini 3.7 Flash",
    status: "Standby",
    accent: "cyan",
    icon: Orbit,
    note: "Workspace-isolated coding and investigation agent.",
  },
  {
    id: "watchdog",
    name: "Groq Watchdog",
    role: "Read-only Auditor",
    model: "GPT-OSS 20B",
    status: "Awaiting gateway",
    accent: "emerald",
    icon: ShieldCheck,
    note: "Reviews health summaries and flags unusual behavior.",
  },
  {
    id: "manager",
    name: "AI Manager",
    role: "Task Router",
    model: "Policy Engine",
    status: "Design mode",
    accent: "violet",
    icon: Workflow,
    note: "Routes requests while preserving approval boundaries.",
  },
] as const;

const telemetry = [
  { label: "CPU", value: "—", icon: Cpu },
  { label: "Memory", value: "—", icon: MemoryStick },
  { label: "Storage", value: "—", icon: HardDrive },
  { label: "Uptime", value: "—", icon: Clock3 },
];

export default function ControlRoomClient({ email }: { email: string }) {
  const [activeAgent, setActiveAgent] = useState<(typeof agents)[number]["id"]>(
    "antigravity",
  );
  const [draft, setDraft] = useState("");
  const selected = useMemo(
    () => agents.find((agent) => agent.id === activeAgent) ?? agents[0],
    [activeAgent],
  );

  return (
    <div className="control-shell min-h-screen text-slate-100">
      <div className="control-grid" aria-hidden="true" />
      <header className="control-topbar relative z-20 border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="control-icon flex h-10 w-10 items-center justify-center rounded-xl">
              <Orbit size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Ais Control Room</p>
              <p className="control-kicker mt-0.5">PERSONAL AGENT NETWORK</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] text-emerald-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              IDENTITY VERIFIED
            </span>
            <div className="hidden text-right md:block">
              <p className="text-xs text-slate-300">{email}</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-slate-600">
                sole operator
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid max-w-[1500px] gap-4 px-4 py-4 md:px-8 md:py-6 xl:grid-cols-[280px_minmax(0,1fr)_310px]">
        <aside className="control-panel rounded-3xl p-3">
          <div className="flex items-center justify-between px-3 pb-3 pt-2">
            <span className="control-kicker">AGENT ROSTER</span>
            <span className="rounded-md bg-white/5 px-2 py-1 text-[9px] text-slate-500">
              03 NODES
            </span>
          </div>

          <div className="space-y-2">
            {agents.map((agent) => {
              const Icon = agent.icon;
              const active = agent.id === activeAgent;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id)}
                  className={`control-agent w-full rounded-2xl p-3 text-left ${
                    active ? "control-agent-active" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`agent-orb agent-orb-${agent.accent}`}>
                      <Icon size={17} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-100">
                        {agent.name}
                      </p>
                      <p className="mt-1 truncate text-[10px] text-slate-500">
                        {agent.role}
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-slate-600" />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2.5">
                    <span className="text-[9px] text-slate-500">{agent.model}</span>
                    <span className="flex items-center gap-1 text-[9px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      {agent.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 rounded-2xl border border-dashed border-white/10 p-4">
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
              <Sparkles size={13} className="text-violet-400" />
              Agent gateway pending
            </div>
            <p className="mt-2 text-[10px] leading-5 text-slate-600">
              Commands remain disabled until the private server bridge is
              signed and verified.
            </p>
          </div>
        </aside>

        <section className="control-panel flex min-h-[650px] flex-col overflow-hidden rounded-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className={`agent-orb agent-orb-${selected.accent}`}>
                <selected.icon size={18} />
              </div>
              <div>
                <h1 className="text-sm font-semibold">{selected.name}</h1>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  {selected.note}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="control-chip">
                <CircleGauge size={11} /> Read-only first
              </span>
              <span className="control-chip hidden sm:flex">
                <ShieldCheck size={11} /> Approval gate
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <div className="relative">
              <div className="control-pulse" />
              <div className={`agent-hero agent-orb-${selected.accent}`}>
                <selected.icon size={30} />
              </div>
            </div>
            <p className="control-kicker mt-8">SECURE CHANNEL NOT CONNECTED</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-white">
              The interface is ready. The agent bridge stays closed.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
              This deliberate safe state prevents the public Vercel deployment
              from receiving shell access. Connect the signed gateway only
              after server policies and audit logging are active.
            </p>
            <div className="mt-7 grid w-full max-w-lg gap-2 sm:grid-cols-3">
              {["Identity", "Policy", "Workspace"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3"
                >
                  <CheckCircle2 size={13} className="mx-auto text-emerald-400" />
                  <p className="mt-2 text-[10px] text-slate-400">{label} ready</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.07] p-4 md:p-5">
            <div className="control-command flex items-end gap-3 rounded-2xl p-2.5 pl-4">
              <TerminalSquare size={17} className="mb-2 text-cyan-400" />
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                rows={1}
                placeholder="Draft a task… gateway connection required to send"
                className="min-h-[38px] flex-1 resize-none bg-transparent py-2 text-xs text-slate-300 outline-none placeholder:text-slate-600"
              />
              <button
                disabled
                title="The signed agent gateway is not connected yet"
                className="rounded-xl bg-white/5 px-4 py-2.5 text-[10px] font-semibold text-slate-600"
              >
                SEND
              </button>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <section className="control-panel rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <span className="control-kicker">SERVER TELEMETRY</span>
              <Radio size={13} className="text-slate-600" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {telemetry.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3"
                  >
                    <Icon size={14} className="text-cyan-400" />
                    <p className="mt-4 text-lg font-semibold text-slate-300">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-slate-600">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[9px] leading-4 text-slate-600">
              Live metrics will appear after the read-only collector is paired.
            </p>
          </section>

          <section className="control-panel rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <span className="control-kicker">ACTIVITY STREAM</span>
              <Activity size={13} className="text-violet-400" />
            </div>
            <div className="mt-5 space-y-5">
              {[
                ["Identity verified", "Google OAuth", "now"],
                ["Workspace isolated", "Antigravity", "configured"],
                ["Gateway connection", "System", "pending"],
              ].map(([title, source, time], index) => (
                <div key={title} className="relative flex gap-3">
                  {index < 2 && (
                    <span className="absolute left-[5px] top-4 h-8 w-px bg-white/[0.07]" />
                  )}
                  <span
                    className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full border ${
                      index === 2
                        ? "border-amber-400/40 bg-amber-400/20"
                        : "border-emerald-400/40 bg-emerald-400/20"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium text-slate-300">{title}</p>
                    <div className="mt-1 flex justify-between gap-2 text-[9px] text-slate-600">
                      <span>{source}</span>
                      <span>{time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="control-panel rounded-3xl p-4">
            <div className="flex items-center gap-2">
              <Server size={14} className="text-emerald-400" />
              <span className="control-kicker">SECURITY POSTURE</span>
            </div>
            <div className="mt-4 space-y-2 text-[10px]">
              <div className="flex justify-between text-slate-500">
                <span>Browser shell</span>
                <span className="text-emerald-400">Blocked</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Root access</span>
                <span className="text-emerald-400">Blocked</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Human approval</span>
                <span className="text-cyan-400">Required</span>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
