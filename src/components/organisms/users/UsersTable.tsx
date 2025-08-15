import { useUsersManager } from '../../../hooks/useUsersManager';
import { UserModel } from '../../../types/model';
import UsersTableRow from './UsersTableRow';
import UsersTableFormRow from './UsersTableFormRow';

interface UsersTableProps {
  initialData: UserModel[];
}

const UsersTable: React.FC<UsersTableProps> = ({ initialData }) => {
  const {
    data,
    editingRecord,
    setEditingRecord,
    handleEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
  } = useUsersManager(initialData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Пользователи</h1>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="align-middle">
                <th>ID</th>
                <th>Имя пользователя</th>
                <th>Роль</th>
                <th>Последний вход</th>
                <th>Баланс</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {data.map((record) =>
                editingRecord?.id === record.id ? (
                  <UsersTableFormRow
                    key={record.id}
                    record={editingRecord}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                    setter={setEditingRecord}
                  />
                ) : (
                  <UsersTableRow
                    key={record.id}
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

export default UsersTable;
