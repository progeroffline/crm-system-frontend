import DataTreeTable, { DataTreeTableColumnDefinition } from '@/components/organisms/DataTreeTable';
import monthDailyBalancesJson from '@/data/balances.json';
import colorizeCellByValue from './shared.ts';

interface MonthDailyBalance {
  id: number;
  username: string;
  children?: MonthDailyBalance[];
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

const monthDailyBalances: MonthDailyBalance[] = monthDailyBalancesJson;
const MonthDailyBalanceTable: React.FC = () => {
  const monthDailyBalancesColumns = (
    daysInMonth: number,
    startingDayOfWeek: number
  ): DataTreeTableColumnDefinition<MonthDailyBalance>[] => {
    const columns: DataTreeTableColumnDefinition<MonthDailyBalance>[] = [
      {
        accessorKey: 'username',
        header: 'Админ',
        setCellClassName: (): string => 'font-medium',
      },
    ];

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = daysOfWeek[(startingDayOfWeek + i - 2) % 7];
      columns.push({
        header: dayOfWeek,
        columns: [
          {
            accessorKey: `dayNumber_${i}` as keyof MonthDailyBalance,
            header: `${i}`,
            // @ts-expect-error "children" key don't useing here
            setCellClassName: (value: number | string | null, _: MonthDailyBalance): string =>
              colorizeCellByValue(value),
          },
        ],
      });
    }

    return columns;
  };

  return <DataTreeTable columns={monthDailyBalancesColumns(30, 1)} data={monthDailyBalances} />;
};

export default MonthDailyBalanceTable;
