// Experience — timeline of professional trajectory
import { experience } from '../data';
import SectionTitle from './SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900/40 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="04 / Experience"
          heading="Experience & Trajectory"
          sub="My path building software — organised, responsible and always learning."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-0 w-px bg-slate-800 hidden sm:block" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <div key={i} className="sm:pl-12 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-900 items-center justify-center hidden sm:flex">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  {/* Period badge */}
                  <span className="inline-block text-xs font-mono text-cyan-500 bg-cyan-950/40 border border-cyan-900 px-2 py-0.5 rounded mb-3">
                    {item.period}
                  </span>

                  <h3 className="text-white font-semibold text-lg">
                    {item.role}
                    <span className="text-slate-500 font-normal"> @ {item.company}</span>
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-cyan-600 mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
