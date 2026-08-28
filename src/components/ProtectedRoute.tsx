import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="section-container flex min-h-[70vh] items-center justify-center py-20">
        <div className="card max-w-md w-full p-8 text-center animate-fade-in-up">
          <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-950/40">
            <Lock className="h-8 w-8 text-red-600 dark:text-red-400" strokeWidth={2} />
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">دسترسی محدود</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            برای ثبت گزارش حادثه، ابتدا باید وارد حساب کاربری خود شوید.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/login" className="btn-primary">
              ورود به حساب
            </Link>
            <Link to="/register" className="btn-outline">
              ساخت حساب جدید
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
