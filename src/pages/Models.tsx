import ModelsTable from '../components/organisms/models/ModelsTable';
import { generateFakeModelsData } from '../components/templates/tables/generateFakeData';

const Models: React.FC = () => {
  const modelsData = generateFakeModelsData(25);
  return <ModelsTable initialModels={modelsData} />;
};

export default Models;
