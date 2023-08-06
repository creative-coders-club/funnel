import { RegisterData } from '@/types/register.ts';

export const useActions = () => {
  const submitRegisterData = (registerData: RegisterData) => {
    console.log(registerData);
  };

  return {
    submitRegisterData,
  };
};
