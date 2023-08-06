import { useRef } from 'react';

import { Button } from '@/components/common/Button.tsx';

export const IdNumber = ({ onNext }: IdNumberProps) => {
  const idRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <h2>주민등록번호 뒷자리를 입력해주세요</h2>
      <div>
        <label htmlFor="id-number">주민등록번호</label>
        <input ref={idRef} type="text" id="id-number" name="id-number" placeholder="주민번호를 입력해주세요" required />
      </div>
      <div>
        <Button variant={Button.variant.PRIMARY} onClick={() => onNext(idRef.current?.value ?? '')}>
          다음
        </Button>
      </div>
    </div>
  );
};

type IdNumberProps = {
  onNext: (data: string) => void;
};
