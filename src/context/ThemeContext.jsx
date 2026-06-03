import { createContext, useContext, useState, useEffect } from 'react';
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const s = localStorage.getItem('theme');
    if (s) return s === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggle: () => setIsDark(p => !p) }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
