import { Heading, UnorderedList, ListItem, ListIcon, Button, Box, Link } from '@chakra-ui/react';
import React from 'react';
import { BsFillBoxFill, BsFillPersonFill, BsPersonCircle } from 'react-icons/bs';
import { ImKey } from 'react-icons/im';

function Navbar() {
    return (
        <Box
            as={'nav'}
            display={'flex'}
            justifyContent={'space-between'}
            w={'full'}
            alignItems={'center'}
            width={'80%'}
            mx={'auto'}
            py={5}
            fontSize={'xs'}
            zIndex={1}
            position={'relative'}
        >
            <Heading flexBasis={'100%'} size={'md'} display={'flex'}>
                <BsFillBoxFill />&ensp;VANDELAY INDUSTRIES
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
                <Button float={'right'} variant={'solid'} bg={'white'} px={9} fontSize={'sm'} borderRadius={'full'}>
                    Free Download
                </Button>
            </Box>
        </Box>
    );
}

export default Navbar;
