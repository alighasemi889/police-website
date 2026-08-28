import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  LayoutGrid,
  Newspaper,
  Phone,
  Siren,
  LogIn,
  LogOut,
  UserCircle,
} from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { to: '/', label: 'خانه', icon: Home },
  { to: '/services', label: 'خدمات', icon: LayoutGrid },
  { to: '/news', label: 'اخبار', icon: Newspaper },
  { to: '/contact', label: 'تماس', icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800'
          : 'bg-white dark:bg-slate-950 border-b border-transparent'
      }`
    >
      <nav className="section-container flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                    : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40'
                }`
              }
            >
              <Siren className="h-4 w-4" />
              گزارش حادثه
            </NavLink>
          </li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle compact />

          {isAuthenticated ? (
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/report"
                className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <UserCircle className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                <span className="max-w-[100px] truncate">{user?.name}</span>
              </Link>
              <button
                onClick={logout}
                aria-label="خروج"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all hover:border-red-400 hover:text-red-500 active:scale-95"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden sm:inline-flex btn-primary">
              <LogIn className="h-4 w-4" />
              ورود
            </Link>
          )}

          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="منو"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 animate-slide-down">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/report"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                      : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40'
                  }`
                }
              >
                <Siren className="h-5 w-5" />
                گزارش حادثه
              </NavLink>
            </li>
            <li className="mt-2 border-t border-slate-200 dark:border-slate-800 pt-3">
              {isAuthenticated ? (
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 px-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <UserCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    {user?.name}
                  </span>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-red-500"
                  >
                    <LogOut className="h-4 w-4" />
                    خروج
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 px-1">
                  <Link to="/login" className="btn-primary flex-1">
                    <LogIn className="h-4 w-4" />
                    ورود
                  </Link>
                  <Link to="/register" className="btn-outline flex-1">
                    ثبت‌نام
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
