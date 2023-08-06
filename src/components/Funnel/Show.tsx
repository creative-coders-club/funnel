import { PropsWithChildren } from 'react';

export const Show = ({ condition, children }: PropsWithChildren<ShowProps>) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};

type ShowProps = {
  condition: boolean;
};
