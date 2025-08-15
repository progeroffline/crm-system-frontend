import Pencil from '../../atoms/icons/Pencil';
import { AssignedModel } from '../../../types/model';

interface BindingsTableRowProps {
  model: AssignedModel;
  isEditingOrAdding: boolean;
  onEdit: (model: AssignedModel) => void;
  onDelete: (id: number | null) => void;
}

const statusColors: Record<string, string> = {
  работает: 'badge-success',
  ушла: 'badge-warning',
  блок: 'badge-error',
  удалена: 'badge-neutral',
};

const BooleanDisplay: React.FC<{ value: boolean }> = ({ value }) => (
  <div
    className="flex flex-row justify-center align-center items-center lg:tooltip"
    style={{
      display: 'flex',
    }}
    data-tip={value ? 'Работает' : 'Не работает'}
  >
    <div className="inline-grid *:[grid-area:1/1]">
      <div
        className={`status status-lg animate-ping ${value ? 'status-success' : 'status-error'}`}
      ></div>
      <div className={`status status-lg ${value ? 'status-success' : 'status-error'}`}></div>
    </div>
  </div>
);

const BindingsTableRow: React.FC<BindingsTableRowProps> = ({
  model,
  isEditingOrAdding,
  onEdit,
}) => {
  return (
    <tr className="hover:bg-base-300">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={model.avatar} alt="Avatar" />
          </div>
        </div>
      </td>
      <td>{model.ml}</td>
      <td>{model.total}</td>
      <td>{model.forecast}</td>
      <td>{model.registrationDate}</td>
      <td>{model.operator || '---'}</td>
      <td>{model.admin || '---'}</td>
      <td>{model.superAdmin || '---'}</td>
      <td>{model.topAdmin || '---'}</td>
      <td>
        <span className={`badge w-full ${statusColors[model.status]}`}>{model.status}</span>
      </td>
      <td>
        <BooleanDisplay value={model.mailing} />
      </td>
      <td>
        <div className="flex flex-row items-center justify-center">
          <button
            className="btn btn-info btn-xs w-full"
            onClick={() => onEdit(model)}
            disabled={isEditingOrAdding}
          >
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BindingsTableRow;
