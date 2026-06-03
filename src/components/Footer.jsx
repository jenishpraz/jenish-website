import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className={`border-t ${isDark?'bg-dark border-dark-border':'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <p className={`font-body text-sm text-center ${isDark?'text-gray-400':'text-gray-600'}`}>
          © 2026 Jenish Prajapati. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
