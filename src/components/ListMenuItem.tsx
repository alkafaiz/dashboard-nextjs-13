import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';

interface ListMenuItemProps {
    label: string;
    href: string;
    icon: React.ReactElement;
    isActive: boolean;
}

const ListMenuItem = ({ label, href, icon, isActive }: ListMenuItemProps) => {
    const activeStyles = {
        linkBox: {
            bgColor: 'white',
            boxShadow: 'sm',
            color: 'gray.900',
        },
        icon: {
            bgColor: 'brand.900',
            color: 'white',
        },
    };

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
            transition={'all .1s ease-in-out'}
            _hover={activeStyles.linkBox}
            {...(isActive && activeStyles.linkBox)}
        >
            <Box
                bgColor={'white'}
                p={'1.5'}
                boxShadow={'sm'}
                rounded={'lg'}
                color={'brand.900'}
                mr={3}
                _groupHover={activeStyles.icon}
                {...(isActive && activeStyles.icon)}
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
