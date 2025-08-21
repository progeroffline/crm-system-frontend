import DataTable, { DataTableColumnDefinition } from '@/components/molecules/tables/DataTable';
import { formatCell } from '@/lib/utils';
import { generateMonthDailySalaries } from './generateFakeData';
import colorizeCellByValue from './shared';

export type ShiftLabel = 'I' | 'II' | 'III';
export type AdminIndex = 0 | 1;
export type SalaryIndex = 0 | 1;

export interface MonthDailySalaryWithTimeShift {
  id: number;
  operatorName: string;
  [key: `timeShiftNumber_${number}_${ShiftLabel}`]: number;
  [key: `adminSalary_${number}_${ShiftLabel}_${SalaryIndex}`]: number;
  [key: `adminName_${number}_${ShiftLabel}_${AdminIndex}`]: string;
}

const monthDailySalariesWithTimeShiftData = generateMonthDailySalaries(30, 10);
const MonthDailySalaryWithTimeShiftTable: React.FC = () => {
  const monthDailySalariesColumns = (
    daysInMonth: number
  ): DataTableColumnDefinition<MonthDailySalaryWithTimeShift>[] => {
    const columns: DataTableColumnDefinition<MonthDailySalaryWithTimeShift>[] = [
      {
        accessorKey: 'operatorName',
        header: 'Модель',
        setCellClassName: (): string => 'font-medium',
        asTh: true,
      },
    ];

    for (let i = 1; i <= daysInMonth; i++) {
      columns.push({
        header: i.toString(),
        columns: ['I', 'II', 'III'].map((shiftNumber: string) => ({
          accessorKey: `timeShiftNumber_${i}_${shiftNumber}` as keyof MonthDailySalaryWithTimeShift,
          header: shiftNumber.toString(),
          columns: [40.0, 38.1].map((salary: number, index: number) => ({
            accessorKey:
              `adminSalary_${i}_${shiftNumber}_${index}` as keyof MonthDailySalaryWithTimeShift,
            header: formatCell(salary),
            columns: ['Deadpool', 'Creator'].map((adminName: string, index: number) => ({
              accessorKey:
                `adminName_${i}_${shiftNumber}_${index}` as keyof MonthDailySalaryWithTimeShift,
              header: adminName,
              setCellClassName: (
                value: string | number | null,
                _: MonthDailySalaryWithTimeShift
              ): string => colorizeCellByValue(value),
            })),
          })),
        })),
      });
    }

    return columns;
  };

  return (
    <DataTable columns={monthDailySalariesColumns(30)} data={monthDailySalariesWithTimeShiftData} />
  );
};
export default MonthDailySalaryWithTimeShiftTable;
