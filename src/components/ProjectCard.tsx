// ProjectCard — individual project card with stack badges and technical decisions
import type { Project } from '../types';

// External link SVG icon
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-900 transition-colors group">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
          {project.title}
        </h3>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="text-slate-500 hover:text-cyan-400 transition-colors shrink-0 mt-0.5"
        >
          <ExternalLinkIcon />
        </a>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Technical decisions */}
      <div className="mb-5">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
          Key decisions
        </p>
        <ul className="space-y-1">
          {project.decisions.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-400 text-xs">
              <span className="text-cyan-600 mt-0.5 shrink-0">▸</span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer to push stack to bottom */}
      <div className="flex-1" />

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
