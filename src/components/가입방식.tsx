import { Link } from 'react-router-dom';

export const 가입방식 = () => {
  return (
    <>
      <h2>지금 휴대폰 번호를 그대로 쓸까요?</h2>
      <div>
        <label htmlFor="phone">휴대폰 번호</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your mobile phone number" required />
      </div>
      <div>
        <button>
          <Link to={'/주민번호'}>내 번호 그대로 쓰기</Link>
        </button>
        <button>
          <Link to={'/주민번호'}>새로운 번호 쓰기</Link>
        </button>
      </div>
    </>
  );
};
