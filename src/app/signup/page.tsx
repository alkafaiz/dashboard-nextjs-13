'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Signup from '@/components/Signup';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const heading = 'Welcome!';
const description = 'Use these awesome forms to login or create new account in your project for free.';

function Page() {
    return (
        <>
            <Box as="main" minH="100vh" py={4} px={{ base: 4, lg: 4 }}>
                <Box
                    position={'relative'}
                    mx={'auto'}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bg: 'brand.900',
                        width: '100%',
                        minH: 400,
                        height: '55vh',
                        zIndex: 0,
                        borderRadius: 15,
                        bgImage: 'url(/images/bg-lines.png)',
                        bgPosition: 'center',
                        bgSize: 'auto',
                    }}
                ></Box>
                <Container
                    color={'white'}
                    pb={10}
                    maxW={'6xl'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Navbar />
                    <Box textAlign="center" position={'relative'} my={10}>
                        <Heading size="lg" fontWeight="bold">
                            {heading}
                        </Heading>
                        <Text mt={4} fontSize="md" w={'96'} textAlign={'center'} mx={'auto'}>
                            {description}
                        </Text>
                    </Box>
                    <Signup />
                </Container>
            </Box>
            <Container maxW={'6xl'} my={8}>
                <Footer />
            </Container>
        </>
    );
}

export default Page;
