import { Model } from '../../../types/model';

interface ModelsTableFormRowProps {
  record: Model;
  onSave: () => void;
  onCancel: () => void;
  setter: React.Dispatch<React.SetStateAction<Model | null>>;
}

const ModelsTableFormRow: React.FC<ModelsTableFormRowProps> = ({
  record,
  onSave,
  onCancel,
  setter,
}) => {
  const createInputHandler =
    (setter: React.Dispatch<React.SetStateAction<Model | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setter((prev) => (prev ? { ...prev, [e.target.name]: e.target.value } : null));
  const createCheckboxHandler =
    (setter: React.Dispatch<React.SetStateAction<Model | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setter((prev) => {
        if (!prev) return null;
        if (name === 'mailing') return { ...prev, mailing: checked };
        return { ...prev, questionnaire: { ...prev.questionnaire, [name]: checked } };
      });
    };
  const createQuestionnaireTextHandler =
    (setter: React.Dispatch<React.SetStateAction<Model | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setter((prev) =>
        prev ? { ...prev, questionnaire: { ...prev.questionnaire, [name]: value } } : null
      );
    };

  const handleInputChange = createInputHandler(setter);
  const handleCheckboxChange = createCheckboxHandler(setter);
  const handleQuestionnaireTextChange = createQuestionnaireTextHandler(setter);
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
          name="fullName"
          placeholder="ФИО"
          className="input input-bordered input-sm w-full"
          value={record.fullName}
          onChange={handleInputChange}
        />
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
          type="checkbox"
          name="mailing"
          className="checkbox checkbox-sm"
          checked={record.mailing}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="customs"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.customs}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="videoCalls"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.videoCalls}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="minEnglish"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.minEnglish}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="sexWithMan"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.sexWithMan}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="vaginalMasturbationToys"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.vaginalMasturbationToys}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="vaginalMasturbationFingers"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.vaginalMasturbationFingers}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="analMasturbationToys"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.analMasturbationToys}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="analMasturbationFingers"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.analMasturbationFingers}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="oralSexToy"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.oralSexToy}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="squirtVideo"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.squirtVideo}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="feet"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.feet}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="peeVideo"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.peeVideo}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="periodVideo"
          className="checkbox checkbox-sm"
          checked={record.questionnaire.periodVideo}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="sexToys"
          placeholder="Секс игрушки"
          className="input input-bordered input-sm w-full"
          value={record.questionnaire.sexToys}
          onChange={handleQuestionnaireTextChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="notReadyFor"
          placeholder="Что не готова делать"
          className="input input-bordered input-sm w-full"
          value={record.questionnaire.notReadyFor}
          onChange={handleQuestionnaireTextChange}
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

export default ModelsTableFormRow;
