import {
    Box,
    Button,
    Card,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsFacebook, BsApple, BsGoogle } from 'react-icons/bs';

function Signup() {
    return (
        <Card px={10} py={10} w="full" maxW={'450px'} bg={'white'} textAlign="center" boxShadow={'xl'} borderRadius={15}>
            <Heading size="sm" mb={5}>
                Register with
            </Heading>
            <Box display="flex" w="full" justifyContent="center">
                <Button variant={'ghost'} display={'flex'} h={'75px'} p={0} w={'75px'} border={'1px solid lightgray'}>
                    <BsFacebook size={25} color='#313860'/>
                </Button>
                <Button variant={'ghost'} display={'flex'} h={'75px'} p={0} w={'75px'} border={'1px solid lightgray'} mx={3}>
                    <BsApple size={25} color='#313860'/>
                </Button>
                <Button variant={'ghost'} display={'flex'} h={'75px'} p={0} w={'75px'} border={'1px solid lightgray'}>
                    <BsGoogle size={25} color='#313860'/>
                </Button>
            </Box>
            <Text fontWeight={'bold'} my={3} color={'lightgray'}>or</Text>

            <form>
                <FormControl mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder="Your full name" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Email address</FormLabel>
                    <Input size={'lg'} type="email" placeholder="Your email address" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Your password" />
                </FormControl>
                <FormControl mb={4}>
                    <Switch float={'left'} mr={2} />
                    <FormLabel>Remember me</FormLabel>
                </FormControl>
                <Button mt={4} type="submit" w={'full'}>
                    SIGN UP
                </Button>
            </form>
            <Text color="gray" mt={4}>
                Already have an account?{' '}
                <Link fontWeight={'bold'} href="/signin" color="brand.900" _hover={{ color: 'brand.800' }}>
                    Sign in
                </Link>
            </Text>
        </Card>
    );
}

export default Signup;
