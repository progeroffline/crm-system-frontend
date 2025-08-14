import { HTMLProps, useEffect, useState } from 'react';
import MoonIcon from '../../atoms/icons/Moon';
import SunIcon from '../../atoms/icons/Sun';

const defaultClasses = ['swap', 'swap-rotate'];

const ThemeControls: React.FC<HTMLProps<HTMLLabelElement>> = ({ className, ...props }) => {
  const combinedClassName = [...defaultClasses, className].filter(Boolean).join(' ');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="btn btn-circle btn-ghost">
      <label className={combinedClassName} {...props}>
        <input
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />

        <SunIcon className="swap-off size-8" />
        <MoonIcon className="swap-on size-8" />
      </label>
    </div>
  );
};

export default ThemeControls;
