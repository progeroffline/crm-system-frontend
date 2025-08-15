import { useState } from 'react';
import EyeIcon from '../../atoms/icons/Eye';
import KeyIcon from '../../atoms/icons/Key';
import InputFieldProps from './DefaultProps';

const PasswordInputField: React.FC<InputFieldProps> = ({
  label,
  validationText,
  placeholder,
  onChange,
}) => {
  const [passwordInputFiledType, passwordInputFiledTypeSet] = useState('password');
  return (
    <div>
      <legend className="w-full fieldset-legend text-base">{label}</legend>
      <label className="w-full input validator">
        <KeyIcon />
        <input type={passwordInputFiledType} placeholder={placeholder} onChange={onChange} />
        <div className="cursor-pointer">
          <EyeIcon
            onClick={() =>
              passwordInputFiledTypeSet(passwordInputFiledType === 'password' ? 'text' : 'password')
            }
          />
        </div>
      </label>
      <p className="validator-hint hidden">{validationText}</p>
    </div>
  );
};

const PasswordWithMaskInputField: React.FC<InputFieldProps> = ({
  label,
  validationText,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <legend className="w-full fieldset-legend text-base">{label}</legend>
      <label className="w-full input validator">
        <KeyIcon />
        <input
          type="password"
          required
          placeholder={placeholder}
          onChange={onChange}
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <div className="cursor-pointer">
          <EyeIcon />
        </div>
      </label>
      <p className="validator-hint hidden">{validationText}</p>
    </div>
  );
};

export { PasswordInputField, PasswordWithMaskInputField };
