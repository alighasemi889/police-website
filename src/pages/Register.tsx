import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('رمز عبور باید حداقل ۶ کاراکتر باشد.');
      return;
    }
    if (password !== confirm) {
      setError('تکرار رمز عبور مطابقت ندارد.');
      return;
    }
    setLoading(true);
    const result = register(name, email, password);
    setLoading(false);
    if (result.success) {
      navigate('/report');
    } else {
      setError(result.error || 'خطا در ثبت‌نام.');
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-slate-950 px-4 py-12">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 30%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative w-full max-w-md animate-fade-in-up">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
            <ShieldCheck className="h-7 w-7 text-white" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight text-white">
            <span className="text-xl font-extrabold">پلیس ایران</span>
            <span className="text-xs text-brand-200">فرماندهی انتظامی</span>
          </span>
        </Link>

        <div className="card p-8">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">ساخت حساب کاربری</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            برای دسترسی به خدمات و گزارش حادثه ثبت‌نام کنید.
          </p>

          {error && (
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-950/30 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field pr-11"
                  placeholder="نام کامل"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                ایمیل
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pr-11"
                  placeholder="example@mail.com"
                  dir="ltr"
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  رمز عبور
                </label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pr-11"
                    placeholder="حداقل ۶ کاراکتر"
                    dir="ltr"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  تکرار رمز
                </label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="input-field pr-11"
                    placeholder="••••••••"
                    dir="ltr"
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              <UserPlus className="h-5 w-5" />
              {loading ? 'در حال ثبت...' : 'ثبت‌نام'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            قبلاً ثبت‌نام کرده‌اید؟{' '}
            <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400">
              وارد شوید
            </Link>
          </p>
        </div>

        <Link
          to="/"
          className="mt-6 block text-center text-sm text-brand-200 transition-colors hover:text-white"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
