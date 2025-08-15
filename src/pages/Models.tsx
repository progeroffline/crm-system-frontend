import React from 'react';
import modelsData from '../data/models.json';
import ModelsTable, { type Model } from '../components/organisms/models/ModelsTable';

const Models: React.FC = () => {
  return <ModelsTable initialModels={modelsData as Model[]} />;
};

export default Models;
