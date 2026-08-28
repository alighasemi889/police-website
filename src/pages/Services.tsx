import { CheckCircle2 } from 'lucide-react';
import { services } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import { LayoutGrid } from 'lucide-react';

const steps = [
  { step: '۱', title: 'ثبت درخواست', desc: 'درخواست خود را به‌صورت آنلاین ثبت کنید.' },
  { step: '۲', title: 'بررسی کارشناس', desc: 'درخواست توسط کارشناسان انتظامی بررسی می‌شود.' },
  { step: '۳', title: 'دریافت نتیجه', desc: 'نتیجه به‌صورت امن و آنلاین اطلاع داده می‌شود.' },
];

export default function Services() {
  return (
    <div>
      <PageHeader
        title="خدمات انتظامی"
        subtitle="فهرست کامل خدمات آنلاین فرماندهی انتظامی برای شهروندان — بدون نیاز به مراجعه حضوری."
        icon={LayoutGrid}
      />

      <section className="section-container py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card group p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/5 hover:border-brand-300 dark:hover:border-brand-800 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/50 dark:text-brand-400">
                  <s.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <CheckCircle2 className="h-5 w-5 text-emerald-500/70" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
        <div className="section-container py-16 sm:py-20">
          <div className="text-center">
            <span className="section-label">روند خدمات</span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
              چگونه خدمات دریافت کنیم؟
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="relative card p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-xl font-extrabold text-white shadow-lg shadow-brand-600/30">
                  {s.step}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
