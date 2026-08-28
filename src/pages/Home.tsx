import { Link } from 'react-router-dom';
import {
  Siren,
  ShieldCheck,
  ArrowLeft,
  Phone,
  Clock,
  Lock,
  ChevronLeft,
} from 'lucide-react';
import { services, news, emergencyNumber } from '@/data/content';
import { Newspaper } from 'lucide-react';

const stats = [
  { label: 'پاسخگویی فوری', value: '۲۴/۷', icon: Clock },
  { label: 'آمادگی عملیاتی', value: '٪۱۰۰', icon: ShieldCheck },
  { label: 'ارتباط امن', value: 'رمزنگاری‌شده', icon: Lock },
];

const trustFeatures = [
  'ثبت آنلاین و امن گزارش‌های اضطراری',
  'پیگیری وضعیت پرونده‌های قضایی',
  'اطلاع‌رسانی فوری اخبار و هشدارها',
  'خدمات انتظامی بدون مراجعه حضوری',
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-brand-800 via-brand-900 to-slate-950">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 25%, white 1.5px, transparent 1.5px), radial-gradient(circle at 75% 65%, white 1.5px, transparent 1.5px)',
            backgroundSize: '52px 52px, 40px 40px',
          }}
        />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden h-96 w-96 rounded-full bg-brand-600/20 blur-3xl lg:block" />
        <div className="absolute -right-24 bottom-0 hidden h-72 w-72 rounded-full bg-accent-500/10 blur-3xl lg:block" />

        <div className="section-container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-100 ring-1 ring-white/20 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              امنیت، اعتماد، پاسخگویی فوری
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              پلیس ایران در خدمت
              <br />
              <span className="bg-gradient-to-l from-brand-300 to-white bg-clip-text text-transparent">
                امنیت شهروندان
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-100/90">
              سامانه‌ی یکپارچه فرماندهی انتظامی برای گزارش حوادث، دریافت خدمات آنلاین و
              آگاهی‌بخشی عمومی. ثبت گزارش شما به‌صورت امن و محرمانه انجام می‌شود.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/report" className="btn-danger">
                <Siren className="h-5 w-5" />
                ثبت گزارش اضطراری
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                مشاهده خدمات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-brand-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency card */}
          <div className="animate-fade-in-up lg:justify-self-end" style={{ animationDelay: '0.15s' }}>
            <div className="card relative w-full max-w-sm overflow-hidden bg-white/95 p-6 backdrop-blur dark:bg-slate-900/90">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-red-500/10" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="section-label">
                    <Siren className="h-3.5 w-3.5" />
                    اورژانس
                  </span>
                  <span className="text-xs font-medium text-slate-400">۲۴ ساعته</span>
                </div>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">شماره اضطراری پلیس</p>
                <a
                  href="tel:110"
                  className="mt-1 flex items-center gap-3 text-5xl font-extrabold text-red-600 dark:text-red-500 transition-transform hover:scale-105"
                  dir="ltr"
                >
                  <Phone className="h-8 w-8 animate-pulse-ring rounded-full" />
                  {emergencyNumber}
                </a>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <s.icon className="mx-auto h-5 w-5 text-brand-600 dark:text-brand-400" />
                      <p className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section className="section-container py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="section-label">
              <ShieldCheck className="h-3.5 w-3.5" />
              خدمات
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
              خدمات سریع انتظامی
            </h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400">
            همه خدمات ←
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <article
              key={s.title}
              className="card group p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/5 hover:border-brand-300 dark:hover:border-brand-800 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/50 dark:text-brand-400">
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Latest news */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
        <div className="section-container py-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="section-label">
                <Newspaper className="h-3.5 w-3.5" />
                اخبار
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                آخرین اخبار و گزارش‌ها
              </h2>
            </div>
            <Link to="/news" className="text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400">
              همه اخبار ←
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 3).map((n) => (
              <article
                key={n.id}
                className="card group overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={n.imageUrl}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-700 backdrop-blur dark:bg-slate-900/90 dark:text-brand-300">
                    {n.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-400">{n.date}</p>
                  <h3 className="mt-2 text-base font-bold leading-7 text-slate-900 dark:text-white">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400 line-clamp-2">
                    {n.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-8 sm:p-12 lg:p-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                به امنیت محله‌ی خود کمک کنید
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-brand-100">
                هر حادثه‌ای را فوری و محرمانه گزارش کنید. گزارش شما در سریع‌ترین زمان ممکن
                توسط نیروهای انتظامی بررسی می‌شود.
              </p>
            </div>
            <Link
              to="/report"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-95"
            >
              <Siren className="h-5 w-5" />
              ثبت گزارش
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
