import { useLeavingsManager } from '../../../hooks/useLeavingsManager';
import { LeavingModel } from '../../../types/model';
import LeavingsTableRow from './LeavingsTableRow';
import LeavingsTableFormRow from './LeavingsTableFormRow';

interface LeavingsTableProps {
  initialData: LeavingModel[];
}

const LeavingsTable: React.FC<LeavingsTableProps> = ({ initialData }) => {
  const { data, editingRecord, setEditingRecord, handleEdit, handleCancelEdit, handleSaveEdit } =
    useLeavingsManager(initialData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h1 className="text-2xl font-bold">Уходы операторов</h1>
            <p className="text-base-content/70">Информация об уволенных сотрудниках и причинах ухода.</p>
        </div>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="align-middle">
                <th>ФИО</th>
                <th>ID</th>
                <th>Дата прихода</th>
                <th>Дата увольнения</th>
                <th>Дней</th>
                <th>Тип ухода</th>
                <th>Контакт</th>
                <th>Место</th>
                <th>Супер топ</th>
                <th>Топ админ</th>
                <th>Админ</th>
                <th>Переводчик</th>
                <th>Текущий</th>
                <th>Прошлый</th>
                <th>Позапрошлый</th>
                <th>Всего</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {data.map((record) =>
                editingRecord?.id === record.id ? (
                  <LeavingsTableFormRow
                    key={record.id}
                    record={editingRecord}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                    setter={setEditingRecord}
                  />
                ) : (
                  <LeavingsTableRow key={record.id} record={record} onEdit={handleEdit} />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeavingsTable;
