'use client';
import { IoWallet, IoGlobeOutline, IoDocumentText, IoCart, IoCheckmarkCircleSharp } from 'react-icons/io5';
import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import CardStats from '@/components/CardStats';
import CardHero from '@/components/CardHero';
import BannerHero from '@/components/BannerHero';
import CardTable from '@/components/CardTable';
import { projectColumns, projects, timelineItems } from '@/utils/mockData';
import CardTimeline from '@/components/CardTimeline';
import CardActiveUsers from '@/components/CardActiveUsers';
import CardSalesOverview from '@/components/CardSalesOverview';

const DashboardPage = () => {
    return (
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
                <CardSalesOverview />
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
        </Box>
    );
};

export default DashboardPage;
