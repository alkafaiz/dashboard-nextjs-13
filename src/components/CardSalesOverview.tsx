import { activeUsersData } from '@/utils/mockData';
import { Box, Card, Flex, Heading, Progress, Text } from '@chakra-ui/react';
import { ChartData, ChartOptions, ScriptableContext } from 'chart.js';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

interface CardSalesOverviewProps {
    title: string;
    description: React.ReactNode;
}

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Nov',
    'Dec',
];
const dataValues = [
    [195, 225, 200, 380, 375, 470, 370, 300, 350, 250, 270, 425],
    [500, 200, 120, 240, 200, 260, 240, 140, 100, 150, 190, 110],
];

const data: ChartData<'line', number[], string> = {
    labels: labels.map((l) => l.substr(0, 3)),
    datasets: [
        {
            label: 'Dataset 1',
            data: dataValues[0],
            borderColor: 'rgba(79, 209, 197, 1)',
            backgroundColor: (context: ScriptableContext<'line'>) => {
                const colors = ['rgba(79, 209, 197, 0.7)', 'rgba(79, 209, 197, .4)', 'rgba(255, 255, 255, 0.01)'];

                if (!context.chart.chartArea) {
                    return;
                }

                const { ctx, chartArea } = context.chart;
                const { top, bottom } = chartArea;
                const gradient = ctx.createLinearGradient(0, top, 0, bottom);

                gradient.addColorStop(0, colors[0]);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.00)');

                // eslint-disable-next-line consistent-return
                return gradient;
            },
            fill: true,
        },
        {
            label: 'Dataset 2',
            data: dataValues[1],
            borderColor: 'rgb(45,55,72)',
            backgroundColor: (context: ScriptableContext<'line'>) => {
                const colors = ['rgba(45,55,72, 0.8)', 'rgba(45,55,72, 0.7)', 'rgba(0, 0, 0, 0.01)'];

                if (!context.chart.chartArea) {
                    return;
                }

                const { ctx, chartArea } = context.chart;
                const { top, bottom } = chartArea;
                const gradient = ctx.createLinearGradient(0, top, 0, bottom);

                gradient.addColorStop(0, colors[0]);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.00)');

                // eslint-disable-next-line consistent-return
                return gradient;
            },
            fill: true,
        },
    ],
};

export const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'right' as const,
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
        },
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.05)',
            },
            ticks: {
                stepSize: 100,
            },
            border: {
                display: false,
            },
        },
    },
    elements: {
        line: {
            tension: 0.4,
            borderWidth: 2,
        },
        point: {
            radius: 0,
        },
    },
};

function CardSalesOverview({ title, description }: CardSalesOverviewProps & { children?: React.ReactNode }) {
    return (
        <Card w="60%" flexGrow={1} rounded={'xl'} display={'flex'} flexDir={'column'} p={4}>
            <Heading fontSize={'lg'} mb={1}>
                {title}
            </Heading>
            {description && typeof description === 'string' ? (
                <Text fontSize={'xs'} color={'gray.500'}>
                    {description}
                </Text>
            ) : null}
            {description && typeof description !== 'string' ? description : null}
            <Box flexGrow={1} mt={5} px={0} py={5} borderRadius={'xl'}>
                <Line options={options} data={data} />
            </Box>
        </Card>
    );
}

CardSalesOverview.defaultProps = {
    title: 'Sales Overview',
    description: (
        <Text fontSize={'xs'} color={'gray.500'}>
            <Text ml={1} as={'span'} fontWeight={'bold'} color={'green.400'}>
                (+5) more
            </Text>
            &nbsp;in 2021
        </Text>
    ),
};

export default CardSalesOverview;
