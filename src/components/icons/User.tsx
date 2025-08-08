import IconProps, { generalIconProps } from '@/components/icons/DefaultProps';
import { mergeClassNames } from '@/lib/utils';

const UserIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      {...generalIconProps}
      {...props}
      className={mergeClassNames(generalIconProps.className, className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
};

export default UserIcon;
