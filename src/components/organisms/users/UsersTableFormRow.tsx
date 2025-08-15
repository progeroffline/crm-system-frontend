import { UserModel, UserRole } from '../../../types/model';

interface UsersTableFormRowProps {
  record: UserModel;
  onSave: () => void;
  onCancel: () => void;
  setter: React.Dispatch<React.SetStateAction<UserModel | null>>;
}

const userRoles: UserRole[] = ['superAdmin', 'topAdmin', 'admin', 'operator', 'hr', 'translator'];

const UsersTableFormRow: React.FC<UsersTableFormRowProps> = ({
  record,
  onSave,
  onCancel,
  setter,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setter((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  return (
    <tr className="bg-base-200 align-middle">
      <td>{record.id.toFixed(0)}</td>
      <td>
        <input
          type="text"
          name="username"
          className="input input-bordered input-sm w-full"
          value={record.username}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <select
          name="role"
          className="select select-bordered select-sm w-full"
          value={record.role}
          onChange={handleInputChange}
        >
          {userRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </td>
      <td>{new Date(record.lastLogin).toLocaleString()}</td>
      <td>
        <input
          type="number"
          name="balance"
          className="input input-bordered input-sm w-full"
          value={record.balance}
          onChange={handleInputChange}
        />
      </td>
      <td className="flex flex-col">
        <button className="btn btn-success btn-xs" onClick={onSave}>
          Сохранить
        </button>
        <button className="btn btn-ghost btn-xs" onClick={onCancel}>
          Отмена
        </button>
      </td>
    </tr>
  );
};

export default UsersTableFormRow;
