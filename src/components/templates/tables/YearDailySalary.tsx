import DataTable, { DataTableColumnDefinition } from '@/components/molecules/tables/DataTable';
import colorizeCellByValue from './shared.ts';
import { generateYearDailySalaries } from './generateFakeData.ts';

type DayNumber =
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
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export type MonthDailySalary = {
  id: number;
  operatorName: string;
  predicate: number;
} & {
  [K in `dayNumber_${DayNumber}`]: number | null;
};

const yearDailySalaryTableData: MonthDailySalary[] = generateYearDailySalaries(23);

const YearDailySalaryTable: React.FC = () => {
  const monthDailySalariesColumns = (
    daysInMonth: number,
    startingDayOfWeek: number
  ): DataTableColumnDefinition<MonthDailySalary>[] => {
    const columns: DataTableColumnDefinition<MonthDailySalary>[] = [
      {
        accessorKey: 'operatorName',
        header: 'Оператор',
        setCellClassName: (): string => 'font-bold',
        asTh: true,
      },
      {
        accessorKey: 'predicate',
        header: 'Прогноз',
        setCellClassName: (): string => 'font-bold',
      },
    ];

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = daysOfWeek[(startingDayOfWeek + i - 2) % 7];
      columns.push({
        header: dayOfWeek,
        columns: [
          {
            accessorKey: `dayNumber_${i}` as keyof MonthDailySalary,
            header: `${i}`,
            className: '',
            setCellClassName: (value: string | number | null, _: MonthDailySalary): string =>
              colorizeCellByValue(value),
          },
        ],
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
      columns={monthDailySalariesColumns(30, 1)}
      data={yearDailySalaryTableData}
      footerData={footerData}
    />
  );
};

export default YearDailySalaryTable;
