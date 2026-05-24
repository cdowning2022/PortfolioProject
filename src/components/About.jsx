import { about } from "../data";

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="text-2xl font-semibold mb-6">About</h2>
      <p className="text-slate-600 leading-relaxed text-lg">{about}</p>
    </section>
  );
}

export default About;