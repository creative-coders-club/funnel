import { useContext, useRef } from 'react';

import { RegisterDataContext } from '@/contexts/registerContext.tsx';
import { Action } from '@/types/register.ts';

export const useActions = () => {
  const { dispatch, registerData } = useContext(RegisterDataContext);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const iDNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const handleClickRegsiterMethod = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatchIfDefined(phoneNumberRef, 'SET_PHONE');
  };

  const handleClickId = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatchIfDefined(iDNumberRef, 'SET_ID_NUMBER');
  };

  const handleClickAddress = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    handleClickRegsiterMethod,
    iDNumberRef,
    handleClickId,
    addressRef,
    handleClickAddress,
    submitRegisterData,
  };
};
