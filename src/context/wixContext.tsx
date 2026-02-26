"use client"

import { products, collections } from '@wix/stores';
import { createClient, OAuthStrategy } from '@wix/sdk';
import Cookies from 'js-cookie';
import { createContext, ReactNode } from 'react';

// const refreshToken = Cookies.get("session") || "{}";

//To access the Wix APIs, create a client with the createClient() function imported from the @wix/sdk package.
const wixClient = createClient({
    modules: { products, collections },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: JSON.parse(
            Cookies.get("session") || '{"accessToken": {}, "refreshToken": {}}',
        ),
    }),
});

export type WixClient = typeof wixClient;

export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <WixClientContext.Provider value={wixClient}>
            {children}
        </WixClientContext.Provider>
    );
};