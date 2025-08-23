import { NavLink } from 'react-router-dom';
import { HeaderProps } from './props';
import LogotypeLabel from '@/components/atoms/branding/Logotype';
import LogotypeImage from '@/components/atoms/branding/LogotypeImage';

const Header: React.FC<HeaderProps> = ({ isCollapsed }) => {
  return (
    <div className="flex items-center justify-center p-2 mt-1">
      <NavLink
        to="/"
        className={`btn btn-neutral btn-outline overflow-hidden mr-1 ${isCollapsed ? 'p-0' : ''}`}
      >
        <LogotypeImage className={`flex-shrink-0 ${isCollapsed ? 'h-10' : 'h-full'}`} />
        {!isCollapsed && <LogotypeLabel className="ml-2" />}
      </NavLink>
    </div>
  );
};

export default Header;
