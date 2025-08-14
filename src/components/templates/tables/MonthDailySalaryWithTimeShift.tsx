import DataTable, { DataTableColumnDefinition } from '@/components/molecules/tables/DataTable';
import monthDailySalariesJson from '@/data/statistics.json';
import colorizeCellByValue from './shared.ts';

interface MonthDailySalary {
  id: number;
  operatorName: string;
  dayNumber_1: number | null;
  dayNumber_2: number | null;
  dayNumber_3: number | null;
  dayNumber_4: number | null;
  dayNumber_5: number | null;
  dayNumber_6: number | null;
  dayNumber_7: number | null;
  dayNumber_8: number | null;
  dayNumber_9: number | null;
  dayNumber_10: number | null;
  dayNumber_11: number | null;
  dayNumber_12: number | null;
  dayNumber_13: number | null;
  dayNumber_14: number | null;
  dayNumber_15: number | null;
  dayNumber_16: number | null;
  dayNumber_17: number | null;
  dayNumber_18: number | null;
  dayNumber_19: number | null;
  dayNumber_20: number | null;
  dayNumber_21: number | null;
  dayNumber_22: number | null;
  dayNumber_23: number | null;
  dayNumber_24: number | null;
  dayNumber_25: number | null;
  dayNumber_26: number | null;
  dayNumber_27: number | null;
  dayNumber_28: number | null;
  dayNumber_29: number | null;
  dayNumber_30: number | null;
  dayNumber_31: number | null;
}

const monthDailySalaries: MonthDailySalary[] = monthDailySalariesJson;

const MonthDailySalaryWithTimeShiftTable: React.FC = () => {
  const monthDailySalariesColumns = (
    daysInMonth: number,
    startingDayOfWeek: number
  ): DataTableColumnDefinition<MonthDailySalary>[] => {
    const columns: DataTableColumnDefinition<MonthDailySalary>[] = [
      {
        accessorKey: 'operatorName',
        header: 'Оператор',
        className: 'min-w-32',
        setCellClassName: (): string => 'font-bold',
        asTh: true,
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
      const totalForDay = monthDailySalaries.reduce((sum, currentRow) => {
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
      data={monthDailySalaries}
      footerData={footerData}
    />
  );
};

export default MonthDailySalaryWithTimeShiftTable;
