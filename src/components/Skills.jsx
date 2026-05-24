import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-2 w-8 h-0.5 bg-indigo-500 rounded-full" />
      </div>
      <div className="space-y-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{category}</div>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;