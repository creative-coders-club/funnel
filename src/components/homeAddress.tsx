import { useRef } from 'react';

import { Button } from '@/components/common/Button.tsx';

export const HomeAddress = ({ onNext }: HomeAddressProps) => {
  const addressRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <h2>집 주소를 입력해주세요</h2>
      <div>
        <label htmlFor="address">집주소</label>
        <input ref={addressRef} type="text" id="address" name="address" placeholder="집주소를 입력해주세요" required />
      </div>
      <div>
        <Button variant={Button.variant.PRIMARY} onClick={() => onNext(addressRef.current?.value ?? '')}>
          입력한 주소로 유심받기
        </Button>
      </div>
    </div>
  );
};

type HomeAddressProps = {
  onNext: (data: string) => void;
};
