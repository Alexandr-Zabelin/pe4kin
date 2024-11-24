import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  fullWidth?: boolean;
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
}
