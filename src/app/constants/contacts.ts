export enum Contacts {
    LINKEDIN,
    PERSONAL_EMAIL,
    SALES_EMAIL,
    PHONE,
    ADDRESS
}

export const LINKEDIN = 'https://www.linkedin.com/company/hj-global-freight-pty-ltd/';
export const PERSONAL_EMAIL = 'jmathew@hjglobalfreight.com';
export const SALES_EMAIL = 'sales@hjglobalfreight.com';
export const PHONE = '+61449115677';
export const ADDRESS = 'Level 1/5 George St, North Strathfield NSW 2137';

export const contacts: Record<Contacts, { href: string; label: string }> = {
    [Contacts.LINKEDIN]: { href: LINKEDIN, label: 'Visit Us on LinkedIn' },
    [Contacts.PERSONAL_EMAIL]: {
        href: `mailto:${PERSONAL_EMAIL}`,
        label: PERSONAL_EMAIL,
    },
    [Contacts.SALES_EMAIL]: { href: `mailto:${SALES_EMAIL}`, label: SALES_EMAIL },
    [Contacts.PHONE]: { href: `tel:${PHONE}`, label: '+61 449 115 677' },
    [Contacts.ADDRESS]: {
        href: 'https://www.google.com/maps/place/Level+1%2F5+George+St,+North+Strathfield+NSW+2137/@-33.8623021,151.0859954,17z/data=!3m2!4b1!5s0x6b12a69dfd28ee6b:0xbc9dfe872565024f!4m6!3m5!1s0x6b12bb2bf2b2d267:0xe075a56302cf7cae!8m2!3d-33.8623066!4d151.0885703!16s%2Fg%2F11whxqn04x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        label: ADDRESS,
    },
};

export const businessHours: Array<{day: string, open: string, close: string}> = [
    { day: 'Monday', open: '08:00', close: '20:00' },
    { day: 'Tuesday', open: '08:00', close: '20:00' },
    { day: 'Wednesday', open: '08:00', close: '20:00' },
    { day: 'Thursday', open: '08:00', close: '20:00' },
    { day: 'Friday', open: '08:00', close: '20:00' },
    { day: 'Saturday', open: '08:00', close: '17:00' },
    { day: 'Sunday', open: '08:00', close: '17:00' },
];