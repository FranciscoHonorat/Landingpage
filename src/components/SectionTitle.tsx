// SectionTitle — reusable heading block for each section
interface Props {
  label: string;     // small uppercase label (e.g. "01 / About")
  heading: string;   // main section title
  sub?: string;      // optional subtitle
}

export default function SectionTitle({ label, heading, sub }: Props) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-2">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{heading}</h2>
      {sub && <p className="text-slate-400 max-w-xl">{sub}</p>}
    </div>
  );
}
