import React from 'react';
import BaseIcon from './DefaultProps';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </BaseIcon>
  );
};

export default MenuIcon;