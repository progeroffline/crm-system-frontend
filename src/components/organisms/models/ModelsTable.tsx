import React, { useState } from 'react';
import ModelsTableRow from './ModelsTableRow';
import ModelsTableFormRow from './ModelsTableFormRow';

// Interfaces
interface Questionnaire {
  vaginalMasturbationToys: boolean;
  vaginalMasturbationFingers: boolean;
  analMasturbationToys: boolean;
  analMasturbationFingers: boolean;
  sexWithMan: boolean;
  oralSexToy: boolean;
  squirtVideo: boolean;
  feet: boolean;
  peeVideo: boolean;
  periodVideo: boolean;
  minEnglish: boolean;
  notReadyFor: string;
  sexToys: string;
  customs: boolean;
  videoCalls: boolean;
}

export interface Model {
  id: number | null;
  avatar: string;
  ml: string;
  status: 'работает' | 'ушла' | 'блок' | 'удалена';
  mailing: boolean;
  questionnaire: Questionnaire;
}

interface ModelsTableProps {
  initialModels: Model[];
}

// Constants
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

// Main Component
const ModelsTable: React.FC<ModelsTableProps> = ({ initialModels }) => {
  const [models, setModels] = useState<Model[]>(initialModels);
  const [newModel, setNewModel] = useState<Model | null>(null);
  const [editingModel, setEditingModel] = useState<Model | null>(null);

  const isEditing = !!editingModel;
  const isAdding = !!newModel;

  // Handlers
  const handleAdd = () => {
    const randomImgId = Math.floor(Math.random() * 70) + 1;
    setNewModel({
      ...NEW_EMPLOYEE_TEMPLATE,
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Модели</h1>
        <button className="btn btn-primary" onClick={handleAdd} disabled={isAdding || isEditing}>
          Добавить модель
        </button>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="table table-zebra w-full bg-base">
            <thead>
              <tr className="align-middle">
                <th>Фото</th>
                <th>ML</th>
                <th>Рассылка</th>
                <th>Кастомы</th>
                <th>Звонки</th>
                <th>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="Минимально говорить на английском языке"
                  >
                    Англ.
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Секс с мужчиной">
                    СМ
                  </div>
                </th>
                <th>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="Вагинальная мастурбация игрушками"
                  >
                    ВМ (и)
                  </div>
                </th>
                <th>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="Вагинальная мастурбация пальцами"
                  >
                    ВМ (п)
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Анальная мастурбация игрушками">
                    АМ (и)
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Анальная мастурбация пальцами">
                    АМ (п)
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Оральный секс с игрушкой">
                    ОС (и)
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Сквирт на видео">
                    Сквирт
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Ступни, ноги">
                    Ноги
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Помочиться на видео">
                    Моча
                  </div>
                </th>
                <th>
                  <div className="tooltip tooltip-bottom" data-tip="Видео во время критичных дней">
                    КД
                  </div>
                </th>
                <th>Игрушки</th>
                <th>Не готова</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {newModel && (
                <ModelsTableFormRow
                  record={newModel}
                  onSave={handleSaveNew}
                  onCancel={handleCancelAdd}
                  setter={setNewModel}
                />
              )}
              {models.map((model) =>
                editingModel?.id === model.id ? (
                  <ModelsTableFormRow
                    key={model.id}
                    record={editingModel}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                    setter={setEditingModel}
                  />
                ) : (
                  <ModelsTableRow
                    key={model.id}
                    model={model}
                    isEditingOrAdding={isAdding || isEditing}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModelsTable;
