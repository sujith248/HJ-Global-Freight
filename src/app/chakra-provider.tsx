// src/app/provider.tsx
'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react';

const ChakraProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
