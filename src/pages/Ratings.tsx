import Breadcrumbs from '../components/molecules/Breadcrumbs';
import StaffRatingsTable from '../components/organisms/staffRatings/StaffRatingsTable';
import { generateFakeStaffRatingData } from '../components/templates/tables/generateFakeData';

export enum UserRoles {
  USER = "user",
  HR = "HR",
  OPERATOR = "оператор",
  ADMIN = "Администратор",
  TOP_ADMIN = "Топ админ",
  SUPER_ADMIN = "Супер админ",
}

interface RatingsPageProps {
  roleFilter?: UserRoles;
}

const Ratings: React.FC<RatingsPageProps> = ({ roleFilter }) => {
  const ratingData = generateFakeStaffRatingData(25).filter((record) => roleFilter ? record.role == roleFilter : true);
  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Рейтинг', to: '/ratings' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <StaffRatingsTable initialData={ratingData} />
    </div>
  );
};

export default Ratings;
