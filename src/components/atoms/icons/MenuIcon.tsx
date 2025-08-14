import { mergeClassNames } from '@/lib/utils';
import IconProps, { generalIconProps } from './DefaultProps';

const MenuIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      {...generalIconProps}
      {...props}
      className={mergeClassNames(generalIconProps.className, className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export default MenuIcon;
