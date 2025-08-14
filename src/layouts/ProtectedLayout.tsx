import NavigationBar from '@/components/organisms/NavigationBar';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import ChartPie from '@/components/atoms/icons/ChartPie';
import SideBar from '@/components/organisms/SideBar';

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
      <SideBar
        isCollapsed={isSidebarCollapsed}
        items={[{ path: '/', label: 'Статистика', icon: <ChartPie /> }]}
      />
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
