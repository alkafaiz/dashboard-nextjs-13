import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

// get author from package.json
const author = require('../../package.json').author?.name || 'Author';
const authorEmail = require('../../package.json').author?.email || '#';

function Footer() {
    return (
        <Box as="footer" display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Text fontSize="sm" textAlign="center" color="gray.500">
                &copy; {new Date().getFullYear()}, made with ❤️ by{' '}
                <Link fontWeight={'bold'} color={'brand.900'} href={`mailto:${authorEmail}`}>
                    {author}
                </Link>
                .
            </Text>
            <UnorderedList
                as={'nav'}
                styleType={'none'}
                display={'flex'}
                justifyContent={''}
                gap={4}
                color={'gray.500'}
                fontSize={'sm'}
            >
                <ListItem>
                    <Link href="/dashboard">About Us</Link>
                </ListItem>
                <ListItem>
                    <Link href="/dashboard">Privacy</Link>
                </ListItem>
                <ListItem>
                    <Link href="/dashboard">Blog</Link>
                </ListItem>
                <ListItem>
                    <Link href="/dashboard">License</Link>
                </ListItem>
            </UnorderedList>
        </Box>
    );
}

export default Footer;
