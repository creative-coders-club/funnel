import { Link } from 'react-router-dom';

import { Button } from '@/components/common/Button.tsx';
import { useActions } from '@/hooks/useActions.tsx';

export const RegisterMethods = () => {
  const { phoneNumberRef, handleClickRegsiterMethod } = useActions();

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h2 className="text-red-400">지금 휴대폰 번호를 그대로 쓸까요?</h2>
        <div>
          <label htmlFor="phone">휴대폰 번호</label>
          <input
            ref={phoneNumberRef}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your mobile phone number"
            required
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button variant={Button.variant.PRIMARY} onClick={handleClickRegsiterMethod}>
          <Link to={'/id-number'}>내 번호 그대로 쓰기</Link>
        </Button>
        <Button variant={Button.variant.SECONDARY} onClick={handleClickRegsiterMethod}>
          <Link to={'/id-number'}>새로운 번호 쓰기</Link>
        </Button>
      </div>
    </div>
  );
};
