import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react';
import React from 'react';

export type Column<T> = {
    Header: string;
    accessor: keyof T | ((row: T) => any);
};

export interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    editable?: boolean;
    editableAccessor?: keyof T | ((row: T) => React.ReactNode);
}

function defaultEditable<T>(row: T) {
    return (
        <Button
            size={'sm'}
            variant={'ghost'}
            color={'gray.500'}
            onClick={() => {
                // implement edit function here
                console.log('editing:', row);
            }}
        >
            Edit
        </Button>
    );
}

function CustomTable<T>({ columns, data, editable, editableAccessor }: TableProps<T> & { children?: React.ReactNode }) {
    const _columns = [
        ...columns,
        ...(editable
            ? [
                  {
                      Header: '',
                      accessor: editableAccessor || defaultEditable,
                  },
              ]
            : []),
    ];

    const renderRow = (row: T, accessor: ((row: T) => any) | keyof T) => {
        if (typeof accessor === 'function') {
            return accessor(row);
        }

        return row[accessor];
    };

    return (
        <TableContainer>
            <Table
                variant="simple"
                fontSize={'sm'}
                sx={{
                    ' th': {
                        color: 'gray.500',
                        letterSpacing: 'normal',
                    },
                    ' td': {
                        fontWeight: 'medium',
                    },
                    ' th:first-child,td:first-child': {
                        pl: 0,
                    },
                    ' th:last-child,td:last-child': {
                        pr: 0,
                    },
                }}
            >
                <Thead>
                    <Tr>
                        {_columns.map((column) => (
                            <Th key={column.Header}>{column.Header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row, i) => (
                        <Tr key={i}>
                            {_columns.map((column) => (
                                <Td key={column.Header}>{renderRow(row, column.accessor)}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;
