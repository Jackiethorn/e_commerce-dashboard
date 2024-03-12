import { useReactTable, createColumnHelper, getCoreRowModel, flexRender, getSortedRowModel } from '@tanstack/react-table';
import { sortNumbersAndLetters } from '@/utils/tableSorting';

type TableProps<T extends Record<string, unknown>> = {
    col: any[];
    data: T[];
}

export const Table = <T extends Record<string, unknown>>({ col, data }: TableProps<T>) => {

    const columnHelper = createColumnHelper<T>();


    const columns = col.map(columnDef => {
        switch (columnDef.type) {
            case 'accessor':
                return columnHelper.accessor(columnDef.name, {
                    header: columnDef.name as string,
                    cell: (value) => value.getValue(),
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
    });

    return (
        <div className="table-container">
            <table className="">
                <thead className='border border-red-500'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className='table-cell'>
                                    <div
                                        {...{
                                            className: header.column.getCanSort()
                                                ? "cursor-pointer select-none"
                                                : "",
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
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
                                <td key={cell.id} className='table-cell'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}