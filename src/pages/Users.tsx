// src/pages/Users.tsx
import React from 'react';
import Breadcrumbs from '../components/molecules/Breadcrumbs';
import UsersTable from '../components/organisms/users/UsersTable';
import { generateFakeUsersData } from '../components/templates/tables/generateFakeData';

const Users: React.FC = () => {
  const usersData = generateFakeUsersData(30);
  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Пользователи', to: '/users' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <UsersTable initialData={usersData} />
    </div>
  );
};

export default Users;
