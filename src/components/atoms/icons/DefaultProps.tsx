import { mergeClassNames } from '../../../lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

const BaseIcon: React.FC<IconProps> = ({ children, className, ...props }) => {
  const generalIconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
  };
  return (
    <svg {...generalIconProps} {...props} className={mergeClassNames('size-6', className)}>
      {children}
    </svg>
  );
};

export default BaseIcon;
