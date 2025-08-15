import { useModelsManager } from '../../../hooks/useModelsManager';
import { Model } from '../../../types/model';
import ModelsTableRow from './ModelsTableRow';
import ModelsTableFormRow from './ModelsTableFormRow';

interface ModelsTableProps {
  initialModels: Model[];
}

const ModelsTable: React.FC<ModelsTableProps> = ({ initialModels }) => {
  const {
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
  } = useModelsManager(initialModels);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Модели</h1>
          <p className="text-base-content/70">Управление моделями, их анкетами и основной информацией.</p>
        </div>
        <button className="btn btn-primary" onClick={handleAdd} disabled={isAdding || isEditing}>
          Добавить модель
        </button>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg max-h-300">
          <table className="table table-compact">
            <thead>
              <tr className="align-middle">
                <th>Фото</th>
                <th>ФИО</th>
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
