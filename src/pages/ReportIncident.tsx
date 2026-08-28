import { useState, useMemo } from 'react';
import {
  Siren,
  User,
  Phone,
  MapPin,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Send,
  Lock,
  RotateCcw,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface FormData {
  firstName: string;
  lastName: string;
  nationalId: string;
  phone: string;
  location: string;
  description: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  nationalId?: string;
  phone?: string;
  location?: string;
}

const toPersianDigits = (s: string) => s.replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);

const normalizeDigits = (s: string) => s.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));

const initialData: FormData = {
  firstName: '',
  lastName: '',
  nationalId: '',
  phone: '',
  location: '',
  description: '',
};

export default function ReportIncident() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  const validate = (d: FormData): FormErrors => {
    const e: FormErrors = {};
    if (!d.firstName.trim()) e.firstName = 'نام الزامی است.';
    else if (d.firstName.trim().length < 2) e.firstName = 'نام باید حداقل ۲ کاراکتر باشد.';

    if (!d.lastName.trim()) e.lastName = 'نام خانوادگی الزامی است.';
    else if (d.lastName.trim().length < 2) e.lastName = 'نام خانوادگی باید حداقل ۲ کاراکتر باشد.';

    const nid = normalizeDigits(d.nationalId);
    if (!nid) e.nationalId = 'کد ملی الزامی است.';
    else if (!/^\d{10}$/.test(nid)) e.nationalId = 'کد ملی باید ۱۰ رقم باشد.';

    const phone = normalizeDigits(d.phone);
    if (!phone) e.phone = 'شماره تلفن الزامی است.';
    else if (!/^09\d{9}$/.test(phone)) e.phone = 'شماره تلفن باید ۱۱ رقم و با ۰۹ شروع شود.';

    if (!d.location.trim()) e.location = 'مکان سرقت الزامی است.';
    else if (d.location.trim().length < 5) e.location = 'مکان را دقیق‌تر وارد کنید (حداقل ۵ کاراکتر).';

    return e;
  };

  const errorsNow = useMemo(() => validate(data), [data]);
  const isValid = Object.keys(errorsNow).length === 0;

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (submitted) {
      setErrors(validate({ ...data, [field]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const e2 = validate(data);
    setErrors(e2);
    if (Object.keys(e2).length === 0) {
      const code = 'RP-' + Date.now().toString().slice(-6);
      setTrackingCode(code);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setData(initialData);
    setErrors({});
    setSubmitted(false);
    setTrackingCode('');
  };

  if (trackingCode) {
    return (
      <div>
        <PageHeader title="گزارش حادثه" subtitle="ثبت محرمانه گزارش‌های سرقت و حوادث." icon={Siren} />
        <div className="section-container py-16 sm:py-24">
          <div className="mx-auto max-w-lg card p-8 text-center animate-fade-in-up">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40">
              <CheckCircle2 className="h-9 w-9 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
            </span>
            <h2 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
              گزارش شما با موفقیت ثبت شد
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              کد پیگیری گزارش شما:
            </p>
            <p className="mt-3 text-2xl font-extrabold text-brand-600 dark:text-brand-400" dir="ltr">
              {toPersianDigits(trackingCode)}
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              گزارش شما در سریع‌ترین زمان ممکن توسط نیروهای انتظامی بررسی خواهد شد. کد پیگیری را
              برای پی‌گیری آینده نگه دارید.
            </p>
            <button onClick={handleReset} className="btn-outline mt-8">
              <RotateCcw className="h-4 w-4" />
              ثبت گزارش جدید
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="گزارش حادثه" subtitle="ثبت محرمانه گزارش‌های سرقت و حوادث — اطلاعات شما امن و رمزنگاری‌شده باقی می‌ماند." icon={Siren} />

      <section className="section-container py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="card mb-6 flex items-center gap-3 p-4 bg-brand-50/60 dark:bg-brand-950/30 border-brand-200 dark:border-brand-900/50">
            <Lock className="h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
            <p className="text-sm text-brand-800 dark:text-brand-200">
              تمامی اطلاعات این فرم به‌صورت محرمانه و امن پردازش می‌شود.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* First name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  نام <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={data.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className={`input-field pr-11 ${errors.firstName ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder="نام"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  نام خانوادگی <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className={`input-field pr-11 ${errors.lastName ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder="نام خانوادگی"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* National ID */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  کد ملی <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    inputMode="numeric"
                    value={data.nationalId}
                    onChange={(e) => handleChange('nationalId', e.target.value)}
                    className={`input-field pr-11 ${errors.nationalId ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder="۱۰ رقم"
                    dir="ltr"
                    maxLength={10}
                  />
                </div>
                {errors.nationalId && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.nationalId}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  شماره تلفن <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={data.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`input-field pr-11 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    dir="ltr"
                    maxLength={11}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                مکان سرقت <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className={`input-field pr-11 ${errors.location ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  placeholder="آدرس دقیق محل وقوع حادثه"
                />
              </div>
              {errors.location && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.location}
                </p>
              )}
            </div>

            {/* Description (optional) */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                توضیحات (اختیاری)
              </label>
              <textarea
                value={data.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="input-field min-h-[100px] resize-y"
                placeholder="توضیحات بیشتر درباره حادثه..."
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-5">
              <p className="text-xs text-slate-400">
                {isValid ? (
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    فرم معتبر است
                  </span>
                ) : (
                  'لطفاً همه فیلدهای الزامی را تکمیل کنید.'
                )}
              </p>
              <button type="submit" disabled={!isValid} className="btn-primary">
                <Send className="h-4 w-4" />
                ثبت گزارش
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
