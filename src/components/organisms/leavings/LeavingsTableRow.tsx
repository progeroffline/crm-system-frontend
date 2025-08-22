import Pencil from '../../atoms/icons/Pencil';
import { LeavingModel } from '../../../types/model';
import { formatCell } from '@/lib/utils';

interface LeavingsTableRowProps {
  record: LeavingModel;
  onEdit: (record: LeavingModel) => void;
}

const LeavingsTableRow: React.FC<LeavingsTableRowProps> = ({ record, onEdit }) => {
  return (
    <tr className="hover align-middle">
      <td>{record.fullName}</td>
      <td>{record.id}</td>
      <td>{record.hireDate}</td>
      <td>{record.fireDate}</td>
      <td>{record.workDays}</td>
      <td>{record.leavingType}</td>
      <td>
        <a
          href={`https://t.me/${record.contactTelegram}`}
          target="_blank"
          rel="noreferrer"
          className="link link-primary"
        >
          {record.contactTelegram}
        </a>
      </td>
      <td>{record.location}</td>
      <td>{record.superTopAdmin || '---'}</td>
      <td>{record.topAdmin || '---'}</td>
      <td>{record.administrator || '---'}</td>
      <td>{formatCell(record.balance.current)}</td>
      <td>{formatCell(record.balance.previous)}</td>
      <td>{formatCell(record.balance.позапрошлый)}</td>
      <td>{record.balance.total}</td>
      <td>
        <div className="flex flex-row items-center justify-center">
          <button className="btn btn-soft btn-xs" onClick={() => onEdit(record)}>
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default LeavingsTableRow;
