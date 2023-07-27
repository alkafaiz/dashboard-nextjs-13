import { Box, Card, Text } from '@chakra-ui/react';
import React from 'react';

interface CardStatsProps {
    label: string;
    primaryText: string;
    stat: number;
    icon: React.ReactElement;
}

function CardStats({ label, primaryText, stat, icon }: CardStatsProps) {
    return (
        <Card
            flexGrow={1}
            rounded={'xl'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDir={'row'}
            p={2}
            px={3}
        >
            <Box>
                <Text fontWeight={'bold'} fontSize={'xs'} color={'gray.500'}>
                    {label}
                </Text>
                <Box display={'inline-flex'} alignItems={'center'}>
                    <Text fontWeight={'bold'}>{primaryText}</Text>
                    <Text fontSize={'sm'} ml={1} fontWeight={'bold'} color={stat >= 0 ? 'green.500' : 'red.500'}>
                        {stat}%
                    </Text>
                </Box>
            </Box>
            <Box p={2} bgColor={'brand.900'} color={'white'} rounded={'xl'} fontSize={'xl'}>
                {icon}
            </Box>
        </Card>
    );
}

export default CardStats;
