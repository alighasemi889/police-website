import { Shield } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: typeof Shield;
}

export default function PageHeader({ title, subtitle, icon: Icon = Shield }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-brand-700 via-brand-800 to-slate-900 dark:from-brand-800 dark:via-slate-900 dark:to-black">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)',
          backgroundSize: '48px 48px, 36px 36px',
        }}
      />
      <div className="section-container relative py-14 sm:py-20">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20">
            <Icon className="h-7 w-7 text-white" strokeWidth={2} />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">{title}</h1>
            {subtitle && (
              <p className="mt-2 max-w-2xl text-sm leading-7 text-brand-100 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
