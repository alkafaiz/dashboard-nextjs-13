import {
    Box,
    Card,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { LuMoreVertical } from 'react-icons/lu';
import Table from './Table';
import type { TableProps } from './Table';

interface CardTableProps<T> {
    title: string;
    description?: React.ReactNode;
    disableMoreButton?: boolean;
    tableProps: TableProps<T>;
}

function CardTable<T>({
    title,
    description,
    tableProps,
    disableMoreButton,
}: CardTableProps<T> & { children?: React.ReactNode }) {
    return (
        <Card rounded={'xl'} p={4}>
            <Flex alignItems={'start'} justifyContent={'space-between'} mb={3}>
                <Box>
                    <Heading fontSize={'lg'} mb={1}>
                        {title}
                    </Heading>
                    {description && typeof description === 'string' && (
                        <Text fontSize={'xs'} color={'gray.500'}>
                            {description}
                        </Text>
                    )}
                    {description && typeof description !== 'string' && description}
                </Box>
                {!disableMoreButton && (
                    <Menu>
                        <MenuButton
                            color={'gray.500'}
                            as={IconButton}
                            size={'md'}
                            aria-label="Options"
                            icon={<LuMoreVertical />}
                            variant="ghost"
                        />
                        <MenuList>
                            <MenuItem>Details</MenuItem>
                        </MenuList>
                    </Menu>
                )}
            </Flex>
            <Table {...tableProps} />
        </Card>
    );
}

export default CardTable;
