import { Wand2, FileText, Bot, CheckCircle2 } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Wand2,
      title: "Tailored in seconds",
      desc: "Answer a few questions and let AI turn your experience into polished content.",
    },
    {
      icon: FileText,
      title: "ATS-optimized",
      desc: "Templates built to pass screening and highlight your strengths.",
    },
    {
      icon: Bot,
      title: "Smart suggestions",
      desc: "Role-specific bullet points and tone control to match each application.",
    },
    {
      icon: CheckCircle2,
      title: "One-click export",
      desc: "Download PDF or share a link instantly. Always editable.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Why candidates choose us</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <Icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
