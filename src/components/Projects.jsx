import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-4">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 hover:border-indigo-400 transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="flex gap-3 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              Code ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-slate-500 mb-3">{project.role}</p>
      <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;