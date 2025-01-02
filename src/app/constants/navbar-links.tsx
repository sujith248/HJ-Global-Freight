import {
    HomeIcon,
    InformationCircleIcon,
    TruckIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';

export const navLinks: Array<{
    href: string;
    label: string;
    icon: JSX.Element;
}> = [
    { href: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
    {
        href: '/about',
        label: 'About Us',
        icon: <InformationCircleIcon className="h-5 w-5" />,
    },
    {
        href: '/services',
        label: 'Services',
        icon: <TruckIcon className="h-5 w-5" />,
    },
    {
        href: '/contact',
        label: 'Contact Us',
        icon: <PhoneIcon className="h-5 w-5" />,
    },
];
