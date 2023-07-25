import { Heading, UnorderedList, ListItem, ListIcon, Button, Box, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillBoxFill, BsFillPersonFill, BsPersonCircle } from 'react-icons/bs';
import { ImKey } from 'react-icons/im';

interface Props {
    variant?: 'ghost' | 'primary';
}

function Navbar({ variant }: Props) {
    // change background color on scroll
    const [scrollNav, setScrollNav] = useState(variant === 'primary');
    const changeNav = () => {
        if (variant === 'ghost') return;

        if (window.scrollY >= 50) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);

    const navBg = scrollNav ? 'rgba(255,255,255,0.8)' : 'transparent';
    const navColor = scrollNav ? 'brand.800' : 'white';
    const navShadow = scrollNav ? 'lg' : 'none';
    const navBorderRadius = scrollNav ? '15' : '0';
    const navBgBlur = scrollNav ? 'blur(3px)' : 'blur(0)';

    const ctaBg = scrollNav ? 'brand.800' : 'white';
    const ctaColor = scrollNav ? 'white' : 'brand.800';

    return (
        <Box
            borderRadius={navBorderRadius}
            color={navColor}
            backdropFilter={navBgBlur}
            bg={navBg}
            boxShadow={navShadow}
            transition={'0.4s all ease'}
            as={'nav'}
            display={'flex'}
            justifyContent={'space-between'}
            w={'full'}
            alignItems={'center'}
            mx={'auto'}
            my={5}
            px={6}
            py={3}
            fontSize={'xs'}
            zIndex={1}
            position={'sticky'}
            top={5}
        >
            <Heading flexBasis={'100%'} size={'md'} display={'flex'}>
                <BsFillBoxFill />
                &ensp;VANDELAY INDUSTRIES
            </Heading>
            <UnorderedList flexBasis={'100%'} styleType={'none'} display={'flex'} justifyContent={''} gap={4}>
                <ListItem>
                    <Link href="/dashboard" fontWeight={'bold'}>
                        <ListIcon as={BsFillBoxFill} />
                        DASHBOARD
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/dashboard" fontWeight={'bold'}>
                        <ListIcon as={BsFillPersonFill} />
                        PROFILE
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/dashboard" fontWeight={'bold'}>
                        <ListIcon as={BsPersonCircle} />
                        SIGN UP
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/dashboard" fontWeight={'bold'}>
                        <ListIcon as={ImKey} />
                        SIGN IN
                    </Link>
                </ListItem>
            </UnorderedList>
            <Box flexBasis={'100%'}>
                <Button
                    float={'right'}
                    variant={'solid'}
                    bg={ctaBg}
                    color={ctaColor}
                    px={9}
                    fontSize={'sm'}
                    borderRadius={'full'}
                >
                    Free Download
                </Button>
            </Box>
        </Box>
    );
}

Navbar.defaultProps = {
    variant: 'ghost',
};

export default Navbar;
