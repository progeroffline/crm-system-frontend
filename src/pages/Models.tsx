import Breadcrumbs from '../components/molecules/Breadcrumbs';
import ModelsTable from '../components/organisms/models/ModelsTable';
import { generateFakeModelsData } from '../components/templates/tables/generateFakeData';

const Models: React.FC = () => {
  const modelsData = generateFakeModelsData(25);
  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Модели', to: '/models' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <ModelsTable initialModels={modelsData} />
    </div>
  );
};

export default Models;
