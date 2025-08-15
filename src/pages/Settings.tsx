import { useState } from 'react';
import Breadcrumbs from '../components/molecules/Breadcrumbs';
import SettingsIcon from '../components/atoms/icons/Settings';
import KeyIcon from '../components/atoms/icons/Key';
import PaperClipIcon from '../components/atoms/icons/PaperClip';

const Settings: React.FC = () => {
  // Mock data for settings fields
  const [settingsData, setSettingsData] = useState({
    siteName: 'Lumens CRM',
    language: 'ru',
    currency: 'usd',
    twoFactorAuth: true,
    apiKey: '********************************',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettingsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSettingsData((prev) => ({ ...prev, [name]: checked }));
  };

  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Настройки', to: '/settings' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <div className="p-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body space-y-6">
            {/* General Settings Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="card-title flex items-center gap-2">
                  <SettingsIcon className="w-6 h-6" /> Общие настройки
                </h2>
                <p className="text-base-content/70">
                  Основные настройки вашего рабочего пространства.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Название сайта</span>
                  </label>
                  <input
                    type="text"
                    name="siteName"
                    value={settingsData.siteName}
                    onChange={handleInputChange}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Язык</span>
                  </label>
                  <select
                    name="language"
                    value={settingsData.language}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div className="form-control sm:col-span-2">
                  <label className="label">
                    <span className="label-text">Валюта</span>
                  </label>
                  <select
                    name="currency"
                    value={settingsData.currency}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="rub">RUB (₽)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Security Settings Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="card-title flex items-center gap-2">
                  <KeyIcon className="w-6 h-6" /> Безопасность
                </h2>
                <p className="text-base-content/70">Управляйте настройками безопасности.</p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Двухфакторная аутентификация</span>
                    <input
                      type="checkbox"
                      name="twoFactorAuth"
                      checked={settingsData.twoFactorAuth}
                      onChange={handleToggleChange}
                      className="toggle toggle-primary"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-outline">Сменить пароль</button>
                </div>
                <div className="form-control sm:col-span-2">
                  <button className="btn btn-outline btn-warning">Завершить все сеансы</button>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* API Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="card-title flex items-center gap-2">
                  <PaperClipIcon className="w-6 h-6" /> Интеграции
                </h2>
                <p className="text-base-content/70">Управляйте API ключами для интеграций.</p>
              </div>
              <div className="md:col-span-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">API Ключ</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      readOnly
                      value={settingsData.apiKey}
                      className="input input-bordered join-item w-full"
                    />
                    <button className="btn btn-primary join-item">Скопировать</button>
                  </div>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-outline">Сгенерировать новый ключ</button>
                </div>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary">Сохранить настройки</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
