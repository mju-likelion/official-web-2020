import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import { SIGN_IN, LOCAL_SIGN_IN } from './SignInQueries';
import useInput from 'hooks/useInput';
import SignInPresenter from './SignInPresenter';

export default function SignInContainer() {
  const history = useHistory();

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);
  const [localSignIn] = useMutation(LOCAL_SIGN_IN);

  const email = useInput('');
  const password = useInput('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await signIn({
        variables: {
          email: email.value,
          password: password.value
        }
      });
      if (error) throw Error(error.message);
      localSignIn({ variables: { token: data.signIn } });
      toast.success('로그인 성공!');
      history.push('/');
    } catch (e) {
      toast.error(
        `로그인 실패. 문제가 지속될 경우 관리자에게 연락주세요. 에러코드: ${e}`
      );
    }
  }

  return (
    <SignInPresenter
      email={email}
      password={password}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
}
