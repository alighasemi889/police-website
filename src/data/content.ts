import {
  Siren,
  FileText,
  Car,
  Search,
  HeartPulse,
  Scale,
} from 'lucide-react';
import type { ServiceItem, NewsItem } from '@/types';

export const services: ServiceItem[] = [
  {
    icon: Siren,
    title: 'گزارش اضطراری',
    description: 'ثبت سریع گزارش‌های اضطراری و سرقت با اولویت بالا برای پاسخگویی فوری.',
  },
  {
    icon: FileText,
    title: 'صدور گواهی',
    description: 'درخواست و صدور آنلاین گواهی‌های قضایی و انتظامی مورد نیاز شهروندان.',
  },
  {
    icon: Car,
    title: 'خدمات راهور',
    description: 'استعلام خلافی خودرو، صدور بیمه‌نامه و رسیدگی به حوادث جاده‌ای.',
  },
  {
    icon: Search,
    title: 'استعلام پرونده',
    description: 'پیگیری وضعیت پرونده‌های قضایی و انتظامی به‌صورت آنلاین و امن.',
  },
  {
    icon: HeartPulse,
    title: 'امنیت عمومی',
    description: 'ارتقای سطح امنیت عمومی در شهرها و محلات با همکاری شهروندان.',
  },
  {
    icon: Scale,
    title: 'مشاوره حقوقی',
    description: 'ارائه مشاوره حقوقی و قضایی رایگان برای آگاهی‌بخشی شهروندان.',
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: 'ضبط بزرگترین بانک سارقان در منطقه ۱۲ تهران',
    excerpt:
      'با اقدام سریع نیروهای انتظامی، باند سازمان‌یافته سرقت با بیش از ۲۰ عضو دستگیر شد.',
    date: '۱۴ مرداد ۱۴۰۴',
    category: 'اخبار جرم',
    imageUrl:
      'https://images.pexels.com/photos/6269983/pexels-photo-6269983.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'راه‌اندازی سامانه هوشمند نظارت بر ترافیک',
    excerpt:
      'پروژه جدید نظارت هوشمند بر ترافیک پایتخت با بهره‌گیری از هوش مصنوعی آغاز شد.',
    date: '۸ مرداد ۱۴۰۴',
    category: 'فناوری',
    imageUrl:
      'https://images.pexels.com/photos/3256889/pexels-photo-3256889.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'آموزش ایمنی مدارس در سراسر کشور',
    excerpt:
      'برنامه آموزشی ایمنی و پیشگیری از بزهکاری در مدارس ابتدایی به پایان رسید.',
    date: '۲ مرداد ۱۴۰۴',
    category: 'اجتماعی',
    imageUrl:
      'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'کاهش ۲۰ درصدی سرقت در مناطق حومه‌ای',
    excerpt:
      'گزارش جدید نشان می‌دهد نرخ سرقت با حضور بیشتر گشت‌های محله محور کاهش یافته است.',
    date: '۲۵ تیر ۱۴۰۴',
    category: 'گزارش',
    imageUrl:
      'https://images.pexels.com/photos/5668773/pexels-photo-5668773.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'همکاری پلیس با نهادهای مردمی برای امنیت محله',
    excerpt:
      'نشست مشترک فرماندهان انتظامی با روسای شوراهای شهر برگزار شد.',
    date: '۱۸ تیر ۱۴۰۴',
    category: 'اجتماعی',
    imageUrl:
      'https://images.pexels.com/photos/7651945/pexels-photo-7651945.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'تجهیز پلیس راه به سامانه‌های نوین تشخیص چهره',
    excerpt:
      'پلیس راه کشور با تجهیز به فناوری تشخیص چهره، سرعت شناسایی مجرمان را افزایش داد.',
    date: '۱۰ تیر ۱۴۰۴',
    category: 'فناوری',
    imageUrl:
      'https://images.pexels.com/photos/6269983/pexels-photo-6269983.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const emergencyNumber = '۱۱۰';
