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
    Skeleton,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { LuMoreVertical } from 'react-icons/lu';
import Table from './Table';
import type { TableProps } from './Table';
import { useDelay } from '@/utils/helper';

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
    const isDisplayed = useDelay(700);
    return (
        <Card rounded={'xl'} p={4} flexGrow={1}>
            <Flex alignItems={'start'} justifyContent={'space-between'} mb={3}>
                <Box>
                    <Heading fontSize={'lg'} mb={1}>
                        {title}
                    </Heading>
                    {isDisplayed ? (
                        <>
                            {description && typeof description === 'string' ? (
                                <Text fontSize={'xs'} color={'gray.500'}>
                                    {description}
                                </Text>
                            ) : null}
                            {description && typeof description !== 'string' ? description : null}
                        </>
                    ) : (
                        <Skeleton height="18px" width={'160px'} />
                    )}
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
