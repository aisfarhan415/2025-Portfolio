"use client";

import Link from "next/link";
import { useState } from "react";
import { playSound } from "../utils/audio";
import { Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    playSound.playClick();
    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset back to idle after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <footer id="contact" className="px-4 pb-10 md:px-8">
      <div className="ui-fancy mx-auto max-w-6xl rounded-3xl p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="code-font text-xs uppercase tracking-wider text-blue-600">Available for freelance / full-time</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-4xl leading-tight">
                Let&apos;s build products that are easy to use, fast to ship, and hard to forget.
              </h2>
              <p className="mt-4 text-sm text-slate-500 max-w-md">
                Have a project in mind or just want to chat? Send me a message using the form, or reach out directly via email or LinkedIn.
              </p>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link 
                href="mailto:aisfarhan.professional@gmail.com" 
                onMouseEnter={() => playSound.playHover()}
                onClick={() => playSound.playClick()}
                className="inline-flex justify-center items-center rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-3.5 text-sm font-semibold text-white transition text-center"
              >
                aisfarhan.professional@gmail.com
              </Link>
              <Link 
                href="https://www.linkedin.com/in/aisfarhan/" 
                target="_blank" 
                onMouseEnter={() => playSound.playHover()}
                onClick={() => playSound.playClick()}
                className="inline-flex justify-center items-center rounded-xl border border-slate-300 bg-white/40 hover:bg-white/70 px-5 py-3.5 text-sm font-semibold text-slate-700 transition text-center"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
          
          {/* Right Column: Neomorphic Contact Form */}
          <div className="lg:col-span-6">
            <div className="ui-surface rounded-2xl p-5 md:p-7 space-y-4">
              <p className="code-font text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-300/40 pb-2">
                SEND_DIRECT_MESSAGE // FORM_GATEWAY
              </p>
              
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                  <h3 className="font-bold text-slate-900 text-lg">Message Transmission Complete</h3>
                  <p className="text-xs text-slate-500 code-font">STATUS: 200 OK // SENT_SUCCESS</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 code-font block">Sender Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onMouseEnter={() => playSound.playHover()}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="ui-pressed w-full bg-transparent rounded-xl px-4 py-2.5 text-xs text-slate-700 outline-none transition focus:border-blue-600/40 focus:ring-1 focus:ring-blue-600/20"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 code-font block">Sender Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onMouseEnter={() => playSound.playHover()}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="ui-pressed w-full bg-transparent rounded-xl px-4 py-2.5 text-xs text-slate-700 outline-none transition focus:border-blue-600/40 focus:ring-1 focus:ring-blue-600/20"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 code-font block">Payload Message</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Enter your message..."
                      value={formData.message}
                      onMouseEnter={() => playSound.playHover()}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="ui-pressed w-full bg-transparent rounded-xl px-4 py-2.5 text-xs text-slate-700 outline-none transition focus:border-blue-600/40 focus:ring-1 focus:ring-blue-600/20 resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === "sending"}
                    onMouseEnter={() => playSound.playHover()}
                    className="ui-surface w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold text-slate-800 hover:bg-slate-200/30 active:shadow-inner disabled:opacity-50 transition uppercase tracking-wider"
                  >
                    {status === "sending" ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
