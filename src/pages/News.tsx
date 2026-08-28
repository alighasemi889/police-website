import { useState } from 'react';
import { Newspaper, Calendar, Tag, Search } from 'lucide-react';
import { news } from '@/data/content';
import PageHeader from '@/components/PageHeader';

const categories = ['همه', 'اخبار جرم', 'فناوری', 'اجتماعی', 'گزارش'];

export default function News() {
  const [filter, setFilter] = useState('همه');
  const [query, setQuery] = useState('');

  const filtered = news.filter(
    (n) =>
      (filter === 'همه' || n.category === filter) &&
      (query === '' || n.title.includes(query) || n.excerpt.includes(query))
  );

  return (
    <div>
      <PageHeader
        title="اخبار و اطلاعیه‌ها"
        subtitle="آخرین اخبار، گزارش‌ها و اطلاعیه‌های فرماندهی انتظامی کشور."
        icon={Newspaper}
      />

      <section className="section-container py-12 sm:py-16">
        {/* Filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                  filter === c
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی خبر..."
              className="input-field pr-10"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((n, i) => (
              <article
                key={n.id}
                className="card group overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/5 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={n.imageUrl}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-700 backdrop-blur dark:bg-slate-900/90 dark:text-brand-300">
                    <Tag className="h-3 w-3" />
                    {n.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {n.date}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-7 text-slate-900 dark:text-white">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {n.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-400">خبری یافت نشد.</p>
          </div>
        )}
      </section>
    </div>
  );
}
