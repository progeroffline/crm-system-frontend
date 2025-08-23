import { NavLink } from 'react-router-dom';
import { OpenItemProps } from './props';

const OpenItem: React.FC<OpenItemProps> = ({ name, icon, toPath, currentPath, isSub }) => {
  return isSub ? (
    <li key={`${name}_li`}>
      <NavLink
        to={toPath}
        key={`${name}_navlink`}
        className={`flex mb-1 items-center h-10 ${currentPath === toPath ? 'menu-active' : ''}`}
      >
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">{icon}</div>
        <span className="transition-all duration-200 w-full">{name}</span>
      </NavLink>
    </li>
  ) : (
    <NavLink
      to={toPath}
      key={`${name}_navlink`}
      className={`flex mb-1 items-center h-10 ${currentPath === toPath ? 'menu-active' : ''}`}
    >
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">{icon}</div>
      <span className="transition-all duration-200 w-full">{name}</span>
    </NavLink>
  );
};

export default OpenItem;
