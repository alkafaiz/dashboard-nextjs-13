import { BsFillPersonFill, BsFillCreditCardFill } from 'react-icons/bs';
import { IoHome, IoBuild, IoStatsChart, IoDocument, IoRocketSharp } from 'react-icons/io5';

export const dashboardNavs = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <IoHome />,
    },
    {
        label: 'Table',
        href: '/dashboard/table',
        icon: <IoStatsChart />,
    },
    {
        label: 'Billing',
        href: '/dashboard/billing',
        icon: <BsFillCreditCardFill />,
    },
    {
        label: 'RTL',
        href: '/dashboard/rtl',
        icon: <IoBuild />,
    },
];

export const accountNavs = [
    {
        label: 'Profile',
        href: '/profile',
        icon: <BsFillPersonFill />,
    },
    {
        label: 'Sign in',
        href: '/signin',
        icon: <IoDocument />,
    },
    {
        label: 'Log out',
        href: '/signin',
        icon: <IoRocketSharp />,
    },
];
