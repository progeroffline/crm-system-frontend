import { MarketingModel } from '../../../types/model';
import TrashIcon from '@/components/atoms/icons/Trash';
import PencilIcon from '../../atoms/icons/Pencil';

interface MarketingTableRowProps {
  record: MarketingModel;
  isEditingOrAdding: boolean;
  onEdit: (record: MarketingModel) => void;
  onDelete: (record: number) => void;
}

const statusColors: Record<string, string> = {
  работает: 'badge-success',
  уволен: 'badge-error',
  отдыхает: 'badge-info',
  болеет: 'badge-warning',
};

const MarketingTableRow: React.FC<MarketingTableRowProps> = ({
  record,
  isEditingOrAdding,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="hover align-middle">
      <td>{record.fullName}</td>
      <td>{record.id}</td>
      <td>{record.hireDate}</td>
      <td>{record.fireDate || '---'}</td>
      <td>{record.workDays}</td>
      <td>{record.reasonForLeaving || '---'}</td>
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
      <td>{record.trafficSource}</td>
      <td>{record.source}</td>
      <td>{record.administrator}</td>
      <td>{record.referral ? `${record.referral.fullName} (ID: ${record.referral.id})` : '---'}</td>
      <td>{record.superTopAdmin || '---'}</td>
      <td>{record.topAdmin || '---'}</td>
      <td>
        <span className={`badge w-full ${statusColors[record.status]}`}>{record.status}</span>
      </td>
      <td>
        <div className="flex flex-col items-center align-center">
          <button className="btn btn-info btn-xs mb-1 w-full" onClick={() => onEdit(record)}>
            <PencilIcon className="h-4 w-4" />
          </button>
          <button
            className="btn btn-error btn-xs w-full"
            onClick={() => onDelete(record.id)}
            disabled={isEditingOrAdding}
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MarketingTableRow;
