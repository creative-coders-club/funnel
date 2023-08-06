import { useRef } from 'react';

import { Button } from '@/components/common/Button.tsx';

export const RegisterMethods = ({ onNext }: RegisterMethodsProps) => {
  const phoneRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h2 className="text-red-400">지금 휴대폰 번호를 그대로 쓸까요?</h2>
        <div>
          <label htmlFor="phone">휴대폰 번호</label>
          <input
            ref={phoneRef}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your mobile phone number"
            required
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button variant={Button.variant.PRIMARY} onClick={() => onNext(phoneRef.current?.value ?? '')}>
          내 번호 그대로 쓰기
        </Button>
        <Button variant={Button.variant.SECONDARY} onClick={() => onNext(phoneRef.current?.value ?? '')}>
          새로운 번호 쓰기
        </Button>
      </div>
    </div>
  );
};

type RegisterMethodsProps = {
  onNext: (data: string) => void;
};
