import { Column } from '@/components/Table';
import { Flex, Avatar, AvatarGroup, Progress, Text, Box } from '@chakra-ui/react';

/** projects mock data */

export const projects = [
    {
        company: {
            name: 'Chakra Soft UI Version',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png',
        },
        members: [
            { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
            { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
            { name: 'Kent Dodds', src: 'https://bit.ly/kent-c-dodds' },
            { name: 'Prosper Otemuyiwa', src: 'https://bit.ly/prosper-baba' },
            { name: 'Christian Nwamba', src: 'https://bit.ly/code-beast' },
        ],
        budget: '$50,000',
        completion: 60,
    },
    {
        company: {
            name: 'Add Progress Track',
            logo: 'https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1683437134',
        },
        members: [
            { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
            { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
        ],
        budget: '$3,000',
        completion: 10,
    },
    {
        company: {
            name: 'Fix Platform Errors',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
        },
        members: [
            { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
            { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
        ],
        budget: 'Not set',
        completion: 100,
    },
    {
        company: {
            name: 'Launch our Mobile App',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
        },
        members: [
            { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
            { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
            { name: 'Kent Dodds', src: 'https://bit.ly/kent-c-dodds' },
            { name: 'Prosper Otemuyiwa', src: 'https://bit.ly/prosper-baba' },
        ],
        budget: '$32,000',
        completion: 100,
    },
    {
        company: {
            name: 'Add the New Pricing Page',
            logo: 'https://seeklogo.com/images/J/jira-logo-C71F8C0324-seeklogo.com.png',
        },
        members: [
            { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
            { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
            { name: 'Kent Dodds', src: 'https://bit.ly/kent-c-dodds' },
            { name: 'Prosper Otemuyiwa', src: 'https://bit.ly/prosper-baba' },
            { name: 'Christian Nwamba', src: 'https://bit.ly/code-beast' },
        ],
        budget: '$400',
        completion: 25,
    },
    {
        company: {
            name: 'Redesign New Online Shop',
            logo: 'https://cdn.worldvectorlogo.com/logos/invision.svg',
        },
        members: [
            { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
            { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
        ],
        budget: '$7,600',
        completion: 40,
    },
];

type Project = (typeof projects)[0];

export const projectColumns: Column<Project>[] = [
    {
        Header: 'Companies',
        accessor: (row: Project) => (
            <Flex alignItems={'center'}>
                <Avatar
                    src={row.company.logo}
                    size={'xs'}
                    mr={3}
                    sx={{ width: 5, height: 5, ' img': { borderRadius: 0 } }}
                />
                <Text>{row.company.name}</Text>
            </Flex>
        ),
    },
    {
        Header: 'Members',
        accessor: (row: Project) => (
            <AvatarGroup size="xs" max={5}>
                {row.members.map((member, i) => (
                    <Avatar key={i} name={member.name} src={member.src} iconLabel={member.name} />
                ))}
            </AvatarGroup>
        ),
    },
    {
        Header: 'Budget',
        accessor: 'budget',
    },
    {
        Header: 'Completion',
        accessor: (row: Project) => (
            <Box w={32} color={'brand.900'}>
                <Text fontWeight={'bold'} fontSize={'xs'}>
                    {row.completion}%
                </Text>
                <Progress value={row.completion} size="xs" colorScheme="teal" />
            </Box>
        ),
    },
];

/** author mock data */

export const authors = [
    {
        name: 'Ryan Florence',
        src: 'https://bit.ly/ryan-florence',
        email: 'ryan@vandelay.com',
        position: 'Software Engineer',
        department: 'Engineering',
        status: 'Online',
        employed: '2018/01/01',
    },
    {
        name: 'Segun Adebayo',
        src: 'https://bit.ly/sage-adebayo',
        email: 'segun@vandelay.com',
        position: 'Product Manager',
        department: 'Product',
        status: 'Offline',
        employed: '2019/02/01',
    },
    {
        name: 'Kent Dodds',
        src: 'https://bit.ly/kent-c-dodds',
        email: 'kent@vandelay.com',
        position: 'Frontend Engineer',
        department: 'Engineering',
        status: 'Online',
        employed: '2020/03/01',
    },
    {
        name: 'Prosper Otemuyiwa',
        src: 'https://bit.ly/prosper-baba',
        email: 'prosper@vandelay.com',
        position: 'Backend Engineer',
        department: 'Engineering',
        status: 'Offline',
        employed: '2021/04/01',
    },
    {
        name: 'Christian Nwamba',
        src: 'https://bit.ly/code-beast',
        email: 'christian@vandelay.com',
        position: 'Developer Advocate',
        department: 'Marketing',
        status: 'Online',
        employed: '2022/05/01',
    },
    {
        name: 'Emma Bostian',
        src: 'https://bit.ly/emmabostian',
        email: 'emma@vandelay.com',
        position: 'Design Lead',
        department: 'Design',
        status: 'Online',
        employed: '2023/06/01',
    },
];

type Author = (typeof authors)[0];

export const authorColumns: Column<Author>[] = [
    {
        Header: 'Author',
        accessor: (row: Author) => (
            <Flex alignItems={'center'}>
                <Avatar src={row.src} size={'sm'} mr={3} sx={{ ' img': { borderRadius: 'md' } }} />
                <Box>
                    <Text>{row.name}</Text>
                    <Text fontSize={'xs'} fontWeight={'normal'} color={'gray.500'}>{row.email}</Text>
                </Box>
            </Flex>
        ),
    },
    {
        Header: 'Function',
        accessor: (row: Author) => (
            <Box>
                <Text>{row.position}</Text>
                <Text fontSize={'xs'} fontWeight={'normal'} color={'gray.500'}>{row.department}</Text>
            </Box>
        ),
    },
    {
        Header: 'Status',
        accessor: (row: Author) => (
            <Flex alignItems={'center'}>
                <Text px={3} py={1} borderRadius={'md'} fontWeight={'medium'} color={'white'} bgColor={row.status === 'Online' ? 'green.300' : 'gray.300'}>{row.status}</Text>
            </Flex>
        ),
    },
    {
        Header: 'Employed',
        accessor: (row: Author) => (
            <Flex alignItems={'center'}>
                <Text>{row.employed}</Text>
            </Flex>
        ),
    },
];

/** projects (2nd) mock data */

export const projectsV2 = [
    {
        company: {
            name: 'Chakra Soft UI Version',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png',
        },
        status: 'Working',
        budget: '$50,000',
        completion: 60,
    },
    {
        company: {
            name: 'Add Progress Track',
            logo: 'https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1683437134',
        },
        status: 'Canceled',
        budget: '$3,000',
        completion: 10,
    },
    {
        company: {
            name: 'Fix Platform Errors',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
        },
        status: 'Done',
        budget: 'Not set',
        completion: 100,
    },
    {
        company: {
            name: 'Launch our Mobile App',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
        },
        status: 'Done',
        budget: '$32,000',
        completion: 100,
    },
    {
        company: {
            name: 'Add the New Pricing Page',
            logo: 'https://seeklogo.com/images/J/jira-logo-C71F8C0324-seeklogo.com.png',
        },
        status: 'Working',
        budget: '$400',
        completion: 25,
    },
];

type ProjectV2 = (typeof projectsV2)[0];

export const projectColumnsV2: Column<ProjectV2>[] = [
    {
        Header: 'Companies',
        accessor: (row: ProjectV2) => (
            <Flex alignItems={'center'}>
                <Avatar
                    src={row.company.logo}
                    size={'xs'}
                    mr={3}
                    sx={{ width: 5, height: 5, ' img': { borderRadius: 0 } }}
                />
                <Text>{row.company.name}</Text>
            </Flex>
        ),
    },
    {
        Header: 'Budget',
        accessor: 'budget',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'Completion',
        accessor: (row: ProjectV2) => (
            <Box w={32} color={'brand.900'}>
                <Text fontWeight={'bold'} fontSize={'xs'}>
                    {row.completion}%
                </Text>
                <Progress value={row.completion} size="xs" colorScheme="teal" />
            </Box>
        ),
    },
];

/** timeline mock data */

export const timelineItems = [
    {
        title: '$2400, Design changes',
        createdAt: '22 DEC 7:20 PM',
        iconSrc: 'https://cdn.worldvectorlogo.com/logos/invision.svg',
    },
    {
        title: 'New order #4219423',
        createdAt: '21 DEC 7:20 PM',
        iconSrc: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png',
    },
    {
        title: 'Server Payments for April',
        createdAt: '17 DEC 7:20 PM',
        iconSrc: 'https://cdn-icons-png.flaticon.com/512/873/873120.png',
    },
    {
        title: 'New card added for order #3210145',
        createdAt: '15 DEC 7:20 PM',
        iconSrc: 'https://image.similarpng.com/very-thumbnail/2020/06/Logo-visa-icon-PNG.png',
    },
    {
        title: 'Unlock packages for Development',
        createdAt: '2 DEC 7:20 PM',
        iconSrc: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png',
    },
    {
        title: 'New order #9851258',
        createdAt: '1 DEC 7:20 PM',
        iconSrc: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png',
    },

];
