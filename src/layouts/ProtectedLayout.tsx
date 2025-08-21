import NavigationBar from '@/components/organisms/NavigationBar';
import SideBar from '@/components/organisms/SideBar';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { appRoutes } from '../routes';

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      <SideBar isCollapsed={isSidebarCollapsed} items={appRoutes} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavigationBar onToggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 bg-root">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
