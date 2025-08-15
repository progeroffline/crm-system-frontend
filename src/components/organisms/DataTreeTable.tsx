import React, { useState } from 'react';
import ChevronRightIcon from '../atoms/icons/ChevronRight';
import ChevronDownIcon from '../atoms/icons/ChevronDown';

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

  const renderRow = (item: TreeItem<T>, level: number, isEven: boolean) => {
    const isExpanded = expandedRows.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

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
                ? String(item[column.accessorKey] ?? '')
                : '';

            return columnIndex === 0 ? (
              <th
                className={
                  column.setCellClassName && column.accessorKey
                    ? column.setCellClassName(item[column.accessorKey], item as T)
                    : ''
                }
                key={String(column.accessorKey)}
                style={{ paddingLeft: `${columnIndex === 0 ? level * 20 + 10 : 10}px` }}
              >
                <div className="flex items-center">
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
                className={
                  column.setCellClassName && column.accessorKey
                    ? column.setCellClassName(item[column.accessorKey], item as T)
                    : ''
                }
                key={String(column.accessorKey)}
                style={{ paddingLeft: `${columnIndex === 0 ? level * 20 + 10 : 10}px` }}
              >
                <div className="flex items-center">
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
              </td>
            );
          })}
        </tr>
        {isExpanded &&
          hasChildren &&
          item.children?.map((child, index) => renderRow(child, level + 1, (index + 1) % 2 === 0))}
      </React.Fragment>
    );
  };

  return (
    <div className="h-100 overflow-x-auto shadow rounded-sm">
      <table className="table-compact">
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
        <tbody>{data.map((item, index) => renderRow(item, 0, (index + 1) % 2 === 0))}</tbody>
      </table>
    </div>
  );
};

export default DataTreeTable;
