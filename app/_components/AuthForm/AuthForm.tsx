'use client';

import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { AuthType, SocialActionType } from './types';
import { authProperties, SOCAIL_ICONS } from './constants';
import { Input, Button, AuthSocialButton } from './_components';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const AuthForm: FC = () => {
  const session = useSession();
  const router = useRouter();

  const [authType, setAuthType] = useState(AuthType.login);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/users');
    }
  }, [session?.status, router]);

  const toggleAuthType = () =>
    setAuthType(prev =>
      prev === AuthType.login ? AuthType.register : AuthType.login,
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = formData => {
    setIsLoading(true);

    if (authType === AuthType.register) {
      axios
        .post('/api/register', formData)
        .then(() => signIn('credentials', formData))
        .catch(() => toast.error('Something went wrong'))
        .finally(() => setIsLoading(false));

      return;
    }

    signIn('credentials', {
      ...formData,
      redirect: false,
    })
      .then(response => {
        if (response?.error) {
          toast.error('Invalid credentials');

          return;
        }

        if (response?.ok) {
          router.push('/users');
          toast.success('You logged in!');
        }
      })
      .finally(() => setIsLoading(false));
  };

  const socialAction = (action: SocialActionType) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then(response => {
        if (response?.error) {
          toast.error('Invalid credentials');

          return;
        }

        if (response?.ok) {
          toast.success('You logged in!');
          router.push('/users');
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          {authProperties[authType].field.map(({ type, id, label }) => (
            <div
              key={`${authType}_${id}`}
              className="[&:not(:first-child)]:mt-2.5"
            >
              <Input
                type={type}
                id={id}
                label={label}
                register={register}
                disabled={isLoading}
                errors={errors}
              />
            </div>
          ))}
        </>
        <div className="mt-2.5">
          <Button type="submit" disabled={isLoading} fullWidth>
            {authProperties[authType].buttonText}
          </Button>
        </div>
      </form>
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        {Object.entries(SOCAIL_ICONS).map(([socialActionType, Icon]) => (
          // TODO: придумать, как тут нормально затипизировать - entries не дженерит тип key
          <AuthSocialButton
            key={socialActionType}
            onClick={() => socialAction(socialActionType as SocialActionType)}
          >
            {Icon}
          </AuthSocialButton>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500">
        <p>
          {authType === AuthType.login
            ? 'New to Pe4kin?'
            : 'Already have an account?'}
        </p>
        <button onClick={toggleAuthType} className="cursor-pointer underline">
          {authType === AuthType.login ? 'Create an account' : 'Just login'}
        </button>
      </div>
    </div>
  );
};
