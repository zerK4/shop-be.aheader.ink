import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { NextPage } from 'next';
import { ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="text-sm">
        <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
      </div>
    );
  }

  return (
    <div className="text-sm">{getLayout(<Component {...pageProps} />)}</div>
  );
}
