import Breadcrumbs from '../components/molecules/Breadcrumbs';
import BindingsModelsTable from '../components/organisms/bindings/BindingsModelsTable';
import { generateFakeAssignedModelsData } from '../components/templates/tables/generateFakeData';

const BindingsModels: React.FC = () => {
  const modelsData = generateFakeAssignedModelsData(15);
  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Панель назначения', to: '/bindings' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <BindingsModelsTable initialModels={modelsData} />
    </div>
  );
};

export default BindingsModels;