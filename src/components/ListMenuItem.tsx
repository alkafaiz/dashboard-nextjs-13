import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

interface ListMenuItemProps {
    label: string;
    href: string;
    icon: React.ReactElement;
}

const ListMenuItem = ({ label, href, icon }: ListMenuItemProps) => {
    return (
        <LinkBox
            role="group"
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
                _groupHover={{ bgColor: 'brand.900', color: 'white' }}
            >
                {icon}
            </Box>
            <LinkOverlay href={href}>
                <Text fontWeight={'bold'} fontSize={'xs'}>
                    {label}
                </Text>
            </LinkOverlay>
        </LinkBox>
    );
};

export default ListMenuItem;
