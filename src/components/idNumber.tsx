import { Link } from 'react-router-dom';

import { useActions } from '@/hooks/useActions.tsx';

export const IdNumber = () => {
  const { iDNumberRef, onClick주민번호 } = useActions();

  return (
    <>
      <h2>주민등록번호 뒷자리를 입력해주세요</h2>
      <div>
        <label htmlFor="id-number">주민등록번호</label>
        <input
          ref={iDNumberRef}
          type="text"
          id="id-number"
          name="id-number"
          placeholder="주민번호를 입력해주세요"
          required
        />
      </div>
      <div>
        <button onClick={onClick주민번호}>
          <Link to={'/집주소'}>다음</Link>
        </button>
      </div>
    </>
  );
};
