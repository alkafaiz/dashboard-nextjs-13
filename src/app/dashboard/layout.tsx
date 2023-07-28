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
import { BsFillBoxFill } from 'react-icons/bs';

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
    children,
    ...rest // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <Flex bgColor={'#F8F9FA'} height={'100vh'} width={'full'}>
            <Box w={'280px'} flexShrink={0} p="4">
                <Heading
                    my={2}
                    textAlign={'center'}
                    flexBasis={'100%'}
                    size={'sm'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <BsFillBoxFill />
                    &ensp;VANDELAY INDUSTRIES
                </Heading>
                <Divider my={4} borderColor={'gray.300'} />
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
