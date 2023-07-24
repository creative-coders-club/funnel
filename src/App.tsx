import { useState } from 'react';

import { PageLayout, 가입방식, 가입완료, 주민번호, 집주소 } from '@/pages';

function App() {
  const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<'가입방식' | '주민번호' | '집주소' | '가입성공'>('가입방식');

  return (
    <PageLayout>
      {step === '가입방식' && <가입방식 onNext={() => setStep('주민번호')} />}
      {step === '주민번호' && <주민번호 onNext={() => setStep('집주소')} />}
      {step === '집주소' && <집주소 onNext={() => setStep('가입성공')} />}
      {step === '가입성공' && <가입완료 onNext={() => setStep('가입방식')} />}
    </PageLayout>
  );
}

export default App;
