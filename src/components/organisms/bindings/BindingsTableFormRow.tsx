import { AssignedModel } from '../../../types/model';
import { dataPools } from '../../templates/tables/generateFakeData';

interface BindingsTableFormRowProps {
  record: AssignedModel;
  onSave: () => void;
  onCancel: () => void;
  setter: React.Dispatch<React.SetStateAction<AssignedModel | null>>;
}

const AdminSelect: React.FC<{
  name: keyof AssignedModel;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}> = ({ name, value, onChange, options }) => (
  <select
    name={name}
    className="select select-bordered select-sm w-full"
    value={value || ''}
    onChange={onChange}
  >
    <option value="">Не назначен</option>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

const BindingsTableFormRow: React.FC<BindingsTableFormRowProps> = ({
  record,
  onSave,
  onCancel,
  setter,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setter((prev) => (prev ? { ...prev, [e.target.name]: e.target.value } : null));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setter((prev) => (prev ? { ...prev, [e.target.name]: e.target.checked } : null));
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setter((prev) => (prev ? { ...prev, avatar: reader.result as string } : null));
      reader.readAsDataURL(file);
    }
  };

  return (
    <tr className="bg-base-200 align-middle">
      <td>
        <div className="tooltip tooltip-bottom" data-tip="Нажмите для загрузки фото">
          <label className="cursor-pointer">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12 ring ring-primary ring-offset-base-100 ring-offset-2 hover:opacity-75 transition-opacity">
                <img src={record.avatar} alt="Upload Avatar" />
              </div>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </label>
        </div>
      </td>
      <td>
        <input
          type="text"
          name="ml"
          placeholder="ML"
          className="input input-bordered input-sm w-full"
          value={record.ml}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="total"
          placeholder="Total"
          className="input input-bordered input-sm w-full"
          value={record.total}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="forecast"
          placeholder="Forecast"
          className="input input-bordered input-sm w-full"
          value={record.forecast}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="date"
          name="registrationDate"
          className="input input-bordered input-sm w-full"
          value={record.registrationDate}
          onChange={handleInputChange}
        />
      </td>

      <td>
        <AdminSelect
          name="operator"
          value={record.operator}
          onChange={handleInputChange}
          options={dataPools.operators}
        />
      </td>
      <td>
        <AdminSelect
          name="admin"
          value={record.admin}
          onChange={handleInputChange}
          options={dataPools.admins}
        />
      </td>
      <td>
        <AdminSelect
          name="superAdmin"
          value={record.superAdmin}
          onChange={handleInputChange}
          options={dataPools.superAdmins}
        />
      </td>
      <td>
        <AdminSelect
          name="topAdmin"
          value={record.topAdmin}
          onChange={handleInputChange}
          options={dataPools.topAdmins}
        />
      </td>
      <td>
        <select
          name="status"
          className="select select-bordered select-sm w-full"
          value={record.status}
          onChange={handleInputChange}
        >
          <option>работает</option>
          <option>ушла</option>
          <option>блок</option>
          <option>удалена</option>
        </select>
      </td>
      <td>
        <input
          type="checkbox"
          name="mailing"
          className="checkbox checkbox-sm"
          checked={record.mailing}
          onChange={handleCheckboxChange}
        />
      </td>
      <td className="flex flex-col items-center gap-2">
        <button className="btn btn-success btn-xs" onClick={onSave}>
          Сохранить
        </button>
        <button className="btn btn-ghost btn-xs w-full" onClick={onCancel}>
          Отмена
        </button>
      </td>
    </tr>
  );
};

export default BindingsTableFormRow;
