// Projects — featured projects grid section
import { useState } from 'react';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Show only featured projects initially
  const displayed = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="bg-slate-900/40 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="02 / Projects"
          heading="Featured Projects"
          sub="A selection of backend systems I have designed and built end-to-end."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Toggle to show/hide non-featured projects */}
        {!showAll && projects.some(p => !p.featured) && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-800 px-5 py-2 rounded-lg transition-colors"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
