import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'حالت روشن' : 'حالت تاریک'}
      className={`inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 active:scale-95 ${
        compact ? 'h-9 w-9' : 'gap-2 px-3 py-2 text-sm font-medium'
      }`}
    >
      {isDark ? (
        <Sun className="h-5 w-5" strokeWidth={2} />
      ) : (
        <Moon className="h-5 w-5" strokeWidth={2} />
      )}
      {!compact && <span>{isDark ? 'روشن' : 'تاریک'}</span>}
    </button>
  );
}
