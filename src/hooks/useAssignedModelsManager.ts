import { useState } from 'react';
import { AssignedModel } from '../types/model';

const NEW_ASSIGNED_MODEL_TEMPLATE: AssignedModel = {
  id: null,
  avatar: '',
  fullName: '',
  ml: '',
  status: 'работает',
  mailing: false,
  total: 0,
  forecast: 0,
  registrationDate: new Date().toISOString().split('T')[0],
  superAdmin: null,
  topAdmin: null,
  admin: null,
  operator: null,
};

export const useAssignedModelsManager = (initialModels: AssignedModel[]) => {
  const [models, setModels] = useState<AssignedModel[]>(initialModels);
  const [newModel, setNewModel] = useState<AssignedModel | null>(null);
  const [editingModel, setEditingModel] = useState<AssignedModel | null>(null);

  const isEditing = !!editingModel;
  const isAdding = !!newModel;

  const handleAdd = () => {
    const randomImgId = Math.floor(Math.random() * 70) + 1;
    setNewModel({
      ...NEW_ASSIGNED_MODEL_TEMPLATE,
      avatar: `https://i.pravatar.cc/150?img=${randomImgId}`,
    });
  };

  const handleCancelAdd = () => setNewModel(null);

  const handleSaveNew = () => {
    if (newModel) {
      setModels([{ ...newModel, id: new Date().getTime() }, ...models]);
      setNewModel(null);
    }
  };

  const handleEdit = (model: AssignedModel) => setEditingModel({ ...model });

  const handleCancelEdit = () => setEditingModel(null);

  const handleSaveEdit = () => {
    if (editingModel) {
      setModels(models.map((emp) => (emp.id === editingModel.id ? editingModel : emp)));
      setEditingModel(null);
    }
  };

  const handleDelete = (modelId: number | null) => {
    if (modelId !== null && window.confirm('Вы уверены, что хотите удалить эту модель?')) {
      setModels(models.filter((model) => model.id !== modelId));
    }
  };

  return {
    models,
    newModel,
    editingModel,
    isAdding,
    isEditing,
    setNewModel,
    setEditingModel,
    handleAdd,
    handleCancelAdd,
    handleSaveNew,
    handleEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
  };
};
