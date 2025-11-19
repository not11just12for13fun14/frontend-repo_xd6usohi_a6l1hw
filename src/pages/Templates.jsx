import { useState } from "react";
import { Palette, Edit3, Eye } from "lucide-react";

const defaultData = {
  name: "Alex Johnson",
  title: "Product Manager",
  email: "alex.johnson@email.com",
  phone: "(555) 123-4567",
  location: "San Francisco, CA",
  summary:
    "Product leader with 6+ years building B2B SaaS. Shipped features that increased activation by 18% and reduced churn by 12%.",
  experience: [
    {
      company: "Acme Corp",
      role: "Senior Product Manager",
      period: "2021 — Present",
      bullets: [
        "Led cross‑functional squad of 8 to deliver onboarding revamp, boosting 7‑day activation from 42% → 60%.",
        "Owned roadmap and KPI strategy for billing platform used by 50k+ customers.",
      ],
    },
    {
      company: "Nova Labs",
      role: "Product Manager",
      period: "2019 — 2021",
      bullets: [
        "Launched ML‑powered recommendations increasing trial → paid by 9%.",
      ],
    },
  ],
  skills: "Product Strategy, Roadmapping, A/B Testing, SQL, Figma, Jira",
};

const templates = [
  { id: "classic", name: "Classic", accent: "blue", font: "font-serif" },
  { id: "modern", name: "Modern", accent: "emerald", font: "font-sans" },
  { id: "minimal", name: "Minimal", accent: "violet", font: "font-sans" },
];

function SectionLabel({ children }) {
  return <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{children}</div>;
}

