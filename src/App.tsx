import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeAddress } from '@/components/homeAddress.tsx';
import { IdNumber } from '@/components/idNumber.tsx';
import { RegisterComplete } from '@/components/registerComplete.tsx';
import { RegisterMethods } from '@/components/registerMethods.tsx';
import { RegisterDataContext } from '@/contexts/registerContext.tsx';
import { reducer } from '@/reducers/registerReducer.ts';

const initialState = {
  phone: '',
  idNumber: '',
  address: '',
};

function App() {
  const [registerData, dispatch] = useReducer(reducer, initialState);

  return (
    <RegisterDataContext.Provider value={{ registerData, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterMethods />} />
          <Route path="/주민번호" element={<IdNumber />} />
          <Route path="/집주소" element={<HomeAddress />} />
          <Route path="/가입완료" element={<RegisterComplete />} />
        </Routes>
      </BrowserRouter>
    </RegisterDataContext.Provider>
  );
}

export default App;
