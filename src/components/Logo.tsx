import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
}

export default function Logo({ variant = 'auto' }: LogoProps) {
  const textColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'dark'
        ? 'text-slate-900 dark:text-white'
        : 'text-slate-900 dark:text-white';

  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
        <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
      </span>
      <span className={`flex flex-col leading-tight ${textColor}`}>
        <span className="text-base font-extrabold tracking-tight">پلیس ایران</span>
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
          فرماندهی انتظامی
        </span>
      </span>
    </Link>
  );
}
