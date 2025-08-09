import { backednApiInterface } from '@/api';
import LogotypeLabel from '@/components/branding/Logotype';
import LogotypeImage from '@/components/branding/LogotypeImage';
import ThemeControls from '@/components/controls/ThemeController';
import EnterIcon from '@/components/icons/Enter';
import { PasswordWithMaskInputField } from '@/components/inputs/Password';
import UsernameInputField from '@/components/inputs/Username';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  const navigate = useNavigate();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: _, status } = await backednApiInterface.auth.register({ username, password });
    if (status !== 201) return;

    return navigate('/login');
  };

  return (
    <div className="h-screen flex flex-col items-center p-2 ">
      <LogotypeImage className="w-xs" />
      <form
        onSubmit={handleLogin}
        className="w-lg min-h-1/2 flex flex-col justify-between p-6 border rounded-2xl border-gray-500"
      >
        <div className="flex justify-between items-center">
          <LogotypeLabel variant="lg" />
          <ThemeControls />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center mb-6">
            <h3 className="text-3xl font-bold mb-2">Создать аккаунт</h3>
            <p className="text-base text-center">
              Создайте аккаунт для Lumens CRM, чтоб получить доступ к функционалу
            </p>
          </div>
          <fieldset className="w-full fieldset">
            <UsernameInputField
              label="Ваш юзернейм"
              placeholder="Username"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
            <PasswordWithMaskInputField
              label="Ваш пароль"
              placeholder="Password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <PasswordWithMaskInputField
              label="Повторите свой пароль"
              placeholder="Password"
              value={repeatedPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="w-full flex flex-col items-center">
          <button className="btn btn-block btn-primary">
            Создать аккаунт
            <EnterIcon />
          </button>
          <a className="link mt-1" href="/login">
            Войти в существующий аккаунт
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
