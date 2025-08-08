import { Link } from 'react-router-dom';
import ThemeControls from '../controls/ThemeController';
import { useAuth } from '@/contexts/AuthContext';
import ExitIcon from '../icons/Exit';
import CrossIcon from '../icons/Cross';
import UserIcon from '../icons/User';
import SettingsIcon from '../icons/Settings';
import { useRef } from 'react';
import MenuIcon from '../icons/MenuIcon';

interface NavigationBarProps {
  onToggleSidebar: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onToggleSidebar }) => {
  const drawerToggleRef = useRef<HTMLInputElement>(null);
  const { user, logout } = useAuth();

  const handleLogout = () => logout();

  const handleDrawerItemClick = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.checked = false;
    }
  };

  return (
    <div className="navbar bg-base-200 shadow-sm pr-0 pl-0">
      <div className="flex-1">
        <label
          htmlFor="main-drawer"
          onClick={onToggleSidebar}
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <MenuIcon />
        </label>
      </div>
      <div className="mr-2">
        <ThemeControls />
      </div>
      <div className="mr-3">
        <div className="drawer drawer-end">
          <input
            id="account-drawer"
            type="checkbox"
            className="drawer-toggle"
            ref={drawerToggleRef}
          />
          <div className="drawer-content">
            <label htmlFor="account-drawer">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="account-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="h-full p-4 bg-base-200">
              <label htmlFor="account-drawer" className="btn btn-xs btn-circle btn-ghost absolute">
                <CrossIcon />
              </label>
              <div className="mt-5 flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  {user ? (
                    <div className="mt-4 flex flex-col items-center">
                      <span className="badge badge-soft badge-accent">{user.role}</span>
                      <p className="text-base font-bold text-xl mt-2">{user.username}</p>
                    </div>
                  ) : (
                    <div className="mt-4 flex flex-col items-center">
                      <span className="badge badge-soft badge-accent"></span>
                      <p className="text-base font-bold text-xl mt-2"></p>
                    </div>
                  )}
                </div>
                <ul className="menu text-base-content min-h-full w-80 p-4">
                  <li>
                    <Link to="/profile" onClick={handleDrawerItemClick}>
                      <UserIcon />
                      Профиль
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" onClick={handleDrawerItemClick}>
                      <SettingsIcon />
                      Настройки
                    </Link>
                  </li>
                  <li className="mt-2">
                    <button className="btn btn-soft btn-primary" onClick={handleLogout}>
                      Выйти
                      <ExitIcon />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
