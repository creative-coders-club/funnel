import { RegisterAction, RegisterData } from '@/types/register.ts';

export const reducer = (state: RegisterData, action: RegisterAction): RegisterData => {
  switch (action.type) {
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_ID_NUMBER':
      return { ...state, idNumber: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
