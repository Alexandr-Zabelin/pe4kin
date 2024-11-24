import { InputProps } from './_components';

export enum AuthType {
  login = 'login',
  register = 'register',
}

export enum SocialActionType {
  github = 'github',
  google = 'google',
}

export type AuthFieldsProperties = Pick<InputProps, 'type' | 'id' | 'label'>[];
