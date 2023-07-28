'use client';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import CardTable from '@/components/CardTable';
import { authorColumns, authors, projectColumnsV2, projectsV2 } from '@/utils/mockData';
import { LuMoreVertical } from 'react-icons/lu';

const DashboardPage = () => {
    return (
        <Box p={4} pt={0}>
            <Stack direction={'row'} spacing={4} mt={4}>
                <Box w={'100%'}>
                    <CardTable
                        disableMoreButton
                        title="Authors Table"
                        tableProps={{ columns: authorColumns, data: authors, editable: true }}
                    />
                </Box>
            </Stack>
            <Stack direction={'row'} spacing={4} mt={4}>
                <Box w={'100%'}>
                    <CardTable
                        disableMoreButton
                        title="Projects"
                        description={
                            <Text fontSize={'xs'} color={'gray.500'} display={'flex'} alignItems={'center'}>
                                <IoCheckmarkCircleSharp style={{ color: '#68D391', width: 14, height: 14 }} />{' '}
                                <Text ml={1} as={'span'} fontWeight={'bold'}>
                                    30 done
                                </Text>
                                &nbsp;this month
                            </Text>
                        }
                        tableProps={{
                            columns: projectColumnsV2,
                            data: projectsV2,
                            editable: true,
                            editableAccessor: (row) => (
                                <Menu>
                                    <MenuButton
                                        color={'gray.500'}
                                        as={IconButton}
                                        size={'sm'}
                                        aria-label="Options"
                                        icon={<LuMoreVertical />}
                                        variant="ghost"
                                        onClick={() => {
                                            // implement edit function here
                                            console.log('editing:', row);
                                        }}
                                    />
                                    <MenuList>
                                        <MenuItem>Details</MenuItem>
                                    </MenuList>
                                </Menu>
                            ),
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default DashboardPage;
