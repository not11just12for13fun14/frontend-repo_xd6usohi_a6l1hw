import { Upload, Palette, Sparkles, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: "Import your experience", desc: "Upload an old resume or paste your background. We'll extract the essentials." },
    { icon: Palette, title: "Pick a template", desc: "Choose clean, modern designs recruiters love." },
    { icon: Sparkles, title: "Generate with AI", desc: "Get tailored bullets and a matching cover letter for the role." },
    { icon: Download, title: "Export & apply", desc: "Download as PDF or share a link. Edit anytime." },
  ];

  return (
    <section id="how" className="py-16 sm:py-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">How it works</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">{idx + 1}</span>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
