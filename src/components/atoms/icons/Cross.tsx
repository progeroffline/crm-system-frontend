import { mergeClassNames } from '@/lib/utils';
import IconProps, { generalIconProps } from './DefaultProps';

const CrossIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      {...generalIconProps}
      {...props}
      className={mergeClassNames(generalIconProps.className, className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
};

export default CrossIcon;
