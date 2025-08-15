import React from 'react';
import Pencil from '../../atoms/icons/Pencil';
import Trash from '../../atoms/icons/Trash';
import { Model } from '../../../types/model';

interface ModelsTableRowProps {
  model: Model;
  isEditingOrAdding: boolean;
  onEdit: (model: Model) => void;
  onDelete: (id: number | null) => void;
}

const statusColors: Record<string, string> = {
  работает: 'badge-success',
  ушла: 'badge-warning',
  блок: 'badge-error',
  удалена: 'badge-neutral',
};

const BooleanDisplay: React.FC<{ value: boolean }> = ({ value }) => (
  <input type="checkbox" checked={value} readOnly disabled className="checkbox checkbox-sm" />
);

const ModelsTableRow: React.FC<ModelsTableRowProps> = ({
  model,
  isEditingOrAdding,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="hover align-middle">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={model.avatar} alt="Avatar" />
          </div>
        </div>
      </td>
      <td>{model.ml}</td>
      <td>
        <BooleanDisplay value={model.mailing} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.customs} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.videoCalls} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.minEnglish} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.sexWithMan} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.vaginalMasturbationToys} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.vaginalMasturbationFingers} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.analMasturbationToys} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.analMasturbationFingers} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.oralSexToy} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.squirtVideo} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.feet} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.peeVideo} />
      </td>
      <td>
        <BooleanDisplay value={model.questionnaire.periodVideo} />
      </td>
      <td>{model.questionnaire.sexToys}</td>
      <td>{model.questionnaire.notReadyFor}</td>
      <td>
        <span className={`w-full p-2 badge text-center ${statusColors[model.status]}`}>
          {model.status}
        </span>
      </td>
      <td className="flex flex-col gap-1">
        <button
          className="btn btn-info btn-xs"
          onClick={() => onEdit(model)}
          disabled={isEditingOrAdding}
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          className="btn btn-error btn-xs"
          onClick={() => onDelete(model.id)}
          disabled={isEditingOrAdding}
        >
          <Trash className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
};

export default ModelsTableRow;
