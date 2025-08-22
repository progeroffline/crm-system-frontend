import Pencil from '../../atoms/icons/Pencil';
import Trash from '../../atoms/icons/Trash';
import { UserModel } from '../../../types/model';

interface UsersTableRowProps {
  record: UserModel;
  onEdit: (record: UserModel) => void;
  onDelete: (id: number) => void;
}

const statusColors: Record<string, string> = {
  superAdmin: 'badge-secondary',
  topAdmin: 'badge-primary',
  admin: 'badge-accent',
  operator: 'badge-info',
  hr: 'badge-warning',
  translator: 'badge-neutral',
  user: 'badge-base',
};

const UsersTableRow: React.FC<UsersTableRowProps> = ({ record, onEdit, onDelete }) => {
  return (
    <tr className="hover align-middle">
      <td>{record.id.toFixed(0)}</td>
      <td>{record.username}</td>
      <td>
        <span className={`badge uppercase ${statusColors[record.role]}`}>{record.role}</span>
      </td>
      <td>{new Date(record.lastLogin).toLocaleString()}</td>
      <td>${record.balance.toFixed(2)}</td>
      <td>
        <div className="flex flex-row gap-1">
          <button className="btn btn-soft btn-xs mb-1" onClick={() => onEdit(record)}>
            <Pencil className="h-4 w-4" />
          </button>
          <button className="btn btn-soft btn-error btn-xs" onClick={() => onDelete(record.id)}>
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersTableRow;
