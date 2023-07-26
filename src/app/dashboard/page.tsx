'use client';
import { BsFillPersonFill } from 'react-icons/bs';
import { Box, Divider, Flex, Heading, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const navs = [
    {
        label: 'Dashboard',
        href: '/',
    },
    {
        label: 'Users',
        href: '/users',
    },
    {
        label: 'Settings',
        href: '/settings',
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
                    {navs.map(({ label, href }) => (
                        <LinkBox
                            as="a"
                            maxW="sm"
                            rounded="lg"
                            p={3}
                            display={'flex'}
                            alignItems={'center'}
                            color={'gray.400'}
                            _hover={{ bgColor: 'white', boxShadow: 'sm', color: 'gray.900' }}
                        >
                            <Box
                                bgColor={'white'}
                                p={'1.5'}
                                boxShadow={'sm'}
                                rounded={'lg'}
                                color={'brand.900'}
                                mr={3}
                                _hover={{ bgColor: 'brand.900', color: 'white' }}
                            >
                                <BsFillPersonFill />
                            </Box>
                            <LinkOverlay href={href}>
                                <Text fontWeight={'bold'} fontSize={'xs'}>
                                    {label}
                                </Text>
                            </LinkOverlay>
                        </LinkBox>
                    ))}
                </Stack>
            </Box>
            <Box flexGrow={1} p="4" bg="green.400">
                Box 2
            </Box>
        </Flex>
    );
};

export default DashboardPage;
