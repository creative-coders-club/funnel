import { useState } from 'react';

import { HomeAddress } from '@/components/homeAddress.tsx';
import { IdNumber } from '@/components/idNumber.tsx';
import { RegisterComplete } from '@/components/registerComplete.tsx';
import { RegisterMethods } from '@/components/registerMethods.tsx';
import { RegisterData } from '@/types/register.ts';
import './App.css';

const initialState: RegisterData = {
  phone: '',
  idNumber: '',
  address: '',
};

function App() {
  const [registerData, setRegisterData] = useState(initialState);
  const [step, setStep] = useState<'가입방식' | '주민번호' | '집주소' | '가입완료'>('가입방식');

  return (
    <div className="h-full">
      {step === '가입방식' && (
        <RegisterMethods
          onNext={(data) => {
            setRegisterData((prev) => ({ ...prev, phone: data }));
            setStep('주민번호');
          }}
        />
      )}
      {step === '주민번호' && (
        <IdNumber
          onNext={(data) => {
            setRegisterData((prev) => ({ ...prev, idNumber: data }));
            setStep('집주소');
          }}
        />
      )}
      {step === '집주소' && (
        <HomeAddress
          onNext={async (data) => {
            setRegisterData((prev) => ({ ...prev, address: data }));
            setStep('가입완료');
          }}
        />
      )}
      {step === '가입완료' && (
        <RegisterComplete
          onNext={() => {
            console.log(registerData);
            setStep('가입방식');
            setRegisterData(initialState);
          }}
        />
      )}
    </div>
  );
}

export default App;
