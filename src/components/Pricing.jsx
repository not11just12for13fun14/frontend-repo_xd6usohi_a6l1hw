import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      desc: "Try the basics",
      features: [
        "1 resume & 1 cover letter",
        "Basic templates",
        "Export to PDF",
      ],
      cta: "Start free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$12/mo",
      desc: "Best for job seekers",
      features: [
        "Unlimited resumes",
        "ATS templates",
        "Role-tailored bullets",
        "Tone & length controls",
      ],
      cta: "Upgrade",
      popular: true,
    },
    {
      name: "Team",
      price: "$29/mo",
      desc: "For career coaches",
      features: [
        "Multi-seat",
        "Shared templates",
        "Client folders",
        "Priority support",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Simple, transparent pricing</h2>
        <p className="text-blue-100/80 mt-2">Pay monthly. Cancel anytime.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border p-6 ${tier.popular ? "border-blue-500 bg-slate-900/40" : "border-slate-800 bg-slate-900/30"}`}>
              {tier.popular && (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200 border border-blue-500/30">Most popular</div>
              )}
              <h3 className="text-white font-semibold text-lg">{tier.name}</h3>
              <p className="text-3xl font-semibold text-white mt-2">{tier.price}</p>
              <p className="text-blue-100/80 text-sm mt-1">{tier.desc}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-blue-100/90 text-sm">
                    <Check className="h-4 w-4 text-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-medium transition ${tier.popular ? "bg-blue-500 text-white hover:bg-blue-400" : "border border-slate-700 text-blue-100 hover:bg-slate-800"}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
