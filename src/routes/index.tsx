import Models from '../pages/Models';
import BindingsModels from '../pages/BindingsModels';
import Marketing from '../pages/Marketing';
import Ratings from '../pages/Ratings';
import Leavings from '../pages/Leavings';
import Users from '../pages/Users';
import Statistics from '../pages/Statistics';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';

import UserIcon from '../components/atoms/icons/User';
import ChartPieIcon from '../components/atoms/icons/ChartPie';
import SettingsIcon from '../components/atoms/icons/Settings';
import HeartIcon from '../components/atoms/icons/Heart';
import PaperClipIcon from '../components/atoms/icons/PaperClip';
import DollarIcon from '../components/atoms/icons/Dollar';
import StarIcon from '@/components/atoms/icons/Star';
import UsersIcon from '@/components/atoms/icons/Users';
import UserMinusIcon from '@/components/atoms/icons/UserMinus';

export interface RouteConfig {
  path: string;
  name: string;
  element: React.ReactElement;
  icon: React.ReactElement;
  showInSidebar: boolean;
}

export const appRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'Статистика',
    element: <Statistics />,
    icon: <ChartPieIcon />,
    showInSidebar: true,
  },
  {
    path: '/models',
    name: 'Модели',
    element: <Models />,
    icon: <HeartIcon />,
    showInSidebar: true,
  },
  {
    path: '/bindings',
    name: 'Назначения',
    element: <BindingsModels />,
    icon: <PaperClipIcon />,
    showInSidebar: true,
  },
  {
    path: '/marketing',
    name: 'Маркетинг',
    element: <Marketing />,
    icon: <DollarIcon />,
    showInSidebar: true,
  },
  {
    path: '/ratings',
    name: 'Рейтинг',
    element: <Ratings />,
    icon: <StarIcon />,
    showInSidebar: true,
  },
  {
    path: '/leavings',
    name: 'Уходы',
    element: <Leavings />,
    icon: <UserMinusIcon />,
    showInSidebar: true,
  },
  {
    path: '/users',
    name: 'Пользователи',
    element: <Users />,
    icon: <UsersIcon />,
    showInSidebar: true,
  },
  {
    path: '/settings',
    name: 'Настройки',
    element: <Settings />,
    icon: <SettingsIcon />,
    showInSidebar: false,
  },
  {
    path: '/profile',
    name: 'Профиль',
    element: <Profile />,
    icon: <UserIcon />,
    showInSidebar: false,
  },
];
