import { BsGithub, BsGoogle } from 'react-icons/bs';
import { AuthFieldsProperties, AuthType, SocialActionType } from './types';

const LOGIN_FIELDS_PROPERTIES: AuthFieldsProperties = [
  { type: 'email', id: 'email', label: 'Email' },
  { type: 'password', id: 'password', label: 'Password' },
];

const REGISTER_FIELDS_PROPERTIES: AuthFieldsProperties = [
  { type: 'text', id: 'name', label: 'Name' },
  ...LOGIN_FIELDS_PROPERTIES,
];

export const authProperties = {
  [AuthType.login]: {
    field: LOGIN_FIELDS_PROPERTIES,
    buttonText: 'Sign in',
  },
  [AuthType.register]: {
    field: REGISTER_FIELDS_PROPERTIES,
    buttonText: 'Register',
  },
};

export const SOCAIL_ICONS = {
  [SocialActionType.github]: <BsGithub />,
  [SocialActionType.google]: <BsGoogle />,
};
