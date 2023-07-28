'use client';
import React from 'react';
import ListMenuItem from '@/components/ListMenuItem';
import { Stack, Text } from '@chakra-ui/react';

import { usePathname } from 'next/navigation';
import { accountNavs, dashboardNavs } from '@/utils/routes';

function SideNav() {
    const path = usePathname();

    return (
        <>
            <Stack spacing={0} mt="4">
                {dashboardNavs.map(({ label, href, icon }) => (
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
