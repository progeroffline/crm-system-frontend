import { mergeClassNames } from '@/lib/utils';

export interface DataTableColumnDefinition<T> {
  header: string;
  className?: string;
  accessorKey?: keyof T;
  columns?: DataTableColumnDefinition<T>[];
  setCellClassName?: (value: T[keyof T], row: T) => string;
  asTh?: boolean;
}

export interface DataTableProps<T> {
  columns: DataTableColumnDefinition<T>[];
  data: T[];
  footerData?: Partial<T>;
}

function getLeafColumns<T>(columns: DataTableColumnDefinition<T>[]) {
  const leafColumns: DataTableColumnDefinition<T>[] = [];
  columns.forEach((col) => {
    if (col.columns) {
      leafColumns.push(...getLeafColumns(col.columns));
    } else {
      leafColumns.push(col);
    }
  });
  return leafColumns;
}

function getMaxDepth<T>(columns: DataTableColumnDefinition<T>[]): number {
  let maxDepth = 1;
  columns.forEach((col) => {
    if (col.columns) {
      const depth = getMaxDepth(col.columns) + 1;
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  });
  return maxDepth;
}

const DataTable = <T extends { id: string | number }>({
  columns,
  data,
  footerData,
}: DataTableProps<T>): React.ReactElement => {
  const leafColumns = getLeafColumns(columns);
  const maxDepth = getMaxDepth(columns);

  const headerRows: DataTableColumnDefinition<T>[][] = [];

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const formatCell = (value: number | string | Partial<T>[keyof T]) => {
    if (typeof value === 'number') {
      return currencyFormatter.format(value);
    }
    if (value === null) {
      return currencyFormatter.format(0);
    }
    return String(value ?? '');
  };

  const getColSpan = (col: DataTableColumnDefinition<T>) =>
    col.columns ? getLeafColumns(col.columns).length : 1;

  const buildHeaderRows = (cols: DataTableColumnDefinition<T>[], depth: number) => {
    if (depth >= maxDepth) return;
    if (!headerRows[depth]) headerRows[depth] = [];

    const nextLevelCols: DataTableColumnDefinition<T>[] = [];

    cols.forEach((col) => {
      headerRows[depth].push(col);
      if (col.columns) {
        nextLevelCols.push(...col.columns);
      }
    });

    buildHeaderRows(nextLevelCols, depth + 1);
  };

  buildHeaderRows(columns, 0);

  return (
    <div className="max-h-200 overflow-x-auto scrollbar-hide shadow rounded-xs">
      <table className="table-compact">
        <thead>
          {headerRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => {
                const isGroup = !!col.columns;
                const colSpan = getColSpan(col);
                const rowSpan = !isGroup ? maxDepth - rowIndex : 1;

                return (
                  <th
                    key={colIndex}
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    className={mergeClassNames([col.className ?? ''])}
                  >
                    {col.header}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {leafColumns.map((column) =>
                column.asTh ? (
                  <th
                    className={mergeClassNames([
                      column.setCellClassName && column.accessorKey
                        ? column.setCellClassName(item[column.accessorKey], item)
                        : '',
                    ])}
                    key={String(column.accessorKey)}
                  >
                    {column.accessorKey ? formatCell(item[column.accessorKey]) : ''}
                  </th>
                ) : (
                  <td
                    className={mergeClassNames([
                      column.setCellClassName && column.accessorKey
                        ? column.setCellClassName(item[column.accessorKey], item)
                        : '',
                    ])}
                    key={String(column.accessorKey)}
                  >
                    {column.accessorKey ? formatCell(item[column.accessorKey]) : ''}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
        {footerData && (
          <tfoot>
            <tr>
              {leafColumns.map((column, index) => {
                if (index === 0) {
                  return <th key="footer-title">Итого</th>;
                }
                const value = column.accessorKey ? footerData[column.accessorKey] : null;
                return (
                  <td key={`footer-${String(column.accessorKey)}`}>
                    {value ? formatCell(value) : ''}
                  </td>
                );
              })}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
export default DataTable;
