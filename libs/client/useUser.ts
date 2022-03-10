// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
import useSWR from 'swr';

const useUser = () => {
  const { data } = useSWR('/api/users/me');

  return {
    user: data?.profile,
    isLoading: !data && !data?.error,
    error: data?.error,
  };
};

export default useUser;
