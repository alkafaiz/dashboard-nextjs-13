'use client';
import { BsFillPersonFill, BsFillCreditCardFill } from 'react-icons/bs';
import {
    IoHome,
    IoBuild,
    IoStatsChart,
    IoDocument,
    IoRocketSharp,
    IoWallet,
    IoGlobeOutline,
    IoDocumentText,
    IoCart,
    IoCheckmarkCircleSharp,
} from 'react-icons/io5';
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Progress,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import ListMenuItem from '@/components/ListMenuItem';
import CardDocumentation from '@/components/CardDocumentation';
import AppBar from '@/components/AppBar';
import CardStats from '@/components/CardStats';
import CardHero from '@/components/CardHero';
import BannerHero from '@/components/BannerHero';
import CardTable from '@/components/CardTable';
import { Column } from '@/components/Table';
import {
    authorColumns,
    authors,
    projectColumns,
    projectColumnsV2,
    projects,
    projectsV2,
    timelineItems,
} from '@/utils/mockData';
import { LuMoreVertical } from 'react-icons/lu';
import CardTimeline from '@/components/CardTimeline';
import CardActiveUsers from '@/components/CardActiveUsers';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const navs = [
    {
        label: 'Dashboard',
        href: '/',
        icon: <IoHome />,
    },
    {
        label: 'Table',
        href: '/table',
        icon: <IoStatsChart />,
    },
    {
        label: 'Billing',
        href: '/billing',
        icon: <BsFillCreditCardFill />,
    },
    {
        label: 'RTL',
        href: '/rtl',
        icon: <IoBuild />,
    },
];

const accountNavs = [
    {
        label: 'Profile',
        href: '/profile',
        icon: <BsFillPersonFill />,
    },
    {
        label: 'Sign in',
        href: '/signin',
        icon: <IoDocument />,
    },
    {
        label: 'Log out',
        href: '/logout',
        icon: <IoRocketSharp />,
    },
];

const DashboardPage = () => {
    return (
        <Flex bgColor={'#F8F9FA'} height={'100vh'} width={'full'}>
            <Box w={'280px'} p="4">
                <Heading my={2} textAlign={'center'} size="md">
                    VANDELAY INDUSTRY
                </Heading>
                <Divider my={4} />
                <Stack spacing={0} mt="4">
                    {navs.map(({ label, href, icon }) => (
                        <ListMenuItem key={label} label={label} href={href} icon={icon} />
                    ))}
                </Stack>
                <Text mt={8} ml={3} mb={2} fontWeight={'bold'} fontSize={'xs'}>
                    ACCOUNT PAGES
                </Text>
                <Stack spacing={0} my="4">
                    {accountNavs.map(({ label, href, icon }) => (
                        <ListMenuItem key={label} label={label} href={href} icon={icon} />
                    ))}
                </Stack>
                <CardDocumentation />
            </Box>
            <Box flexGrow={1} overflow={'scroll'}>
                <AppBar />
                <Box p={4} pt={0}>
                    <Stack direction={'row'} spacing={4}>
                        <CardStats label="Today's Money" primaryText="$53,000" stat={55} icon={<IoWallet />} />
                        <CardStats label="Today's Users" primaryText="2,300" stat={5} icon={<IoGlobeOutline />} />
                        <CardStats label="New Clients" primaryText="+3,052" stat={-14} icon={<IoDocumentText />} />
                        <CardStats label="Total Sales" primaryText="$173,000" stat={8} icon={<IoCart />} />
                    </Stack>
                    <Stack direction={'row'} spacing={4} mt={4}>
                        <CardHero />
                        <BannerHero />
                    </Stack>
                    <Stack direction={'row'} spacing={4} mt={4}>
                        <CardActiveUsers />
                        <CardActiveUsers />
                    </Stack>
                    <Stack direction={'row'} spacing={4} mt={4}>
                        <Box w={'70%'} display={'inline-flex'}>
                            <CardTable
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
                                tableProps={{ columns: projectColumns, data: projects }}
                            />
                        </Box>
                        <CardTimeline
                            title="Orders overview"
                            description={
                                <Text fontSize={'xs'} color={'gray.500'}>
                                    <Text ml={1} as={'span'} fontWeight={'bold'} color={'green.400'}>
                                        +30%
                                    </Text>
                                    &nbsp;this month
                                </Text>
                            }
                            timelineItems={timelineItems}
                        />
                    </Stack>
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
            </Box>
        </Flex>
    );
};

export default DashboardPage;
