import { Link, NavLink, useLocation } from 'react-router-dom';
import LogotypeImage from '../atoms/branding/LogotypeImage';
import LogotypeLabel from '../atoms/branding/Logotype';
import { RoutesSelection } from '@/routes';


interface SideBarProps {
  isCollapsed: boolean;
  items: RoutesSelection[];
}

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, items }) => {
  const currentLocation = useLocation();
  const getSidebarRoutes = (appRoutes: RoutesSelection[]): RoutesSelection[] => {
    return appRoutes.reduce((accumulator, section) => {
      const visibleRoutes = section.routes.filter(route => route.showInSidebar);
      if (visibleRoutes.length > 0) {
        accumulator.push({
          ...section,
          routes: visibleRoutes,
        });
      }
      return accumulator;
    }, [] as RoutesSelection[]);
  };

  return (
    <aside
      className={`border-r border-base-300 text-base-content transition-all duration-300 ease-in-out ${isCollapsed ? 'w-14' : 'w-64'}`}
    >
      <div className="flex items-center justify-center p-2">
        <Link to="/" className={`btn btn-neutral btn-outline overflow-hidden mr-1 ${isCollapsed ? 'p-0' : ''}`}>
          <LogotypeImage className={`flex-shrink-0 ${isCollapsed ? 'h-10' : 'h-full'}`} />
          {!isCollapsed && <LogotypeLabel className="ml-2" />}
        </Link>
      </div>
      <ul className="menu p-2 w-full">
        {getSidebarRoutes(items).map((section) => (
          <li className='w-full'>
            {section.sectionName && !isCollapsed ? <p key={section.sectionName} className='menu-label mt-2'>{section.sectionName}</p > : ''}
            {
              section.routes.filter((item) => item.showInSidebar).map((item) => (
                isCollapsed ? (
                  <NavLink
                    to={item.path}
                    className={`flex mb-1 items-center h-10 p-0 justify-center ${currentLocation.pathname === item.path ? 'menu-active' : ''}`}
                  >
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.path}
                    className={`flex mb-1 items-center h-10 ${currentLocation.pathname === item.path ? 'menu-active' : ''}`}
                  >
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="transition-all duration-200 w-full">{item.name}</span>
                  </NavLink>
                )
              ))
            }
          </li>
        ))}
      </ul>
    </aside >
  );
};

export default SideBar;


