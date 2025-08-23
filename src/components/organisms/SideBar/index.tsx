import { useLocation } from 'react-router-dom';
import { RoutesSelection } from '@/routes';
import { SideBarProps } from './props';
import Header from './Header';
import Section from './Section';
import SectionItems from './Item';

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, items }) => {
  const currentLocation = useLocation();
  const getSidebarRoutes = (appRoutes: RoutesSelection[]): RoutesSelection[] => {
    return appRoutes.reduce((accumulator, section) => {
      const visibleRoutes = section.routes.filter((route) => route.showInSidebar);
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
      <Header isCollapsed={isCollapsed} />
      <ul className="menu w-full">
        {getSidebarRoutes(items).map((section, index) => (
          <li className="w-full" key={`${index}_li`}>
            <Section
              key={`${section.sectionName ?? index}_section`}
              isCollapsed={isCollapsed}
              sectionName={section.sectionName}
            />
            <SectionItems
              key={`${section.sectionName ?? index}_sectionItems`}
              isCollapsed={isCollapsed}
              sectionName={section.sectionName}
              routes={section.routes}
              currentPath={currentLocation.pathname}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
