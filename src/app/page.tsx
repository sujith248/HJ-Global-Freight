'use client';

import { Box, Button, Heading, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <Box p={5}>
            <Heading as="h1" size="xl" mb={4}>
                Welcome to My Next.js Website
            </Heading>
            <Text mb={4}>
                This is a sample website built using Next.js, TypeScript, and
                Chakra UI.
            </Text>
            <Button colorScheme="teal">Get Started</Button>
        </Box>
    );
}
