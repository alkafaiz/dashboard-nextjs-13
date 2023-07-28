'use client';
import React from 'react';
import ListMenuItem from '@/components/ListMenuItem';
import { Stack, Text } from '@chakra-ui/react';
import { BsFillPersonFill, BsFillCreditCardFill } from 'react-icons/bs';
import { IoHome, IoBuild, IoStatsChart, IoDocument, IoRocketSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const navs = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <IoHome />,
    },
    {
        label: 'Table',
        href: '/dashboard/table',
        icon: <IoStatsChart />,
    },
    {
        label: 'Billing',
        href: '/dashboard/billing',
        icon: <BsFillCreditCardFill />,
    },
    {
        label: 'RTL',
        href: '/dashboard/rtl',
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
        href: '/signin',
        icon: <IoRocketSharp />,
    },
];

function SideNav() {
    const path = usePathname();

    return (
        <>
            <Stack spacing={0} mt="4">
                {navs.map(({ label, href, icon }) => (
                    <ListMenuItem key={label} label={label} href={href} icon={icon} isActive={path === href} />
                ))}
            </Stack>
            <Text mt={8} ml={3} mb={2} fontWeight={'bold'} fontSize={'xs'}>
                ACCOUNT PAGES
            </Text>
            <Stack spacing={0} my="4">
                {accountNavs.map(({ label, href, icon }) => (
                    <ListMenuItem key={label} label={label} href={href} icon={icon} isActive={path === href} />
                ))}
            </Stack>
        </>
    );
}

export default SideNav;
