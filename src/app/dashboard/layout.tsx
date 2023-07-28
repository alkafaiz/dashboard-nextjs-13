'use client';
import AppBar from '@/components/AppBar';
import CardDocumentation from '@/components/CardDocumentation';
import { Flex, Heading, Divider, Box } from '@chakra-ui/react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import SideNav from '@/components/SideNav';
import { useRouter } from 'next/router';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Filler
);


export default function DashboardLayout({
    children, ...rest // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    console.log({rest11: rest})
    return (
        <Flex bgColor={'#F8F9FA'} height={'100vh'} width={'full'}>
            <Box w={'280px'} p="4">
                <Heading my={2} textAlign={'center'} size="md">
                    VANDELAY INDUSTRY
                </Heading>
                <Divider my={4} />
                <SideNav />
                <CardDocumentation />
            </Box>
            <Box as="section" flexGrow={1} overflow={'scroll'}>
                <AppBar />
                {children}
            </Box>
        </Flex>
    );
}
