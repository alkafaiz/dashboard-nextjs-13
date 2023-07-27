import { Box, Button, Card, Text } from '@chakra-ui/react';
import React from 'react';
import { IoHelpCircle } from 'react-icons/io5';

function CardDocumentation() {
    return (
        <Card boxShadow={'none'} bgColor={'brand.900'} rounded={15} p={4} color={'white'}>
            <Box bgColor={'white'} fontSize={'2xl'} p={'1.5'} width={'fit-content'} rounded={'lg'} color="brand.900">
                <IoHelpCircle />
            </Box>
            <Text fontWeight={'medium'} fontSize={'lg'} mt={4}>Need help?</Text>
            <Text fontSize={'sm'} mb={3}>Please check our docs</Text>
            <Button variant={'solid'} bgColor={'white'}>
                DOCUMENTATION
            </Button>
        </Card>
    );
}

export default CardDocumentation;
