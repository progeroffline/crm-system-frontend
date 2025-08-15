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
  const [passwordInputFiledType, passwordInputFiledTypeSet] = useState('password');
  return (
    <div>
      <legend className="w-full fieldset-legend text-base">{label}</legend>
      <label className="w-full input validator">
        <KeyIcon />
        <input
          type={passwordInputFiledType}
          required
          placeholder={placeholder}
          onChange={onChange}
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Должно быть более 8 символов, включая цифры, строчные буквы, заглавные буквы"
        />
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

export { PasswordInputField, PasswordWithMaskInputField };
