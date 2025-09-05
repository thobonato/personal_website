import Link from "next/link";
import { useTheme } from '@/components/theme-provider';
import { useEffect, useState } from "react";

export function HeaderComponent() {
  const { theme, setTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };


  return (
    // Header Section
    <header className="px-8 py-4">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-1">
          <h1
            className={`text-base cursor-pointer transition-colors duration-500 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            thomaz.sys
          </h1>
          <nav className="flex gap-6">
            <Link
              href="/"
              className={`text-sm transition-colors duration-500 ${
                theme === 'light' ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              /home
            </Link>
            <Link
              href="/projects"
              className={`text-sm transition-colors duration-500 ${
                theme === 'light' ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              /projects
            </Link>
          </nav>
        </div>
        <div className="text-xs opacity-60">
          <div>{Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
          <div>DATE: {formatDate(currentTime)}</div>
          <div>TIME: {formatTime(currentTime)}</div>
        </div>
      </div>
    </header>
  );
}