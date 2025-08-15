import { LeavingModel } from '../../../types/model';

interface LeavingsTableFormRowProps {
  record: LeavingModel;
  onSave: () => void;
  onCancel: () => void;
  setter: React.Dispatch<React.SetStateAction<LeavingModel | null>>;
}

// This is a simplified form for demonstration. In a real app, you'd have dropdowns for admins etc.
const LeavingsTableFormRow: React.FC<LeavingsTableFormRowProps> = ({
  record,
  onSave,
  onCancel,
  setter,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setter((prev) => {
      if (!prev) return null;
      if (name.startsWith('balance.')) {
        const balanceField = name.split('.')[1];
        const newBalance = { ...prev.balance, [balanceField]: Number(value) };
        return { ...prev, balance: newBalance };
      }
      return { ...prev, [name]: value };
    });
  };

  return (
    <tr className="bg-base-200 align-middle">
      <td>
        <input
          type="text"
          name="fullName"
          className="input input-bordered input-sm w-full"
          value={record.fullName}
          onChange={handleInputChange}
        />
      </td>
      <td>{record.id}</td>
      <td>
        <input
          type="date"
          name="hireDate"
          className="input input-bordered input-sm w-full"
          value={record.hireDate}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="date"
          name="fireDate"
          className="input input-bordered input-sm w-full"
          value={record.fireDate}
          onChange={handleInputChange}
        />
      </td>
      <td>{record.workDays}</td>
      <td>
        <input
          type="text"
          name="leavingType"
          className="input input-bordered input-sm w-full"
          value={record.leavingType}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="contactTelegram"
          className="input input-bordered input-sm w-full"
          value={record.contactTelegram}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="location"
          className="input input-bordered input-sm w-full"
          value={record.location}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="superTopAdmin"
          className="input input-bordered input-sm w-full"
          value={record.superTopAdmin || ''}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="topAdmin"
          className="input input-bordered input-sm w-full"
          value={record.topAdmin || ''}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="administrator"
          className="input input-bordered input-sm w-full"
          value={record.administrator || ''}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="translator"
          className="input input-bordered input-sm w-full"
          value={record.translator || ''}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="balance.current"
          className="input input-bordered input-sm w-full"
          value={record.balance.current}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="balance.previous"
          className="input input-bordered input-sm w-full"
          value={record.balance.previous}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="balance.позапрошлый"
          className="input input-bordered input-sm w-full"
          value={record.balance.позапрошлый}
          onChange={handleInputChange}
        />
      </td>
      <td>{record.balance.total}</td>
      <td>
        <div className="flex flex-col items-center gap-2">
          <button className="btn btn-success btn-xs" onClick={onSave}>
            Сохранить
          </button>
          <button className="btn btn-ghost btn-xs" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </td>
    </tr>
  );
};

export default LeavingsTableFormRow;
