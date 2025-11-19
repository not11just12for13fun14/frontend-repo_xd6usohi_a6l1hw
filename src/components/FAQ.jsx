export default function FAQ() {
  const faqs = [
    {
      q: "Will this pass ATS?",
      a: "Yes. Our templates are clean, keyword-aware and built to parse correctly in applicant tracking systems.",
    },
    {
      q: "Can I edit the AI output?",
      a: "Absolutely. You can tweak tone, length and content at any time before exporting.",
    },
    { q: "Do you store my data?", a: "Your documents are private by default and you control sharing." },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">FAQs</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-white font-medium">{f.q}</h3>
              <p className="text-blue-100/85 mt-1.5 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
