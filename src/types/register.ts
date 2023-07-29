export type RegisterData = {
  phone: string;
  idNumber: string;
  address: string;
};

export type RegisterAction =
  | { type: 'SET_PHONE'; payload: string }
  | { type: 'SET_ID_NUMBER'; payload: string }
  | { type: 'SET_ADDRESS'; payload: string };

export type Action = 'SET_PHONE' | 'SET_ID_NUMBER' | 'SET_ADDRESS';
