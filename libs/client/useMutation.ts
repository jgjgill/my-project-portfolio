import { useState } from 'react';

const useMutation = (
  url: string
): [
  (data: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
] => {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const mutation = (data: any) => {
    setState({ ...state, loading: true });
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch(() => {})
      .then((data) => setState({ ...state, data }))
      .catch((error) => setState({ ...state, error }))
      .finally(() => setState({ ...state, loading: false }));
  };
  const { loading, data, error } = state;
  return [mutation, { loading, data, error }];
};

export default useMutation;
