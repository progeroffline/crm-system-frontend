import Breadcrumbs from '../components/molecules/Breadcrumbs';
import MarketingTable from '../components/organisms/marketing/MarketingTable';
import { generateFakeMarketingData } from '../components/templates/tables/generateFakeData';

const Marketing: React.FC = () => {
  const marketingData = generateFakeMarketingData(20);
  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Маркетинг', to: '/marketing' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <MarketingTable initialData={marketingData} />
    </div>
  );
};

export default Marketing;
