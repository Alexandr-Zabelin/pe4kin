'use client';

import { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

export const AuthContext: FC<PropsWithChildren> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);
