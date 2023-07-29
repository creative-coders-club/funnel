import { useContext, useRef } from 'react';

import { RegisterDataContext } from '@/contexts/registerContext.tsx';
import { Action } from '@/types/register.ts';

export const useActions = () => {
  const { dispatch, registerData } = useContext(RegisterDataContext);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const iDNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const onClick가입방식 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatchIfDefined(phoneNumberRef, 'SET_PHONE');
  };

  const onClick주민번호 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatchIfDefined(iDNumberRef, 'SET_ID_NUMBER');
  };

  const onClick집주소 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatchIfDefined(addressRef, 'SET_ADDRESS');
  };

  const dispatchIfDefined = (ref: React.RefObject<HTMLInputElement>, type: Action) => {
    if (ref.current) {
      dispatch({ type, payload: ref.current.value });
    }
  };

  const submitRegisterData = () => {
    console.log(registerData);
  };

  return {
    phoneNumberRef,
    onClick가입방식,
    iDNumberRef,
    onClick주민번호,
    addressRef,
    onClick집주소,
    submitRegisterData,
  };
};
