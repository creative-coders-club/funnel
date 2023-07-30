import { Link } from 'react-router-dom';

import { useActions } from '@/hooks/useActions.tsx';

export const RegisterMethods = () => {
  const { phoneNumberRef, onClick가입방식 } = useActions();

  return (
    <>
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
      <div>
        <button onClick={onClick가입방식}>
          <Link to={'/주민번호'}>내 번호 그대로 쓰기</Link>
        </button>
        <button>
          <Link to={'/주민번호'}>새로운 번호 쓰기</Link>
        </button>
      </div>
    </>
  );
};
