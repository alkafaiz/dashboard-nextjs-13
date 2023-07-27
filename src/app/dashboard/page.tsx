'use client';
import { BsFillPersonFill, BsFillCreditCardFill } from 'react-icons/bs';
import { IoHome, IoBuild, IoStatsChart, IoDocument, IoRocketSharp } from 'react-icons/io5';
import { Box, Divider, Flex, Heading, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ListMenuItem from '@/components/ListMenuItem';

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
                <Stack spacing={0} mt="4">
                    {accountNavs.map(({ label, href, icon }) => (
                        <ListMenuItem key={label} label={label} href={href} icon={icon} />
                    ))}
                </Stack>
            </Box>
            <Box flexGrow={1} p="4" bg="green.400">
                Box 2
            </Box>
        </Flex>
    );
};

export default DashboardPage;
