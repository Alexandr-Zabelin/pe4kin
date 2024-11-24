'use client';

import { FC } from 'react';
import { signOut } from 'next-auth/react';

const Users: FC = () => <button onClick={() => signOut()}>Logout</button>;

export default Users;
