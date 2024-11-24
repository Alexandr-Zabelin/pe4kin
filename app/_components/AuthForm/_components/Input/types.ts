import { HTMLInputTypeAttribute } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  disabled?: boolean;
}
