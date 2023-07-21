'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, defineStyle } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    teal: {
        500: '#4FD1C5',
    },
    brand: {
        900: '#4FD1C5',
        800: '#313860',
        700: '#2a69ac',
    },
};

const components = {
    FormLabel: {
        baseStyle: {
            fontSize: 'sm',
        },
    },
    Input: {
        baseStyle: {
            field: {
                borderRadius: 15,
            },
        },
        defaultProps: {
            size: 'lg',
        },
    },
    Button: {
        baseStyle: {
            borderRadius: 15,
        },
        sizes: {
            lg: {
                fontSize: 'sm',
            },
        },
        variants: {
            brandPrimary: defineStyle({
                background: 'brand.900',
                color: 'white',
                _hover: {
                    background: 'brand.800',
                },

                // let's also provide dark mode alternatives
                _dark: {
                    background: 'orange.300',
                    color: 'orange.800',
                },
            }),
        },
        defaultProps: {
            size: 'lg',
            variant: 'brandPrimary',
        },
    },
    Card: {
        baseStyle: {
            borderRadius: 15,
        },
    },
    Switch: {
        baseStyle: {
            track: {
                _checked: {
                    bg: 'brand.900',
                },
            },
        },
    },
};

export const theme = extendTheme({ colors, components });

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
