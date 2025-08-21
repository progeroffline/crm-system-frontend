import React, { useState } from 'react';
import ChevronRightIcon from '../atoms/icons/ChevronRight';
import ChevronDownIcon from '../atoms/icons/ChevronDown';
import { formatCell, mergeClassNames } from '@/lib/utils';

export interface DataTreeTableColumnDefinition<T> {
  header: string;
  accessorKey?: keyof T;
  columns?: DataTreeTableColumnDefinition<T>[];
  setCellClassName?: (value: T[keyof T], row: T) => string;
  cell?: (props: { row: T }) => React.ReactElement;
}

export type TreeItem<T> = T & {
  children?: TreeItem<T>[];
};

export interface DataTreeTableProps<T> {
  columns: DataTreeTableColumnDefinition<T>[];
  data: TreeItem<T>[];
}

function getLeafColumns<T>(columns: DataTreeTableColumnDefinition<T>[]) {
  const leafColumns: DataTreeTableColumnDefinition<T>[] = [];
  columns.forEach((col) => {
    if (col.columns) {
      leafColumns.push(...getLeafColumns(col.columns));
    } else {
      leafColumns.push(col);
    }
  });
  return leafColumns;
}

function getMaxDepth<T>(columns: DataTreeTableColumnDefinition<T>[]): number {
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

const DataTreeTable = <T extends { id: string | number }>({
  columns,
  data,
}: DataTreeTableProps<T>): React.ReactElement => {
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());

  const leafColumns = getLeafColumns(columns);
  const maxDepth = getMaxDepth(columns);

  const headerRows: DataTreeTableColumnDefinition<T>[][] = [];

  const getColSpan = (col: DataTreeTableColumnDefinition<T>) =>
    col.columns ? getLeafColumns(col.columns).length : 1;

  const buildHeaderRows = (cols: DataTreeTableColumnDefinition<T>[], depth: number) => {
    if (depth >= maxDepth) return;
    if (!headerRows[depth]) headerRows[depth] = [];

    const nextLevelCols: DataTreeTableColumnDefinition<T>[] = [];

    cols.forEach((col) => {
      headerRows[depth].push(col);
      if (col.columns) {
        nextLevelCols.push(...col.columns);
      }
    });

    buildHeaderRows(nextLevelCols, depth + 1);
  };

  buildHeaderRows(columns, 0);

  const toggleRow = (id: string | number) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getVisibleData = (items: TreeItem<T>[]): TreeItem<T>[] => {
    const visibleData: TreeItem<T>[] = [];

    const traverse = (item: TreeItem<T>) => {
      visibleData.push(item);
      if (expandedRows.has(item.id) && item.children) {
        item.children.forEach(traverse);
      }
    };

    items.forEach(traverse);
    return visibleData;
  };

  const calculateTotals = (rows: TreeItem<T>[]) => {
    const totals: { [key: string]: number } = {};
    leafColumns.forEach((column) => {
      if (column.accessorKey) {
        const total = rows.reduce((acc, row) => {
          const value = row[column.accessorKey as keyof T];
          if (typeof value === 'number') {
            return acc + value;
          }
          if (typeof value === 'string') {
            const parsedValue = parseFloat(value);
            if (!isNaN(parsedValue)) {
              return acc + parsedValue;
            }
          }
          return acc;
        }, 0);
        totals[String(column.accessorKey)] = total;
      }
    });
    return totals;
  };

  const visibleData = getVisibleData(data);
  const totals = calculateTotals(visibleData);

  const renderRow = (item: TreeItem<T>, level: number, isEven: boolean) => {
    const isExpanded = expandedRows.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

    const rowTotal = leafColumns.reduce((acc, column) => {
      if (column.accessorKey) {
        const value = item[column.accessorKey as keyof T];
        if (typeof value === 'number') {
          return acc + value;
        }
        if (typeof value === 'string') {
          const parsedValue = parseFloat(value);
          if (!isNaN(parsedValue)) {
            return acc + parsedValue;
          }
        }
      }
      return acc;
    }, 0);

    return (
      <React.Fragment key={item.id}>
        <tr
          className={`${hasChildren ? 'cursor-pointer' : ''} ${isEven ? 'bg-base-200' : ''}`}
          onClick={() => hasChildren && toggleRow(item.id)}
        >
          {leafColumns.map((column, columnIndex) => {
            const cellContent = column.cell
              ? column.cell({
                row: {
                  ...item,
                  getIsExpanded: () => isExpanded,
                  getToggleExpandedHandler: () => () => toggleRow(item.id),
                  canExpand: hasChildren,
                  original: item,
                },
              })
              : column.accessorKey
                ? formatCell(item[column.accessorKey] as number) ?? ''
                : '';

            return columnIndex === 0 ? (
              <th
                className={
                  column.setCellClassName && column.accessorKey
                    ? column.setCellClassName(item[column.accessorKey], item as T)
                    : ''
                }
                key={String(column.accessorKey)}
                style={{ paddingLeft: `${columnIndex === 0 ? level * 20 + 4 : 4}px` }}
              >
                <div className="flex items-center text-xs">
                  {columnIndex === 0 && hasChildren && (
                    <span className="mr-2">
                      {isExpanded ? (
                        <ChevronDownIcon className="size-3" />
                      ) : (
                        <ChevronRightIcon className="size-3" />
                      )}
                    </span>
                  )}
                  {cellContent}
                </div>
              </th>
            ) : (
              <td
                className={mergeClassNames([
                  column.setCellClassName && column.accessorKey
                    ? column.setCellClassName(item[column.accessorKey], item as T)
                    : ''
                ])}
                key={String(column.accessorKey)}
              >
                {columnIndex === 0 && hasChildren && (
                  <span className="mr-2">
                    {isExpanded ? (
                      <ChevronDownIcon className="size-3" />
                    ) : (
                      <ChevronRightIcon className="size-3" />
                    )}
                  </span>
                )}
                {cellContent}
              </td>
            );
          })}
          <th style={{ right: 0 }}>{formatCell(rowTotal)}</th>
          <td className="text-xs">0</td>
          <td className="text-xs">0</td>
          <td className="text-xs">0</td>
        </tr>
        {isExpanded &&
          hasChildren &&
          item.children?.map((child, index) => renderRow(child, level + 1, (index + 1) % 2 === 0))}
      </React.Fragment>
    );
  };

  return (
    <div className="max-h-200 overflow-x-auto scrollbar-hide mt-2">
      <table className="table-compact w-full">
        <thead>
            <tr>
                {headerRows[0] && headerRows[0].map((col, colIndex) => {
                    const isGroup = !!col.columns;
                    const colSpan = getColSpan(col);
                    const rowSpan = !isGroup ? maxDepth : 1;
                    return (
                        <th key={colIndex} colSpan={colSpan} rowSpan={rowSpan}>
                            {col.header}
                        </th>
                    );
                })}
                <th key="total-header" rowSpan={maxDepth} style={{ right: 0 }}>
                    Всего
                </th>
                <th key="plan-header" rowSpan={maxDepth}>
                    План
                </th>
                <th key="plan-execution-header" colSpan={2}>
                    Выполнение плана
                </th>
            </tr>
            {maxDepth > 1 && (
                <tr>
                    {headerRows[1] && headerRows[1].map((col, colIndex) => {
                        return (
                            <th key={colIndex}>
                                {col.header}
                            </th>
                        );
                    })}
                    <th>Разница</th>
                    <th>%</th>
                </tr>
            )}
        </thead>
        <tbody>{data.map((item, index) => renderRow(item, 0, (index + 1) % 2 === 0))}</tbody>
        <tfoot>
          <tr>
            {leafColumns.map((column, index) => (
              index === 0 ? (
                <th key="footer-title">Итого</th>
              ) :
                (
                  <td key={index}>
                    {column.accessorKey && totals[String(column.accessorKey)] !== undefined
                      ? formatCell(totals[String(column.accessorKey)]) : ''
                    }
                  </td>
                )
            ))}
            <th style={{ right: 0 }}>
              {formatCell(Object.values(totals).reduce((acc, total) => acc + total, 0))}
            </th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataTreeTable;