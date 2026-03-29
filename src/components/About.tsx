// About — professional summary section
import { personalInfo } from '../data';
import SectionTitle from './SectionTitle';

// Highlight stat card
const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="border border-slate-800 rounded-lg p-4 text-center">
    <p className="text-2xl font-bold text-cyan-400">{value}</p>
    <p className="text-xs text-slate-500 mt-1">{label}</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="01 / About"
          heading="About Me"
          sub="A brief overview of who I am and what I build."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <div className="space-y-4 text-slate-300 leading-relaxed">
            {personalInfo.about.split('\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}

            <p className="text-slate-300">
              My focus areas include{' '}
              <span className="text-cyan-400 font-medium">REST & GraphQL APIs</span>,{' '}
              <span className="text-cyan-400 font-medium">observability</span>,{' '}
              <span className="text-cyan-400 font-medium">microservice architecture</span> and{' '}
              <span className="text-cyan-400 font-medium">developer tooling</span>. I value clean
              code, good documentation and systems that are easy to reason about.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <Stat value="5+" label="Production-grade projects" />
            <Stat value="3+" label="Years building backends" />
            <Stat value="10+" label="REST APIs shipped" />
            <Stat value="∞" label="Curiosity for new challenges" />
          </div>
        </div>
      </div>
    </section>
  );
}
