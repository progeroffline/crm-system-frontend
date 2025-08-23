import { SectionProps } from './props';

const Section: React.FC<SectionProps> = ({ sectionName, isCollapsed }) => {
  return !isCollapsed && sectionName ? (
    <h2 className="menu-title" key={sectionName}>
      {sectionName}
    </h2>
  ) : (
    ''
  );
};

export default Section;
