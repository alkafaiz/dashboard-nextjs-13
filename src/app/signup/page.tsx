'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Signup from '@/components/Signup';
import { Box, Heading, Text } from '@chakra-ui/react';

interface Props {
    heading?: string;
    description?: string;
}

function Page({ heading, description }: Props) {
    return (
        <>
            <Box as="main" minH="100vh" py={4} px={{ base: 4, lg: 4 }}>
                <Box
                    mx="auto"
                    color={'white'}
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
                    pb={10}
                    borderRadius={15}
                    position={'relative'}
                >
                    <Navbar />
                    <Box textAlign="center" position={'relative'} mt={10}>
                        <Heading size="lg" fontWeight="bold">
                            {heading}
                        </Heading>
                        <Text mt={4} fontSize="md" w={'96'} textAlign={'center'} mx={'auto'}>
                            {description}
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" justifyContent={'center'} mb={32}>
                    <Signup />
                </Box>
            </Box>
            <Box width={'80%'} pb={8} mx={'auto'}>
                <Footer />
            </Box>
        </>
    );
}

Page.defaultProps = {
    heading: 'Welcome!',
    description: 'Use these awesome forms to login or create new account in your project for free.',
};

export default Page;
