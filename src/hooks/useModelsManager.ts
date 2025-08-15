// src/hooks/useModelsManager.ts

import { useState } from 'react';
import { Model } from '../types/model';

const NEW_EMPLOYEE_TEMPLATE: Model = {
  id: null,
  avatar: '',
  ml: '',
  status: 'работает',
  mailing: false,
  questionnaire: {
    vaginalMasturbationToys: false,
    vaginalMasturbationFingers: false,
    analMasturbationToys: false,
    analMasturbationFingers: false,
    sexWithMan: false,
    oralSexToy: false,
    squirtVideo: false,
    feet: false,
    peeVideo: false,
    periodVideo: false,
    minEnglish: false,
    notReadyFor: '',
    sexToys: '',
    customs: false,
    videoCalls: false,
  },
};

export const useModelsManager = (initialModels: Model[]) => {
  const [models, setModels] = useState<Model[]>(initialModels);
  const [newModel, setNewModel] = useState<Model | null>(null);
  const [editingModel, setEditingModel] = useState<Model | null>(null);

  const isEditing = !!editingModel;
  const isAdding = !!newModel;

  const handleAdd = () => {
    const randomImgId = Math.floor(Math.random() * 70) + 1;
    setNewModel({ ...NEW_EMPLOYEE_TEMPLATE, avatar: `https://i.pravatar.cc/150?img=${randomImgId}` });
  };

  const handleCancelAdd = () => setNewModel(null);

  const handleSaveNew = () => {
    if (newModel) {
      setModels([{ ...newModel, id: new Date().getTime() }, ...models]);
      setNewModel(null);
    }
  };

  const handleEdit = (model: Model) => setEditingModel({ ...model });

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
