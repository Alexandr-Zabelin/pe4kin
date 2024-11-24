import { FC } from 'react';
import clsx from 'clsx';

import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  id,
  label,
  type,
  register,
  errors,
  required,
  disabled,
}) => (
  <>
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          'form-input block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6',
          errors[id] && 'focus:ring-rose-500',
          disabled && 'cursor-default opacity-50',
        )}
      />
    </div>
  </>
);
