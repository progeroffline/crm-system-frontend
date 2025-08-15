import { mergeClassNames } from '@/lib/utils';
import IconProps, { generalIconProps } from './DefaultProps';

const ChevronLeftIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      {...generalIconProps}
      {...props}
      className={mergeClassNames(generalIconProps.className, className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
};

export default ChevronLeftIcon;
