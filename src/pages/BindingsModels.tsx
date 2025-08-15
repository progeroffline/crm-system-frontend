import BindingsModelsTable from '../components/organisms/bindings/BindingsModelsTable';
import { generateFakeAssignedModelsData } from '../components/templates/tables/generateFakeData';

const BindingsModels: React.FC = () => {
  const modelsData = generateFakeAssignedModelsData(15);
  return <BindingsModelsTable initialModels={modelsData} />;
};

export default BindingsModels;
