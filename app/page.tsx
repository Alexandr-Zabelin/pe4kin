import Image from 'next/image';

import { AuthForm } from './_components';

export default function Home() {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Pe4kin Logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          // TODO: заменить на кастомное лого - пока там заглушка
          src="/images/logo.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
