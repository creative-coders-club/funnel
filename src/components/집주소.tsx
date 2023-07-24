import { Link } from 'react-router-dom';

export const 집주소 = () => {
  return (
    <>
      <h2>집 주소를 입력해주세요</h2>
      <div>
        <label htmlFor="address">집주소</label>
        <input type="text" id="address" name="address" placeholder="집주소를 입력해주세요" required />
      </div>
      <div>
        <button>
          <Link to={'/가입완료'}>입력한 주소로 유심받기</Link>
        </button>
      </div>
    </>
  );
};
