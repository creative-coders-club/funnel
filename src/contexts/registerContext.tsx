import { createContext } from 'react';

import { RegisterAction, RegisterData } from '@/types/register.ts';

export const RegisterDataContext = createContext<RegisterDataContext>({
  registerData: {
    phone: '',
    idNumber: '',
    address: '',
  },
  dispatch: () => {
    // do nothing
  },
});

export type RegisterDataContext = {
  registerData: RegisterData;
  dispatch: React.Dispatch<RegisterAction>;
};
