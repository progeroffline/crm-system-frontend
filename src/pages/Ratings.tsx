import Breadcrumbs from '../components/molecules/Breadcrumbs';
import StaffRatingsTable from '../components/organisms/staffRatings/StaffRatingsTable';
import { generateFakeStaffRatingData } from '../components/templates/tables/generateFakeData';

const Ratings: React.FC = () => {
  const ratingData = generateFakeStaffRatingData(25);
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