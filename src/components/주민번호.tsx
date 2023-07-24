import { Link } from 'react-router-dom';

export const 주민번호 = () => {
  return (
    <>
      <h2>주민등록번호 뒷자리를 입력해주세요</h2>
      <div>
        <label htmlFor="id-number">주민등록번호</label>
        <input type="number" id="id-number" name="id-number" placeholder="주민번호를 입력해주세요" required />
      </div>
      <div>
        <button>
          <Link to={'/집주소'}>다음</Link>
        </button>
      </div>
    </>
  );
};
