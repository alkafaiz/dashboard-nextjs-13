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
    description: string;
    tableProps: TableProps<T>;
}

function CardTable({ title, description, tableProps }: CardTableProps<any> & { children?: React.ReactNode}) {
    return (
        <Card rounded={'xl'} p={4}>
            <Flex alignItems={'start'} justifyContent={'space-between'} mb={5}>
                <Box>
                    <Heading fontSize={'lg'} mb={1}>
                        {title}
                    </Heading>
                    <Text fontSize={'xs'} color={'gray.500'}>
                        {description}
                    </Text>
                </Box>
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
                        <MenuItem>Preference</MenuItem>
                        <MenuItem>Account</MenuItem>
                        <MenuDivider />
                        <MenuItem>Settings</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Table  {...tableProps}/>
        </Card>
    );
}

export default CardTable;
