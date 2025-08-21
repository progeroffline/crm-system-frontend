import DataTable, { DataTableColumnDefinition } from '@/components/molecules/tables/DataTable';
import colorizeCellByValue from './shared.ts';
import { generateYearDailySalaries } from './generateFakeData.ts';

type MonthIndex =
  0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11;

export type MonthDailySalary = {
  id: number;
  model: string;
  predicate: number;
} & {
  [K in `dayNumber_${MonthIndex}`]: number | null;
};

const yearDailySalaryTableData: MonthDailySalary[] = generateYearDailySalaries(23);

const YearDailySalaryTable: React.FC = () => {
  const monthDailySalariesColumns = (
    daysInMonth: number,
    startingDayOfWeek: number
  ): DataTableColumnDefinition<MonthDailySalary>[] => {
    const columns: DataTableColumnDefinition<MonthDailySalary>[] = [
      {
        accessorKey: 'model',
        header: 'Mодель',
        setCellClassName: (): string => 'font-bold',
        asTh: true,
      },
      {
        accessorKey: 'predicate',
        header: 'Прогноз',
        setCellClassName: (): string => 'font-bold',
      },
    ];

    const daysOfWeek = ['Январь', 'Февраль', 'Март', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = daysOfWeek[(startingDayOfWeek + i - 2) % 7];
      columns.push({
        header: dayOfWeek,
        accessorKey: `dayNumber_${i}` as keyof MonthDailySalary,
        className: '',
        setCellClassName: (value: string | number | null, _: MonthDailySalary): string =>
          colorizeCellByValue(value),
      });
    }

    return columns;
  };

  const calculateTotals = (): Partial<MonthDailySalary> => {
    const totals: Partial<MonthDailySalary> = {};

    for (let i = 1; i <= 31; i++) {
      const dayKey = `dayNumber_${i}` as keyof MonthDailySalary;
      const totalForDay = yearDailySalaryTableData.reduce((sum, currentRow) => {
        const value = currentRow[dayKey];
        return sum + (typeof value === 'number' ? value : 0);
      }, 0);

      // @ts-expect-error Key 100% exists
      totals[dayKey] = totalForDay;
    }

    return totals;
  };

  const footerData = calculateTotals();

  return (
    <DataTable
      columns={monthDailySalariesColumns(12, 1)}
      data={yearDailySalaryTableData}
      footerData={footerData}
    />
  );
};

export default YearDailySalaryTable;
