import {
    useReactTable, createColumnHelper, getCoreRowModel, flexRender, getSortedRowModel,
    getPaginationRowModel
} from '@tanstack/react-table';
import { sortNumbersAndLetters } from '@/utils/tableSorting';
import { useState } from 'react';
import Button from './Button';
import { paginate } from '@/utils/paginate';

type TableProps<T extends Record<string, unknown>> = {
    col: any[];
    data: T[];
    pagination?: {
        pageIndex: number;
        pageSize: number;
    };
    className?: string;
}
//TODO: Add pagination, fix mobile view
export const Table = <T extends Record<string, unknown>>({ col, data, pagination, className }: TableProps<T>) => {
    // const [currentPage, setCurrentPage] = useState(pagination?.pageIndex ?? 1);
    // const [currentData, setCurrentData] = useState();

    const columnHelper = createColumnHelper<T>();

    const columns = col.map(columnDef => {
        switch (columnDef.type) {
            case 'accessor':
                return columnHelper.accessor(columnDef.name, {
                    header: columnDef.name as string,
                    cell: (value) => {
                        // If the column name is 'avatar', render the image
                        if (columnDef.name === 'avatar' || columnDef.name === 'image') {
                            return <img className='w-10 h-10 rounded-full' src={value.getValue()} alt="avatar" />;
                        }
                        return value.getValue();
                    },
                    sortingFn: sortNumbersAndLetters
                });

            case 'display':
                return columnHelper.display({
                    id: columnDef.type,
                    cell: (value) => value.getValue()
                })
            case 'group':
            // TODO: create a group column
            default:
                throw new Error(`Invalid column type: ${columnDef.type}`);
        }
    });

    const table = useReactTable({
        data,
        columns,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        pageCount: data.length,
        getPaginationRowModel: getPaginationRowModel(),
        enableColumnResizing: true,
    });

    return (
        <div className="table-container py-2.5 px-1 block max-w-full overflow-x-scroll overflow-y-hidden">
            <table className={"table-fixed w-full border-separate border-spacing-3 " + className}>
                <thead className="border">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr className='' key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className={`table-cell border border-slate-300 p-2 hover:bg-slate-100 relative w-${header.getSize()}`}>
                                    <div
                                        {...{
                                            className: header.column.getCanSort()
                                                ? "cursor-pointer select-none flex items-center justify-start"
                                                : "",
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {header.column.getCanResize() && (
                                            <div
                                                onMouseDown={header.getResizeHandler()}
                                                onTouchStart={header.getResizeHandler()}
                                                className={`resizer absolute bg-black ${header.column.getIsResizing() ? 'isResizing' : ''
                                                    }`}
                                            ></div>
                                        )}
                                        {{
                                            asc: <img src="/assets/icons/arrow-down.svg" alt="arrow down" />,
                                            desc: <img src="/assets/icons/arrow-up.svg" alt="arrow up" />,
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getSortedRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={`table-cell border border-slate-200 p-2 w-${cell.column.getSize()}`}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {pagination && (
                <div>
                    <Button onClick={() => table.lastPage} disabled={!table.getCanPreviousPage()}>First</Button>
                    <Button onClick={() => table.previousPage()}>Previous</Button>
                    <Button onClick={() => table.nextPage()}>Next</Button>
                    <Button onClick={() => table.lastPage()}>Last</Button>
                </div>
            )}
        </div>
    )
}