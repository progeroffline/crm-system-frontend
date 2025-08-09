export interface DataTableColumnDefinition<T> {
  header: string;
  accessorKey?: keyof T;
  columns?: DataTableColumnDefinition<T>[];
}

export interface DataTableProps<T> {
  columns: DataTableColumnDefinition<T>[];
  data: T[];
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

const DataTable = <T extends { id?: string | number }>({
  columns,
  data,
}: DataTableProps<T>): React.ReactElement => {
  const leafColumns = getLeafColumns(columns);
  const maxDepth = getMaxDepth(columns);

  const headerRows: DataTableColumnDefinition<T>[][] = [];

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
    <div className="h-100 overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
      <table className="table table-xs table-bordered table-pin-rows table-pin-cols">
        <thead>
          {headerRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => {
                const isGroup = !!col.columns;
                const colSpan = getColSpan(col);
                const rowSpan = !isGroup ? maxDepth - rowIndex : 1;

                return (
                  <th key={colIndex} colSpan={colSpan} rowSpan={rowSpan}>
                    {col.header}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id ?? index}>
              {leafColumns.map((column) => (
                <td key={String(column.accessorKey)}>{String(item[column.accessorKey!] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
