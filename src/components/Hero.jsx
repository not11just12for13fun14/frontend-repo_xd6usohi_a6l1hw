import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient + glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[1100px] rounded-full blur-3xl bg-blue-500/20" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-200 text-xs mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>AI-powered resumes & cover letters</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
          Land your next job with a standout resume and cover letter
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
          Create tailored, ATS-friendly documents in minutes. Upload your experience, pick a template, and our AI crafts professional results employers love.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/25 hover:bg-blue-400 transition">
            Get started free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#how" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-slate-700 text-blue-100 hover:bg-slate-800/60 transition">
            See how it works
          </a>
        </div>

        {/* preview card */}
        <div className="mt-12 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4 sm:p-6 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-4">
              <div className="h-4 w-24 bg-slate-700 rounded mb-3" />
              <div className="space-y-2">
                <div className="h-3 bg-slate-700/80 rounded" />
                <div className="h-3 bg-slate-700/80 rounded w-10/12" />
                <div className="h-3 bg-slate-700/80 rounded w-8/12" />
              </div>
              <div className="mt-4 h-40 rounded-lg border border-dashed border-slate-700 flex items-center justify-center text-slate-400 text-sm">
                Resume preview
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-4">
              <div className="h-4 w-28 bg-slate-700 rounded mb-3" />
              <div className="space-y-2">
                <div className="h-3 bg-slate-700/80 rounded" />
                <div className="h-3 bg-slate-700/80 rounded w-9/12" />
              </div>
              <div className="mt-4 h-40 rounded-lg border border-dashed border-slate-700 flex items-center justify-center text-slate-400 text-sm">
                Cover letter preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
