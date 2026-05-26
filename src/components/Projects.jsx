import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-2 w-8 h-0.5 bg-indigo-500 rounded-full" />
      </div>
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
    <div className="relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl" />
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="flex gap-3 text-sm">
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
      <p className="text-slate-600 leading-relaxed">{project.description}</p>
    </div>
  );
}

export default Projects;