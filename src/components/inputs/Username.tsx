import UserIcon from '../icons/User';
import InputFieldProps from './DefaultProps';

const UsernameInputField: React.FC<InputFieldProps> = ({ label, validationText, placeholder }) => {
  return (
    <>
      <legend className="w-full fieldset-legend mt-2">{label}</legend>
      <label className="w-full input validator">
        <UserIcon />
        <input
          type="text"
          required
          placeholder={placeholder}
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minLength={3}
          maxLength={30}
          title="Only letters, numbers or dash"
        />
      </label>
      <p className="validator-hint">{validationText}</p>
    </>
  );
};

export default UsernameInputField;
