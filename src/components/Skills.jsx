import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="text-sm font-medium text-slate-500 mb-2">{category}</div>
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