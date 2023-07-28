import { activeUsersData } from '@/utils/mockData';
import { Box, Card, Flex, Heading, Progress, Text } from '@chakra-ui/react';
import React from 'react';

interface CardActiveUsersProps {
    title: string;
    description: React.ReactNode;
}

function CardActiveUsers({ title, description }: CardActiveUsersProps & { children?: React.ReactNode }) {
    return (
        <Card flexGrow={1} rounded={'xl'} p={4}>
            <Heading fontSize={'lg'} mb={1}>
                {title}
            </Heading>
            <Text fontSize={'xs'} color={'gray.500'}>
                {description}
            </Text>
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
                        <Text fontSize={'md'} fontWeight={'bold'}>
                            {user.value}
                        </Text>
                        <Progress mt={2} size="xs" value={user.completion} colorScheme={'teal'} />
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
