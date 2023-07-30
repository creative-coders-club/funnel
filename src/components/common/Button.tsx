import { ButtonHTMLAttributes, ReactNode } from 'react';

enum ButtonVariant {
  PRIMARY,
  SECONDARY,
}

enum ButtonSize {
  SMALL,
  MEDIUM,
}

const SIZE_MAPS: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: 'w-full text-md flex items-center justify-center py-5',
  [ButtonSize.MEDIUM]: 'w-full text-md flex items-center justify-center py-5',
};

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: 'bg-blue-500 text-white',
  [ButtonVariant.SECONDARY]: 'bg-transparent text-gray-500',
};

type ButtonProps = {
  variant: ButtonVariant;
  children?: ReactNode;
  size: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, variant, size, ...rest } = props;

  const buttonLayoutClasses = 'inline-flex items-center rounded-2xl px-2 py-1 font-medium leading-none';

  const finalButtonClasses = `${buttonLayoutClasses} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]}`;

  return (
    <button className={finalButtonClasses} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
};

Button.variant = ButtonVariant;
Button.size = ButtonSize;
