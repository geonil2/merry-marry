'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSignIn } from '@/hooks/mutates';
import FormProvider from '@/components/common/FormProvider';
import RHFTextField from '@/components/common/RHFTextField';
import PasswordIcon from '@/components/auth/PassowordIcon';
import Button from '@/components/common/Button';

export type SignupFormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { mutate: signIn } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email(`Email must be a valid email address`)
      .required(`Email is required`),
    password: Yup.string().required(`Password is required`),
  });

  const defaultValues = {
    email: ``,
    password: ``,
  };

  const methods = useForm<SignupFormValues>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: SignupFormValues) => signIn(data);

  const onClickPasswordIcon = () => setShowPassword(!showPassword);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email address" />
      <RHFTextField
        name="password"
        label="Password"
        type={showPassword ? `text` : `password`}
        icon={
          <PasswordIcon
            showPassword={showPassword}
            onClick={onClickPasswordIcon}
          />
        }
      />

      <Button className="mt-4" text="Sigin" type="submit" fullWidth />
    </FormProvider>
  );
};

export default SignInForm;
