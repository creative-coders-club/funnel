import { Button } from '@/components/common/Button.tsx';

export const RegisterComplete = ({ onNext }: RegisterCompleteProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <img src="" alt="" />
        <h1>가입완료!</h1>
      </div>
      <Button variant={Button.variant.PRIMARY} onClick={onNext}>
        다음
      </Button>
    </div>
  );
};

type RegisterCompleteProps = {
  onNext: () => void;
};
