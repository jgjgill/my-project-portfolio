import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/layout';
import useSWR, { SWRConfig } from 'swr';
import { UserResponse } from './study/[id]';

function MyApp({ Component, pageProps }: AppProps) {
  const { data, mutate: nicknameMutate } =
    useSWR<UserResponse>('/api/profile/me');

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
