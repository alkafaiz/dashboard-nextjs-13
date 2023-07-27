import { Box, Card, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

function CardHero() {
    return (
        <Card flexGrow={1} rounded={'xl'} p={4} display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} flexDir={'column'}>
                <Text color={'gray.500'} fontWeight={'bold'} fontSize={'xs'}>
                    Built by developers
                </Text>
                <Heading my={2} fontSize={'lg'}>
                    Purity UI Dashboard
                </Heading>
                <Text w={320} fontSize={'xs'} color={'gray.500'}>
                    From colors, cards, typography to complex elements, you will find the full documentation.
                </Text>
                <Link
                    mt={'auto'}
                    fontSize={'xs'}
                    fontWeight={'bold'}
                    href="#"
                    display={'inline-flex'}
                    alignItems={'center'}
                >
                    Read more <IoArrowForwardOutline style={{ marginLeft: 4 }} />
                </Link>
            </Box>
            <Box rounded={'xl'} width={190} height={170} bgColor={'brand.900'}></Box>
        </Card>
    );
}

export default CardHero;
