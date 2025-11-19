import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_20px] shadow-blue-500/60" />
          ResuCover
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-blue-100/90 text-sm">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#" className="rounded-lg px-3 py-1.5 bg-blue-500 text-white hover:bg-blue-400">Sign in</a>
        </nav>
        <button className="sm:hidden text-blue-100" onClick={() => setOpen((v) => !v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-slate-800 px-6 pb-4">
          <div className="flex flex-col gap-2 text-blue-100/90 text-sm pt-2">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#" className="rounded-lg px-3 py-1.5 bg-blue-500 text-white w-max">Sign in</a>
          </div>
        </div>
      )}
    </header>
  );
}
