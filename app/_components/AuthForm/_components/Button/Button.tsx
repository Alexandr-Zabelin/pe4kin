import { FC } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  children,
  type,
  disabled,
  fullWidth,
  danger,
  secondary,
}) => (
  <button
    type={type}
    disabled={disabled}
    className={clsx(
      'flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      disabled && 'cursor-default opacity-50',
      fullWidth && 'w-full',
      danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
      secondary ? 'text-gray-900' : 'text-white',
      !secondary &&
        !danger &&
        'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600',
    )}
  >
    {children}
  </button>
);
