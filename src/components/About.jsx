import { about } from "../data";

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mt-2 w-8 h-0.5 bg-indigo-500 rounded-full" />
      </div>
      <p className="text-slate-600 leading-relaxed text-lg mb-6">{about}</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm">FAU — CS Senior</span>
        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm">Graduating Aug 2026</span>
        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm">Lake Mary, FL</span>
        <span className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-700 shadow-sm">Open to SWE / ML roles</span>
      </div>
    </section>
  );
}

export default About;