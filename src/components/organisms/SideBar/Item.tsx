import ClosedItem from './ClosedItem';
import OpenItem from './OpenItem';
import { SectionItemProps } from './props';

const SectionItems: React.FC<SectionItemProps> = ({
  isCollapsed,
  sectionName,
  routes,
  currentPath,
}) => {
  return isCollapsed ? (
    routes.map((item) => (
      <ClosedItem
        key={item.name}
        name={item.name}
        icon={item.icon}
        toPath={item.path}
        currentPath={currentPath}
      />
    ))
  ) : sectionName ? (
    <ul key={`${sectionName}_ul`}>
      {routes
        .filter((item) => item.showInSidebar)
        .map((item) => (
          <OpenItem
            key={`${item.name}_openItem`}
            name={item.name}
            icon={item.icon}
            toPath={item.path}
            currentPath={currentPath}
            isSub
          />
        ))}
    </ul>
  ) : (
    routes.map((item) => (
      <OpenItem
        key={item.name}
        name={item.name}
        icon={item.icon}
        toPath={item.path}
        currentPath={currentPath}
      />
    ))
  );
};

export default SectionItems;
