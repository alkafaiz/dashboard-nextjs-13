'use client';
import { BsFillPersonFill, BsFillCreditCardFill } from 'react-icons/bs';
import { IoHome, IoBuild, IoStatsChart, IoDocument, IoRocketSharp, IoWallet, IoGlobeOutline, IoDocumentText, IoCart } from 'react-icons/io5';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ListMenuItem from '@/components/ListMenuItem';
import CardDocumentation from '@/components/CardDocumentation';
import AppBar from '@/components/AppBar';
import CardStats from '@/components/CardStats';
import CardHero from '@/components/CardHero';
import BannerHero from '@/components/BannerHero';

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
            <Box flexGrow={1} p={4}>
                <AppBar />
                <Stack direction={'row'} spacing={4} mt={4}>
                    <CardStats label="Today's Money" primaryText="$53,000" stat={55} icon={<IoWallet />}/>
                    <CardStats label="Today's Users" primaryText="2,300" stat={5} icon={<IoGlobeOutline />}/>
                    <CardStats label="New Clients" primaryText="+3,052" stat={-14} icon={<IoDocumentText />}/>
                    <CardStats label="Total Sales" primaryText="$173,000" stat={8} icon={<IoCart />}/>
                </Stack>
                <Stack direction={'row'} spacing={4} mt={4}>
                    <CardHero />
                    <BannerHero />
                </Stack>
            </Box>
        </Flex>
    );
};

export default DashboardPage;
