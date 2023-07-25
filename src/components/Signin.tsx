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

function Signin() {
    return (
        <Box w="full" maxW={'450px'} bg={'white'}>
            <Heading size="xl" color={'brand.900'}>
                Welcome Back
            </Heading>
            <Text fontWeight={'bold'} mt={3} mb={8} color={'gray.400'}>
                Enter your email and password to sign in
            </Text>

            <form>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
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
            <Text color="gray" mt={4} textAlign={'center'}>
                Don't have an account?{' '}
                <Link fontWeight={'bold'} href="/signup" color="brand.900" _hover={{ color: 'brand.800' }}>
                    Sign up
                </Link>
            </Text>
        </Box>
    );
}

export default Signin;
