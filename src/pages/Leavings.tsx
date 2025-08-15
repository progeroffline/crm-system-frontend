import Breadcrumbs from '@/components/molecules/Breadcrumbs';
import LeavingsTable from '../components/organisms/leavings/LeavingsTable';
import { generateFakeLeavingsData } from '../components/templates/tables/generateFakeData';

const Leavings: React.FC = () => {
  const leavingsData = generateFakeLeavingsData(20);
  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Уходы операторов', to: '/leavings' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <LeavingsTable initialData={leavingsData} />
    </div>
  );
};

export default Leavings;
