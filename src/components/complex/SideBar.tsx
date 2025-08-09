import { Link, NavLink } from 'react-router-dom';
import LogotypeImage from '../branding/LogotypeImage';
import LogotypeLabel from '../branding/Logotype';
import { JSX } from 'react';

interface SidebarItemProps {
  path: string;
  label: string;
  icon: JSX.Element;
}

interface SideBarProps {
  isCollapsed: boolean;
  items: SidebarItemProps[];
}

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, items }) => {
  return (
    <aside
      className={`border-r border-base-300 text-base-content transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      <div className="flex items-center justify-center p-2 h-16">
        <Link to="/" className="btn btn-primary text-xl overflow-hidden mr-1">
          <LogotypeImage className="h-full flex-shrink-0" />
          {!isCollapsed && <LogotypeLabel className="ml-2" />}
        </Link>
      </div>
      <ul className="menu p-2 w-full">
        {items.map((item) => (
          <li key={item.path}>
            {isCollapsed ? (
              <NavLink to={item.path} className="flex items-center h-12 justify-center">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
              </NavLink>
            ) : (
              <NavLink to={item.path} className="flex items-center h-12">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="transition-all duration-200 w-full">{item.label}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
