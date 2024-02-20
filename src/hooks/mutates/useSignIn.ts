import { signIn } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';

import { SignupFormValues } from '@/components/auth/SignInForm';
import { useToastMessage } from '@/hooks/common';
import { useRouter } from 'next/navigation';
import { PATH_ADMIN } from '@/routes/paths';

const useSignIn = () => {
  const { push } = useRouter();
  const { showToast } = useToastMessage();

  const mutationFn = async (data: SignupFormValues) => {
    const signInResponse = await signIn(`credentials`, {
      redirect: false,
      ...data,
    });

    if (!signInResponse || !signInResponse.ok)
      throw new Error(signInResponse?.error ?? `Sign in failed`);

    return signInResponse;
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      showToast(`Welcome to Merry-Marry`, `success`);
      push(PATH_ADMIN.dashboard);
    },
    onError: (error) => {
      showToast(error.message, `error`);
    },
  });
};

export default useSignIn;
