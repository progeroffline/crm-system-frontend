import Stats from '@/components/molecules/StatsBadge';
import CurveArrowUp from '@/components/atoms/icons/CurveArrowUp';
import DollarIcon from '@/components/atoms/icons/Dollar';
import SearchIcon from '@/components/atoms/icons/Search';
import SearchInputField from '@/components/molecules/inputs/Search';
import MonthDailySalaryTable from '@/components/templates/tables/MonthDailySalary';
import MonthDailyBalanceTable from '@/components/templates/tables/MonthDailyBalance';
import DateRangePickerField from '@/components/organisms/DateRangePicker';

const Statistics: React.FC = () => {
  const suggestions: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];

  return (
    <div className="w-full p-4">
      <div className="flex flex-row w-1/2 items-end justify-between pr-2">
        <DateRangePickerField
          label="Выберите период"
          confirmButtonLabel="Подтвердить выбор"
          onClickToConfirmButton={(e) => console.log(e)}
        />
        <SearchInputField
          label="Оператор"
          placeholder="Выберите оператора..."
          className="mr-2"
          suggestions={suggestions}
        />
        <SearchInputField
          label="Смена"
          placeholder="Выберите смену..."
          className="mr-2"
          suggestions={suggestions}
        />
        <button className="btn btn-primary">
          <SearchIcon />
          Поиск
        </button>
      </div>
      <div className="flex flex-row mt-4">
        <Stats
          className={'mr-4 flex-1'}
          icon={<DollarIcon />}
          title="Баланс"
          value={10500}
          description="Ваш заработок за этот месяц"
        />
        <Stats
          className={'flex-1'}
          icon={<DollarIcon />}
          title="Прогноз"
          value={9304}
          descriptionIcon={<CurveArrowUp />}
          description="Прогноз заработка на следующий месяц"
        />
      </div>
      <div className="mt-4">
        <div className="text-center">
          <span className="text-xl font-bold">Балансы</span>
          <MonthDailyBalanceTable></MonthDailyBalanceTable>
        </div>
        <div className="mt-4 text-center">
          <span className="text-xl font-bold">Статистика</span>
          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="monthStatsTabs"
              className="tab"
              aria-label="За год"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <MonthDailySalaryTable></MonthDailySalaryTable>
            </div>
            <input
              type="radio"
              name="monthStatsTabs"
              className="tab"
              aria-label="За месяц"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <MonthDailySalaryTable></MonthDailySalaryTable>
            </div>
            <input
              type="radio"
              name="monthStatsTabs"
              className="tab"
              aria-label="За месяц по сменам"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <MonthDailySalaryTable></MonthDailySalaryTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
