import { useMarketingManager } from '../../../hooks/useMarketingManager';
import { MarketingModel } from '../../../types/model';
import MarketingTableRow from './MarketingTableRow';
import MarketingTableFormRow from './MarketingTableFormRow';

interface MarketingTableProps {
  initialData: MarketingModel[];
}

const MarketingTable: React.FC<MarketingTableProps> = ({ initialData }) => {
  const {
    data,
    editingRecord,
    isEditing,
    setEditingRecord,
    handleEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
  } = useMarketingManager(initialData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Маркетинг</h1>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="align-middle">
                <th>ФИО</th>
                <th>ID</th>
                <th>Дата прихода</th>
                <th>Дата ухода</th>
                <th>Дней</th>
                <th>Причина</th>
                <th>Контакт</th>
                <th>Место</th>
                <th>Трафик</th>
                <th>Источник</th>
                <th>Админ (Маркетинг)</th>
                <th>Сарафан</th>
                <th>Супер топ</th>
                <th>Топ админ</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {data.map((record) =>
                editingRecord?.id === record.id ? (
                  <MarketingTableFormRow
                    key={record.id}
                    record={editingRecord}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                    setter={setEditingRecord}
                  />
                ) : (
                  <MarketingTableRow
                    key={record.id}
                    isEditingOrAdding={isEditing}
                    record={record}
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

export default MarketingTable;
