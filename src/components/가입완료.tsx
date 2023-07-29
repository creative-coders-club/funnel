import { useLayoutEffect } from 'react';

import { useActions } from '@/hooks/useActions.tsx';

export const 가입완료 = () => {
  const { submitRegisterData } = useActions();

  useLayoutEffect(() => {
    submitRegisterData();
  }, []);
  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>가입완료!</h1>
      </div>
      <button>다음</button>
    </>
  );
};
