import EyeIcon from '../icons/Eye';
import KeyIcon from '../icons/Key';
import InputFieldProps from './DefaultProps';

const PasswordInputField: React.FC<InputFieldProps> = ({ label, validationText, placeholder }) => {
  return (
    <>
      <legend className="w-full fieldset-legend mt-2">{label}</legend>
      <label className="w-full input validator">
        <KeyIcon />
        <input
          type="password"
          required
          placeholder={placeholder}
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <div className="cursor-pointer">
          <EyeIcon />
        </div>
      </label>
      <p className="validator-hint hidden">{validationText}</p>
    </>
  );
};

export default PasswordInputField;
