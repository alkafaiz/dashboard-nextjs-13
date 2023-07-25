'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Signin from '@/components/Signin';
import Signup from '@/components/Signup';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

interface Props {
    heading?: string;
    description?: string;
}

function Page({ heading, description }: Props) {
    return (
        <>
            <Box as="main" minH="100vh" py={4}>
                <Box
                    top={0}
                    position={'relative'}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: -20,
                        right: 0,
                        bg: 'brand.900',
                        width: '50vw',
                        minH: 400,
                        height: '90vh',
                        zIndex: 0,
                        borderLeftRadius: 15,
                        bgImage: 'url(/images/bg-lines.png)',
                        bgPosition: 'center',
                        bgSize: 'auto',
                    }}
                ></Box>
                <Container maxW={'6xl'}>
                    <Navbar variant="primary" fixedVariant />
                    <Box my={'200px'}>
                        <Signin />
                    </Box>
                </Container>
                <Container maxW={'6xl'} my={8}>
                    <Footer />
                </Container>
            </Box>
        </>
    );
}

Page.defaultProps = {
    heading: 'Welcome!',
    description: 'Use these awesome forms to login or create new account in your project for free.',
};

export default Page;