function Preview({ data, template, docType, inlineEdit, setData }) {
  const accent = {
    blue: "text-blue-400 border-blue-400",
    emerald: "text-emerald-400 border-emerald-400",
    violet: "text-violet-400 border-violet-400",
  }[template.accent];

  const header = (
    <div className="border-b border-slate-700 pb-3">
      <h1
        contentEditable={inlineEdit}
        suppressContentEditableWarning
        onInput={(e) => inlineEdit && setData((d) => ({ ...d, name: e.currentTarget.textContent || "" }))}
        className={`text-2xl sm:text-3xl font-semibold text-white leading-tight ${template.font}`}
      >
        {data.name}
      </h1>
      <p
        contentEditable={inlineEdit}
        suppressContentEditableWarning
        onInput={(e) => inlineEdit && setData((d) => ({ ...d, title: e.currentTarget.textContent || "" }))}
        className={`text-blue-100/80 ${template.font}`}
      >
        {data.title}
      </p>
      <p className="text-xs text-slate-400 mt-2">
        <span
          contentEditable={inlineEdit}
          suppressContentEditableWarning
          onInput={(e) => inlineEdit && setData((d) => ({ ...d, email: e.currentTarget.textContent || "" }))}
        >
          {data.email}
        </span>{" "}
        •{" "}
        <span
          contentEditable={inlineEdit}
          suppressContentEditableWarning
          onInput={(e) => inlineEdit && setData((d) => ({ ...d, phone: e.currentTarget.textContent || "" }))}
        >
          {data.phone}
        </span>{" "}
        •{" "}
        <span
          contentEditable={inlineEdit}
          suppressContentEditableWarning
          onInput={(e) => inlineEdit && setData((d) => ({ ...d, location: e.currentTarget.textContent || "" }))}
        >
          {data.location}
        </span>
      </p>
    </div>
  );

  const resume = (
    <div className="space-y-6">
      {header}
      <div>
        <h3 className={`text-sm font-semibold ${accent} ${template.font}`}>Summary</h3>
        <p
          contentEditable={inlineEdit}
          suppressContentEditableWarning
          onInput={(e) => inlineEdit && setData((d) => ({ ...d, summary: e.currentTarget.textContent || "" }))}
          className="text-sm text-blue-100/90 mt-1"
        >
          {data.summary}
        </p>
      </div>

      <div>
        <h3 className={`text-sm font-semibold ${accent} ${template.font}`}>Experience</h3>
        <div className="mt-2 space-y-4">
          {data.experience.map((exp, idx) => (
            <div key={idx} className="">
              <div className="flex flex-wrap items-center gap-2 text-white font-medium">
                <span
                  contentEditable={inlineEdit}
                  suppressContentEditableWarning
                  onInput={(e) => inlineEdit && setData((d) => {
                    const experience = [...d.experience];
                    experience[idx] = { ...experience[idx], company: e.currentTarget.textContent || "" };
                    return { ...d, experience };
                  })}
                >
                  {exp.company}
                </span>
                <span className="text-slate-500">—</span>
                <span
                  contentEditable={inlineEdit}
                  suppressContentEditableWarning
                  onInput={(e) => inlineEdit && setData((d) => {
                    const experience = [...d.experience];
                    experience[idx] = { ...experience[idx], role: e.currentTarget.textContent || "" };
                    return { ...d, experience };
                  })}
                  className="text-blue-100/90"
                >
                  {exp.role}
                </span>
                <span className="ml-auto text-xs text-slate-400">{exp.period}</span>
              </div>
              <ul className="list-disc list-outside ml-5 mt-1 space-y-1 text-sm text-blue-100/90">
                {exp.bullets.map((b, bIdx) => (
                  <li
                    key={bIdx}
                    contentEditable={inlineEdit}
                    suppressContentEditableWarning
                    onInput={(e) => inlineEdit && setData((d) => {
                      const experience = [...d.experience];
                      const bullets = [...experience[idx].bullets];
                      bullets[bIdx] = e.currentTarget.textContent || "";
                      experience[idx] = { ...experience[idx], bullets };
                      return { ...d, experience };
                    })}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className={`text-sm font-semibold ${accent} ${template.font}`}>Skills</h3>
        <p
          contentEditable={inlineEdit}
          suppressContentEditableWarning
          onInput={(e) => inlineEdit && setData((d) => ({ ...d, skills: e.currentTarget.textContent || "" }))}
          className="text-sm text-blue-100/90 mt-1"
        >
          {data.skills}
        </p>
      </div>
    </div>
  );

  const coverLetter = (
    <div className="space-y-6">
      {header}
      <div className="text-sm text-blue-100/90 leading-relaxed whitespace-pre-line">
        <p>
          Dear Hiring Manager,
        </p>
        <p className="mt-3" contentEditable={inlineEdit} suppressContentEditableWarning>
          I'm excited to apply for the Product Manager role. {data.summary}
        </p>
        <p className="mt-3" contentEditable={inlineEdit} suppressContentEditableWarning>
          At {data.experience[0].company}, I {data.experience[0].bullets[0].toLowerCase()}
        </p>
        <p className="mt-3" contentEditable={inlineEdit} suppressContentEditableWarning>
          I'd welcome the chance to discuss how I can contribute to your team.
        </p>
        <p className="mt-3">
          Sincerely,
          <br />
          {data.name}
        </p>
      </div>
    </div>
  );

  return (
    <div className={`rounded-xl border border-slate-700 bg-slate-900/50 p-5 ${template.font}`}>
      {docType === "resume" ? resume : coverLetter}
    </div>
  );
}

export default function TemplatesPage() {
  const [docType, setDocType] = useState("resume");
  const [currentTemplate, setCurrentTemplate] = useState(templates[1]);
  const [data, setData] = useState(defaultData);
  const [inlineEdit, setInlineEdit] = useState(true);

  const addExperience = () => {
    setData((d) => ({
      ...d,
      experience: [
        ...d.experience,
        { company: "New Company", role: "Role", period: "Year — Year", bullets: ["Describe impact…"] },
      ],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">Live Templates</h1>
            <p className="text-blue-100/80">Pick a style and edit content in real time. Switch between resume and cover letter.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-lg border border-slate-700 overflow-hidden">
              <button onClick={() => setDocType("resume")} className={`px-3 py-1.5 text-sm ${docType === "resume" ? "bg-blue-500 text-white" : "text-blue-100"}`}>Resume</button>
              <button onClick={() => setDocType("cover")} className={`px-3 py-1.5 text-sm ${docType === "cover" ? "bg-blue-500 text-white" : "text-blue-100"}`}>Cover letter</button>
            </div>
            <button onClick={() => setInlineEdit((v) => !v)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-blue-100 hover:bg-slate-800">
              {inlineEdit ? <Eye className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
              {inlineEdit ? "Preview" : "Edit inline"}
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-4">
            <SectionLabel>Templates</SectionLabel>
            <div className="grid grid-cols-3 gap-2">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentTemplate(t)}
                  className={`rounded-lg border p-3 text-sm hover:bg-slate-800 transition ${
                    currentTemplate.id === t.id ? "border-blue-500 bg-slate-800/60" : "border-slate-700"
                  }`}
                >
                  <Palette className="h-4 w-4 mb-1 text-blue-300 mx-auto" />
                  {t.name}
                </button>
              ))}
            </div>

            <SectionLabel>Content</SectionLabel>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Name" />
                <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Title" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Email" />
                <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="Phone" />
                <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} placeholder="Location" />
              </div>
              <textarea className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5 min-h-[88px]" value={data.summary} onChange={(e) => setData({ ...data, summary: e.target.value })} placeholder="Summary" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <SectionLabel>Experience</SectionLabel>
                  <button onClick={addExperience} className="text-xs text-blue-300 hover:text-white">Add</button>
                </div>
                {data.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2 rounded border border-slate-800 p-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={exp.company} onChange={(e) => {
                        const experience = [...data.experience];
                        experience[idx] = { ...experience[idx], company: e.target.value };
                        setData({ ...data, experience });
                      }} placeholder="Company" />
                      <input className="bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={exp.role} onChange={(e) => {
                        const experience = [...data.experience];
                        experience[idx] = { ...experience[idx], role: e.target.value };
                        setData({ ...data, experience });
                      }} placeholder="Role" />
                    </div>
                    <input className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={exp.period} onChange={(e) => {
                      const experience = [...data.experience];
                      experience[idx] = { ...experience[idx], period: e.target.value };
                      setData({ ...data, experience });
                    }} placeholder="Period" />
                    <div className="space-y-1">
                      {exp.bullets.map((b, bIdx) => (
                        <input key={bIdx} className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={b} onChange={(e) => {
                          const experience = [...data.experience];
                          const bullets = [...experience[idx].bullets];
                          bullets[bIdx] = e.target.value;
                          experience[idx] = { ...experience[idx], bullets };
                          setData({ ...data, experience });
                        }} placeholder={`Bullet ${bIdx + 1}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <input className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5" value={data.skills} onChange={(e) => setData({ ...data, skills: e.target.value })} placeholder="Skills" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <Preview data={data} setData={setData} template={currentTemplate} docType={docType === "resume" ? "resume" : "cover"} inlineEdit={inlineEdit} />
            <div className="mt-3 text-xs text-slate-400">Tip: Toggle inline editing to type directly in the preview.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
