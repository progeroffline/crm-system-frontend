import NavigationBar from '@/components/organisms/NavigationBar';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '@/components/organisms/SideBar';
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

  const sidebarItems = appRoutes
    .filter((route) => route.showInSidebar)
    .map((route) => ({
      path: route.path,
      label: route.name,
      icon: route.icon,
    }));

  return (
    <div className="flex h-screen">
      <SideBar isCollapsed={isSidebarCollapsed} items={sidebarItems} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavigationBar onToggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 bg-base-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
