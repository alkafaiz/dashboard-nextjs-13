import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoNotifications, IoSettingsSharp, IoSearch } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { accountNavs, dashboardNavs } from '@/utils/routes';

function AppBar() {
    const path = usePathname();

    const activeNav = React.useMemo(() => {
        const nav = [...dashboardNavs, ...accountNavs].find((nav) => nav.href === path);
        return nav;
    }, [path]);

    return (
        <Flex justifyContent={'space-between'} pos={'sticky'} top={0} bgColor={'#F8F9FA'} zIndex={9} p={4}>
            <Box>
                <Breadcrumb fontSize={'xs'}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="">Pages</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href={activeNav?.href}>{activeNav?.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Text fontSize="sm" fontWeight={'bold'}>
                    {activeNav?.label}
                </Text>
            </Box>
            <Flex>
                <InputGroup size={'md'}>
                    <InputLeftElement pointerEvents="none">
                        <IoSearch color="gray.300" />
                    </InputLeftElement>
                    <Input
                        variant={'outline'}
                        bgColor={'white'}
                        borderColor={'gray.100'}
                        fontSize={'sm'}
                        placeholder="Type here..."
                    />
                </InputGroup>
                <Link
                    minW={'fit-content'}
                    flexWrap={'nowrap'}
                    href="/signin"
                    display={'flex'}
                    alignItems={'center'}
                    color={'gray.500'}
                    fontSize={'sm'}
                    fontWeight={'bold'}
                    mx={2}
                >
                    <BsFillPersonFill style={{ marginRight: 4 }} />
                    Sign In
                </Link>
                <Menu>
                    <MenuButton
                        color={'gray.500'}
                        as={IconButton}
                        size={'md'}
                        aria-label="Options"
                        icon={<IoSettingsSharp />}
                        variant="ghost"
                    />
                    <MenuList>
                        <MenuItem>Preference</MenuItem>
                        <MenuItem>Account</MenuItem>
                        <MenuDivider />
                        <MenuItem>Settings</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton
                        color={'gray.500'}
                        as={IconButton}
                        size={'md'}
                        aria-label="Options"
                        icon={<IoNotifications />}
                        variant="ghost"
                    />
                    <MenuList>
                        <Box px={2}>
                            <Text fontSize={'sm'} fontWeight={'bold'}>
                                Notifications
                            </Text>
                            <Text fontSize={'xs'} color={'gray.500'}>
                                No new notifications
                            </Text>
                        </Box>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
}

export default AppBar;
