import { Phone, Mail, MapPin, Send, Siren, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const contactInfo = [
  { icon: Siren, label: 'اورژانس پلیس', value: '۱۱۰', desc: '۲۴ ساعته' },
  { icon: Phone, label: 'مرکز تماس', value: '۰۲۱ - ۸۸۷۷۶۶۵۵', desc: '۸ تا ۲۰' },
  { icon: Mail, label: 'ایمیل', value: 'info@police.ir', desc: 'پاسخ در ۲۴ ساعت' },
  { icon: MapPin, label: 'نشانی', value: 'تهران، خیابان ولیعصر، میدان ونک', desc: 'دفتر مرکزی' },
];

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="تماس با ما"
        subtitle="برای پاسخگویی به سوالات، درخواست‌ها و گزارش‌های خود از راه‌های زیر استفاده کنید."
        icon={Phone}
      />

      <section className="section-container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-4">
            {contactInfo.map((c) => (
              <div key={c.label} className="card flex items-center gap-4 p-5 hover:border-brand-300 dark:hover:border-brand-800">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
                  <c.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">{c.label}</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white" dir="ltr">
                    {c.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{c.desc}</p>
                </div>
              </div>
            ))}
            <div className="card flex items-center gap-3 p-5 bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50">
              <Clock className="h-5 w-5 text-red-500" />
              <p className="text-sm font-medium text-red-700 dark:text-red-300">
                در مواقع اضطراری مستقیماً با شماره ۱۱۰ تماس بگیرید.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">ارسال پیام</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              پیام شما بررسی و در صورت نیاز پاسخ داده خواهد شد.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('پیام شما ارسال شد. (نسخه نمایشی)');
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    نام و نام خانوادگی
                  </label>
                  <input className="input-field" placeholder="نام کامل" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ایمیل
                  </label>
                  <input type="email" className="input-field" placeholder="example@mail.com" required dir="ltr" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  موضوع
                </label>
                <input className="input-field" placeholder="موضوع پیام" required />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  متن پیام
                </label>
                <textarea
                  className="input-field min-h-[120px] resize-y"
                  placeholder="پیام خود را بنویسید..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
