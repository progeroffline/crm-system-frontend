import { mergeClassNames } from '@/lib/utils';
import IconProps, { generalIconProps } from './DefaultProps';

const ChartPie: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      {...generalIconProps}
      {...props}
      className={mergeClassNames(generalIconProps.className, className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
      />
    </svg>
  );
};

export default ChartPie;
