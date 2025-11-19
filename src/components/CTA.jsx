export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-950" id="cta">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Ready to land more interviews?</h2>
        <p className="text-blue-100/85 mt-2">Start free, upgrade when you love it. No credit card needed.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#pricing" className="rounded-xl bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-400 transition">Create my resume</a>
          <a href="#how" className="rounded-xl border border-slate-700 px-6 py-3 text-blue-100 hover:bg-slate-800/60 transition">See it in action</a>
        </div>
      </div>
    </section>
  );
}
