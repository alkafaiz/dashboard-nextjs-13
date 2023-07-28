import { useDelay } from '@/utils/helper';
import { activeUsersData } from '@/utils/mockData';
import { Box, Card, Flex, Heading, Progress, Skeleton, Text } from '@chakra-ui/react';
import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface CardActiveUsersProps {
    title: string;
    description: React.ReactNode;
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];

const dataBar: ChartData<'bar', number[], string> = {
    labels: labels.map((l) => l.substr(0, 3)),
    datasets: [
        {
            label: 'Dataset 1',
            data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 400) + 100),
            borderColor: '#FFF',
            backgroundColor: '#FFF',
            barThickness: 7,
            borderRadius: 6,
        },
    ],
};

export const optionsBar: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const,
            labels: {
                usePointStyle: false,
                pointStyle: 'rect',
                boxWidth: 16,
            },
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        filler: {
            propagate: true,
        },
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
                lineWidth: 0,
                drawTicks: false,
            },
            display: false,
        },
        y: {
            grid: {
                display: false,
            },
            ticks: {
                stepSize: 100,
                color: '#FFF',
            },
            border: {
                display: false,
            },
        },
    },
    elements: {
        line: {
            tension: 0.0,
            borderWidth: 2,
        },
        point: {
            radius: 0,
        },
    },
};

function CardActiveUsers({ title, description }: CardActiveUsersProps & { children?: React.ReactNode }) {
    const isDisplayed = useDelay();

    return (
        <Card flexGrow={1} rounded={'xl'} p={4} maxH={530}>
            <Box
                height={250}
                mb={5}
                px={5}
                py={5}
                background="linear-gradient(45deg, rgba(49,56,96,1) 0%, rgba(21,25,40,1) 100%)"
                borderRadius={'xl'}
            >
                <Bar options={optionsBar} data={dataBar} />
            </Box>
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
                <Skeleton height="18px" width={'100px'} />
            )}

            <Flex mt={5} mb={3}>
                {activeUsersData.map((user, index) => (
                    <Box key={index} width={110} mr={10} sx={{ '&:last-child': { mr: 0 } }}>
                        <Flex alignItems={'center'} mb={2}>
                            <Box p={2} color={'white'} bgColor={'brand.900'} rounded={'xl'} mr={2} fontSize={'sm'}>
                                {user.icon}
                            </Box>
                            <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'}>
                                {user.label}
                            </Text>
                        </Flex>
                        {isDisplayed ? (
                            <>
                                <Text fontSize={'md'} fontWeight={'bold'}>
                                    {user.value}
                                </Text>
                                <Progress mt={2} size="xs" value={user.completion} colorScheme={'teal'} />
                            </>
                        ) : (
                            <>
                                <Skeleton height="24px" width={'60px'} />
                                <Skeleton height="4px" mt={2} />
                            </>
                        )}
                    </Box>
                ))}
            </Flex>
        </Card>
    );
}

CardActiveUsers.defaultProps = {
    title: 'Active Users',
    description: (
        <Text fontSize={'xs'} color={'gray.500'}>
            <Text ml={1} as={'span'} fontWeight={'bold'} color={'green.400'}>
                (+23)
            </Text>
            &nbsp;than last week
        </Text>
    ),
};

export default CardActiveUsers;
