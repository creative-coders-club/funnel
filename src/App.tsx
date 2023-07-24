import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { 가입방식 } from '@/components/가입방식.tsx';
import { 가입완료 } from '@/components/가입완료.tsx';
import { 주민번호 } from '@/components/주민번호.tsx';
import { 집주소 } from '@/components/집주소.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/가입방식" element={<가입방식 />} />
        <Route path="/주민번호" element={<주민번호 />} />
        <Route path="/집주소" element={<집주소 />} />
        <Route path="/가입완료" element={<가입완료 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
