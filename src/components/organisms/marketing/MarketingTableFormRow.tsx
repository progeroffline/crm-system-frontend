import { MarketingModel } from '../../../types/model';
import { dataPools } from '../../templates/tables/generateFakeData';

interface MarketingTableFormRowProps {
  record: MarketingModel;
  onSave: () => void;
  onCancel: () => void;
  setter: React.Dispatch<React.SetStateAction<MarketingModel | null>>;
}

const FormSelect: React.FC<{
  name: keyof MarketingModel;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: (string | null)[];
  placeholder: string;
}> = ({ name, value, onChange, options, placeholder }) => (
  <select
    name={name}
    className="select select-bordered select-sm w-full"
    value={value || ''}
    onChange={onChange}
  >
    <option value="">{placeholder}</option>
    {options.map(
      (opt) =>
        opt && (
          <option key={opt} value={opt}>
            {opt}
          </option>
        )
    )}
  </select>
);

const MarketingTableFormRow: React.FC<MarketingTableFormRowProps> = ({
  record,
  onSave,
  onCancel,
  setter,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setter((prev) => (prev ? { ...prev, [e.target.name]: e.target.value || null } : null));
  };

  return (
    <tr className="bg-base-200 align-middle">
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="ФИО"
          className="input input-bordered input-sm w-full"
          value={record.fullName}
          onChange={handleInputChange}
        />
      </td>
      <td>{record.id}</td>
      <td>
        <FormSelect
          name="status"
          value={record.status}
          onChange={handleInputChange}
          options={['работает', 'уволен', 'отдыхает', 'болеет']}
          placeholder="Статус"
        />
      </td>
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
          value={record.fireDate || ''}
          onChange={handleInputChange}
        />
      </td>
      <td>{record.workDays}</td>
      <td>
        <input
          type="text"
          name="reasonForLeaving"
          placeholder="Причина"
          className="input input-bordered input-sm w-full"
          value={record.reasonForLeaving || ''}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="contactTelegram"
          placeholder="Telegram"
          className="input input-bordered input-sm w-full"
          value={record.contactTelegram}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <FormSelect
          name="location"
          value={record.location}
          onChange={handleInputChange}
          options={dataPools.locations}
          placeholder="Место"
        />
      </td>
      <td>
        <FormSelect
          name="trafficSource"
          value={record.trafficSource}
          onChange={handleInputChange}
          options={dataPools.trafficSources}
          placeholder="Трафик"
        />
      </td>
      <td>
        <FormSelect
          name="source"
          value={record.source}
          onChange={handleInputChange}
          options={dataPools.sources}
          placeholder="Источник"
        />
      </td>
      <td>
        <FormSelect
          name="administrator"
          value={record.administrator}
          onChange={handleInputChange}
          options={dataPools.marketingAdmins}
          placeholder="Админ"
        />
      </td>
      <td>---</td>
      <td>
        <FormSelect
          name="superTopAdmin"
          value={record.superTopAdmin}
          onChange={handleInputChange}
          options={dataPools.superAdmins}
          placeholder="Супер топ"
        />
      </td>
      <td>
        <FormSelect
          name="topAdmin"
          value={record.topAdmin}
          onChange={handleInputChange}
          options={dataPools.topAdmins}
          placeholder="Топ админ"
        />
      </td>
      <td className="flex gap-2">
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

export default MarketingTableFormRow;
