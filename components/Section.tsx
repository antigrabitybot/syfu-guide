'use client';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 section-bg ${className}`}>
      <div className="mx-auto max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="glow-text">{title}</span>
          </h2>
          {subtitle && <p className="text-lg text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {/* コンテンツ */}
        {children}
      </div>
    </section>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-glass group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neon-cyan mb-3">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      {/* ステップ番号 */}
      <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center font-orbitron font-bold text-lg text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        {number}
      </div>

      {/* カード */}
      <div className="card-glass ml-4 pt-8">
        <h3 className="text-lg font-bold text-neon-cyan mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}
