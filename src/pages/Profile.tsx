import React from 'react';
import Breadcrumbs from '../components/molecules/Breadcrumbs';
import { useAuth } from '../contexts/AuthContext';
import UserIcon from '../components/atoms/icons/User';
import BellIcon from '@/components/atoms/icons/BellIcon';
import CalendarDaysIcon from '@/components/atoms/icons/CalendarDays';

const Profile: React.FC = () => {
  const { user } = useAuth();

  // Mock data for fields not in user object
  const [profileData, setProfileData] = React.useState({
    fullName: user?.username || 'Anonymous',
    username: user?.username || 'anonymous',
    email: `${user?.username || 'anonymous'}@example.com`,
    mobile: '(+123) 9876543210',
    notificationChannel: 'in-app',
    notifyOnNewOrder: 'important',
    activityUpdates: 'mention',
    timezone: 'asia-kolkata',
    datetimeFormat: '12-hour',
    firstDayOfWeek: 'sunday',
    avatar: `https://i.pravatar.cc/150?u=${user?.id || 'default'}`,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, avatar: reader.result as string }));
        (document.getElementById('avatar_modal') as HTMLDialogElement)?.close();
      };
      reader.readAsDataURL(file);
    }
  };

  const breadcrumbPaths = [
    { name: 'Главная', to: '/' },
    { name: 'Профиль', to: '/profile' },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />
      <div className="p-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body space-y-6">
            {/* User Profile Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="card-title flex items-center gap-2">
                  <UserIcon className="w-6 h-6" /> Профиль
                </h2>
                <p className="text-base-content/70">
                  Управление вашим профилем, аватаром и настройками.
                </p>
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 items-center">
                <div className="tooltip tooltip-right" data-tip="Нажмите, чтобы изменить">
                  <div
                    className="avatar"
                    onClick={() =>
                      (document.getElementById('avatar_modal') as HTMLDialogElement)?.showModal()
                    }
                  >
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                      <img src={profileData.avatar} alt="User Avatar" />
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 grow">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">ФИО</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={profileData.fullName}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Имя пользователя</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Телефон</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={profileData.mobile}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Notifications Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="card-title flex items-center gap-2">
                  <BellIcon className="w-6 h-6" /> Уведомления
                </h2>
                <p className="text-base-content/70">Настройте ваши уведомления.</p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Канал</span>
                  </label>
                  <select
                    name="notificationChannel"
                    value={profileData.notificationChannel}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="email">Email</option>
                    <option value="in-app">In App</option>
                    <option value="sms">SMS</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Новые заказы</span>
                  </label>
                  <select
                    name="notifyOnNewOrder"
                    value={profileData.notifyOnNewOrder}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="all">Все</option>
                    <option value="important">Важные</option>
                    <option value="mention">Только @упоминания</option>
                    <option value="none">Нет</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Активность</span>
                  </label>
                  <select
                    name="activityUpdates"
                    value={profileData.activityUpdates}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="all-activity">Вся активность</option>
                    <option value="important-activity">Только важная</option>
                    <option value="mention">Только @упоминания</option>
                    <option value="none">Нет</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Time Preferences Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="card-title flex items-center gap-2">
                  <CalendarDaysIcon className="w-6 h-6" /> Настройки времени
                </h2>
                <p className="text-base-content/70">
                  Установите ваш часовой пояс и формат времени.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Часовой пояс</span>
                  </label>
                  <select
                    name="timezone"
                    value={profileData.timezone}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="america-toronto">GMT-5:00 – Toronto (EST)</option>
                    <option value="asia-kolkata">GMT+5:30 – Mumbai (IST)</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Формат даты</span>
                  </label>
                  <select
                    name="datetimeFormat"
                    value={profileData.datetimeFormat}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="12-hour">12-часовой (AM/PM)</option>
                    <option value="24-hour">24-часовой</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Первый день недели</span>
                  </label>
                  <select
                    name="firstDayOfWeek"
                    value={profileData.firstDayOfWeek}
                    onChange={handleInputChange}
                    className="select select-bordered"
                  >
                    <option value="sunday">Воскресенье</option>
                    <option value="monday">Понедельник</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary">Сохранить изменения</button>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Upload Modal */}
      <dialog id="avatar_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Выберите новый аватар</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="file-input file-input-bordered w-full mt-4"
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Закрыть</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
