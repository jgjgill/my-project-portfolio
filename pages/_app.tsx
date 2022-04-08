import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/layout';
import useSWR, { SWRConfig } from 'swr';
import { UserResponse } from './study/[id]';

function MyApp({ Component, pageProps }: AppProps) {
  const { data: user1, mutate: nicknameMutate } =
  useSWR<UserResponse>('/api/profile/me');
  // console.log(user1)

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json())
      }}
    >
      <Layout>
        <Component {...pageProps} user={user1} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
