import styled from '@emotion/styled';

import { Button } from '@/components/Button.tsx';
import { Input } from '@/components/Input.tsx';
import { Label } from '@/components/Label.tsx';

type Props = {
  onNext: (...args: any) => void;
};
export function 집주소({ onNext }: Props) {
  return (
    <Wrapper>
      <section style={{ flex: 1, width: '100%' }}>
        <h1>집 주소를 입력해주세요</h1>
        <Label htmlFor="address">집주소</Label>
        <Input id="address" autoFocus />
      </section>
      <section>
        <Button onClick={onNext}>입력한 주소로 유심 받기</Button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
