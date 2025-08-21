import React from 'react';

const Models = React.lazy(() => import('../pages/Models'));
const BindingsModels = React.lazy(() => import('../pages/BindingsModels'));
const Marketing = React.lazy(() => import('../pages/Marketing'));
const Ratings = React.lazy(() => import('../pages/Ratings'));
const Leavings = React.lazy(() => import('../pages/Leavings'));
const Users = React.lazy(() => import('../pages/Users'));
const Statistics = React.lazy(() => import('../pages/Statistics'));
const Settings = React.lazy(() => import('../pages/Settings'));
const Profile = React.lazy(() => import('../pages/Profile'));

import UserIcon from '@/components/atoms/icons/User';
import ChartPieIcon from '@/components/atoms/icons/ChartPie';
import SettingsIcon from '@/components/atoms/icons/Settings';
import HeartIcon from '@/components/atoms/icons/Heart';
import PaperClipIcon from '@/components/atoms/icons/PaperClip';
import DollarIcon from '@/components/atoms/icons/Dollar';
import StarIcon from '@/components/atoms/icons/Star';
import UsersIcon from '@/components/atoms/icons/Users';
import UserMinusIcon from '@/components/atoms/icons/UserMinus';
import { UserRoles } from '../pages/Ratings';

export interface RouteConfig {
  path: string;
  name: string;
  element: React.ReactElement;
  icon: React.ReactElement;
  showInSidebar: boolean;
}

export interface RoutesSelection {
  sectionName?: string;
  sectionIcon?: React.ReactElement,
  routes: RouteConfig[],
}

export const appRoutes: RoutesSelection[] = [
  {
    routes: [{
      path: '/',
      name: 'Статистика',
      element: <Statistics />,
      icon: <ChartPieIcon className="size-4" />,
      showInSidebar: true,
    }],
  },
  {
    routes: [{
      path: '/models',
      name: 'Модели',
      element: <Models />,
      icon: <HeartIcon className="size-4" />,
      showInSidebar: true,
    }],
  },
  {
    routes: [{
      path: '/bindings',
      name: 'Назначения',
      element: <BindingsModels />,
      icon: <PaperClipIcon className="size-4" />,
      showInSidebar: true,
    }]
  },
  {
    routes: [{
      path: '/marketing',
      name: 'Маркетинг',
      element: <Marketing />,
      icon: <DollarIcon className="size-4" />,
      showInSidebar: true,
    }]
  },
  {
    sectionName: 'Рейтинг',
    sectionIcon: <StarIcon className="size-4" />,
    routes: [
      {
        path: '/ratings/superadmins',
        name: 'Супер-админы',
        element: <Ratings roleFilter={UserRoles.SUPER_ADMIN} />,
        icon: <p>CA</p>,
        showInSidebar: true,
      },
      {
        path: '/ratings/ratings',
        name: 'Топ-админы',
        element: <Ratings roleFilter={UserRoles.TOP_ADMIN} />,
        icon: <p>TA</p>,
        showInSidebar: true,
      },
      {
        path: '/ratings/admins',
        name: 'Админы',
        element: <Ratings roleFilter={UserRoles.ADMIN} />,
        icon: <p>AД</p>,
        showInSidebar: true,
      },
      {
        path: '/ratings/operators',
        name: 'Операторы',
        element: <Ratings roleFilter={UserRoles.OPERATOR} />,
        icon: <p>OП</p>,
        showInSidebar: true,
      },
      {
        path: '/ratings/hr',
        name: 'HR',
        element: <Ratings roleFilter={UserRoles.HR} />,
        icon: <p>HR</p>,
        showInSidebar: true,
      }
    ]
  },
  {
    sectionName: 'Сотрудники',
    routes: [
      {
        path: '/leavings',
        name: 'Уходы',
        element: <Leavings />,
        icon: <UserMinusIcon className="size-4" />,
        showInSidebar: true,
      }, {
        path: '/users',
        name: 'Пользователи',
        element: <Users />,
        icon: <UsersIcon className="size-4" />,
        showInSidebar: true,
      }]
  },
  {
    routes: [{
      path: '/settings',
      name: 'Настройки',
      element: <Settings />,
      icon: <SettingsIcon className="size-4" />,
      showInSidebar: false,
    }]
  },
  {
    routes: [{
      path: '/profile',
      name: 'Профиль',
      element: <Profile />,
      icon: <UserIcon className="size-4" />,
      showInSidebar: false,
    }]
  },
];
