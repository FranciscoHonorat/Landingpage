// Skills — categorised skill badges section
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import type { Skill } from '../types';

// Category display config
const categoryConfig: Record<Skill['category'], { label: string; accent: string }> = {
  backend: { label: 'Backend', accent: 'text-cyan-400' },
  database: { label: 'Database & Cache', accent: 'text-emerald-400' },
  devops: { label: 'DevOps', accent: 'text-violet-400' },
  tools: { label: 'Tools', accent: 'text-amber-400' },
};

const categories = Object.keys(categoryConfig) as Skill['category'][];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="03 / Skills"
          heading="Technical Skills"
          sub="Technologies I work with daily to build reliable backend systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => {
            const config = categoryConfig[category];
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${config.accent}`}>
                  {config.label}
                </p>
                <ul className="space-y-2">
                  {categorySkills.map(skill => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 text-slate-300 text-sm bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 hover:border-slate-700 transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${config.accent.replace('text', 'bg')} shrink-0`} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
