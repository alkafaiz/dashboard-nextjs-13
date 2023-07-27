import { Box, Card, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

function BannerHero() {
    return (
        <Card
            flexGrow={1}
            rounded={'xl'}
            overflow={'hidden'}
            bgColor={'gray.800'}
            color={'white'}
            bgImage={'url(/images/brooke-cagle.png)'}
            bgSize={'cover'}
        >
            <Box
                p={4}
                bg={
                    'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 64%, rgba(0,0,0,0) 100%)'
                }
                display={'flex'}
                flexDir={'column'}
                h={'full'}
            >
                <Heading my={2} fontSize={'lg'}>
                    Work with the Rockets
                </Heading>
                <Text w={360} fontSize={'xs'}>
                    Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the
                    opportunity first.
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
        </Card>
    );
}

export default BannerHero;
