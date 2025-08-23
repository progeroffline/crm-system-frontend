import { mergeClassNames } from '@/lib/utils';
import { ClosedItemProps } from './props';
import { NavLink } from 'react-router-dom';

const ClosedItem: React.FC<ClosedItemProps> = ({ name, icon, toPath, currentPath }) => {
  return (
    <NavLink
      to={toPath}
      data-tip={name}
      key={`${name}_navlink`}
      className={mergeClassNames([
        'flex',
        'mb-1',
        'items-center',
        'h-10',
        'p-0',
        'justify-center',
        'tooltip',
        'tooltip-right',
        currentPath === toPath ? 'menu-active' : '',
      ])}
    >
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">{icon}</div>
    </NavLink>
  );
};

export default ClosedItem;
