import LogotypeComponent from '@/components/branding/Logotype';
import ThemeControlsComponent from '@/components/controls/ThemeController';
import PasswordInputField from '@/components/inputs/Password';
import UsernameInputField from '@/components/inputs/Username';

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center p-2">
      <div className="w-xl min-h-1/2 flex flex-col justify-around p-6 border rounded-2xl border-base-300">
        <div className="flex justify-between items-center">
          <LogotypeComponent />
          <ThemeControlsComponent />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-md font-bold">Login</h3>
          <p className="text-center">
            Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <fieldset className="w-full fieldset">
            <UsernameInputField placeholder="Username" />
            <PasswordInputField placeholder="Password" />
          </fieldset>
        </div>
        <div className="w-full">
          <button className="btn btn-block">Login in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
