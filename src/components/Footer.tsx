// Footer — minimal footer with copyright
import { personalInfo } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-600 text-xs">
        <p>
          © {year}{' '}
          <span className="text-slate-500">{personalInfo.name}</span>. Built with React + Vite + Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-500 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
