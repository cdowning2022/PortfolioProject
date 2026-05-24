import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100">
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
    <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="flex gap-3 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Code ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-3">{project.role}</p>
      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;