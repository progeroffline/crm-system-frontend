import CurveArrowUpIcon from '@/components/atoms/icons/CurveArrowUp';
import DollarIcon from '@/components/atoms/icons/Dollar';
import SearchIcon from '@/components/atoms/icons/Search';
import SearchInputField from '@/components/molecules/inputs/Search';
import Stats from '@/components/molecules/StatsBadge';
import MonthDailyBalanceTable from '@/components/templates/tables/MonthDailyBalance';
import MonthDailySalaryTable from '@/components/templates/tables/MonthDailySalary';
import MonthDailySalaryWithTimeShiftTable from '@/components/templates/tables/MonthDailySalaryWithTimeShift';
import YearDailySalaryTableData from '@/components/templates/tables/YearDailySalary';
import 'react-datepicker/dist/react-datepicker.css';

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
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 items-end">
        <SearchInputField
          label="Выберите период"
          className="w-full"
          placeholder="Период..."
          suggestions={suggestions}
        />
        <SearchInputField
          label="Оператор"
          className="w-full"
          placeholder="Выберите оператора..."
          suggestions={suggestions}
        />
        <SearchInputField
          className="w-full"
          label="Смена"
          placeholder="Выберите смену..."
          suggestions={suggestions}
        />
        <button className="btn btn-neutral col-span-full lg:col-span-1">
          <SearchIcon className="size-4" />
          Поиск
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <Stats
          className={'w-full'}
          icon={<DollarIcon />}
          title="Баланс"
          value={10500}
          description="Ваш заработок за этот месяц"
        />
        <Stats
          className={'w-full'}
          icon={<DollarIcon />}
          title="Прогноз"
          value={9304}
          descriptionIcon={<CurveArrowUpIcon className="svg-accent" />}
          description="Прогноз заработка на следующий месяц"
        />
      </div>
      <div className="mt-4">
        <div className="text-left bg-base-100 p-1 rounded-box shadow p-2">
          <h1 className="text-2xl font-bold ml-2 mb-2 text-center">Балансы</h1>
          <MonthDailyBalanceTable />
        </div>
        <div className="mt-4 text-left">
          <h1 className="text-2xl font-bold text-center">Статистика</h1>
          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="monthStatsTabs"
              className="tab"
              aria-label="За год"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <YearDailySalaryTableData />
            </div>
            <input type="radio" name="monthStatsTabs" className="tab" aria-label="За месяц" />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <MonthDailySalaryTable />
            </div>
            <input
              type="radio"
              name="monthStatsTabs"
              className="tab"
              aria-label="За месяц по сменам"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <MonthDailySalaryWithTimeShiftTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
