import { profile } from "../data";

function Hero() {
  return (
    <section id="top" className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <p className="text-sm text-slate-500 mb-2">Hi, I'm</p>
      <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
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
          href="/Resume_ColeDowning .pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition"
        >
          Resume ↗
        </a>
      </div>
    </section>
  );
}

export default Hero;