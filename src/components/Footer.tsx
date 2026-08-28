import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Siren, Lock } from 'lucide-react';
import Logo from '@/components/Logo';

const footerLinks = {
  services: [
    { label: 'گزارش اضطراری', to: '/report' },
    { label: 'صدور گواهی', to: '/services' },
    { label: 'خدمات راهور', to: '/services' },
    { label: 'استعلام پرونده', to: '/services' },
  ],
  quick: [
    { label: 'خانه', to: '/' },
    { label: 'اخبار', to: '/news' },
    { label: 'تماس با ما', to: '/contact' },
    { label: 'ورود', to: '/login' },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              پلیس ایران در خدمت حفظ امنیت و آرامش شهروندان. سامانه‌ی امن و آنلاین برای گزارش
              حوادث و دریافت خدمات انتظامی.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500">
              <Lock className="h-4 w-4" />
              ارتباط امن و رمزنگاری‌شده
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Shield className="h-4 w-4 text-brand-600 dark:text-brand-400" />
              خدمات
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-500 dark:text-slate-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-slate-900 dark:text-white">دسترسی سریع</h3>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-500 dark:text-slate-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-slate-900 dark:text-white">اطلاعات تماس</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Siren className="h-5 w-5 text-red-500" />
                <span>اورژانس پلیس: ۱۱۰</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Phone className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                <span dir="ltr">۰۲۱ - ۸۸۷۷۶۶۵۵</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Mail className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                <span>info@police.ir</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                <span>تهران، خیابان ولیعصر، میدان ونک</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © ۱۴۰۴ فرماندهی انتظامی ج.ا.ا — تمامی حقوق محفوظ است.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            ساخته‌شده با تمرکز بر امنیت و اعتماد شهروندان
          </p>
        </div>
      </div>
    </footer>
  );
}
