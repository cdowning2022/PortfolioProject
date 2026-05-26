import { profile } from "../data";

function Hero() {
  return (
    <section id="top" className="w-full bg-linear-to-br from-indigo-50 via-slate-50 to-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          Open to SWE, IT &amp; Cybersecurity roles
        </div>
        <p className="text-sm text-slate-500 mb-2">Hi, I'm</p>
        <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
          {profile.tagline}
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition"
          >
            Email
          </a>
          <a
            href="/Resume_ColeDowning.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;