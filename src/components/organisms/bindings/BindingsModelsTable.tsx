import { useAssignedModelsManager } from '../../../hooks/useAssignedModelsManager';
import { AssignedModel } from '../../../types/model';
import BindingsTableRow from './BindingsTableRow';
import BindingsTableFormRow from './BindingsTableFormRow';

interface BindingsModelsTableProps {
  initialModels: AssignedModel[];
}

const BindingsModelsTable: React.FC<BindingsModelsTableProps> = ({ initialModels }) => {
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
  } = useAssignedModelsManager(initialModels);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Панель назначения</h1>
          <p className="text-base-content/70">Распределение моделей между администраторами и операторами.</p>
        </div>
        <button className="btn btn-primary" onClick={handleAdd} disabled={isAdding || isEditing}>
          Назначить модель
        </button>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg max-h-300">
          <table className="table table-compact w-full">
            <thead>
              <tr className="align-middle">
                <th>Фото</th>
                <th>ML</th>
                <th>Тотал</th>
                <th>Прогноз</th>
                <th>Дата рег.</th>
                <th>Супер админ</th>
                <th>Топ админ</th>
                <th>Админ</th>
                <th>Оператор 08-16</th>
                <th>Оператор 16-00</th>
                <th>Оператор 00-08</th>
                <th>Статус</th>
                <th>Рассылка</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {newModel && (
                <BindingsTableFormRow
                  record={newModel}
                  onSave={handleSaveNew}
                  onCancel={handleCancelAdd}
                  setter={setNewModel}
                />
              )}
              {models.map((model) =>
                editingModel?.id === model.id ? (
                  <BindingsTableFormRow
                    key={model.id}
                    record={editingModel}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                    setter={setEditingModel}
                  />
                ) : (
                  <BindingsTableRow
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

export default BindingsModelsTable;
