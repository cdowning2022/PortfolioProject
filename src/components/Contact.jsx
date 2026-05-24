import { profile } from "../data";

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <div className="mt-2 w-8 h-0.5 bg-indigo-500 rounded-full" />
      </div>
      <p className="text-slate-600 mb-6 leading-relaxed">
        I'm looking for entry-level software engineering and ML roles. If you think we'd be a good fit, I'd love to hear from you.
      </p>
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-slate-500 w-20 inline-block">Email</span>
          <a href={`mailto:${profile.email}`} className="text-indigo-600 hover:underline">
            {profile.email}
          </a>
        </div>
        <div>
          <span className="text-slate-500 w-20 inline-block">GitHub</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
            github.com/cdowning2022
          </a>
        </div>
        <div>
          <span className="text-slate-500 w-20 inline-block">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
            linkedin.com/in/cole-downing
          </a>
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-12">
        Built with React and Tailwind. © 2026 Cole Downing.
      </p>
    </section>
  );
}

export default Contact;