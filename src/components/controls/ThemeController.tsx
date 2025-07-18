import { HTMLProps } from 'react';
import MoonIcon from '../icons/Moon';
import SunIcon from '../icons/Sun';

const defaultClasses = ['swap', 'swap-rotate'];

const ThemeControlsComponent: React.FC<HTMLProps<HTMLLabelElement>> = ({ className, ...props }) => {
  const combinedClassName = [...defaultClasses, className].filter(Boolean).join(' ');

  return (
    <label className={combinedClassName} {...props}>
      <input type="checkbox" className="theme-controller" value="synthwave" />

      <SunIcon />
      <MoonIcon />
    </label>
  );
};

export default ThemeControlsComponent;
