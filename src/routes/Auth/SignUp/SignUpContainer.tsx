import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import { CREATE_USER } from './SignUpQueries';
import useInput from 'hooks/useInput';
import SignUpPresenter from './SignUpPresenter';
import Complete from 'components/Complete';

export default function SignUpContainer() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const [action, setAction] = useState<'signUp' | 'complete'>('signUp');

  const name = useInput('');
  const email = useInput('');
  const password = useInput('');
  const gender = useInput('');
  const phone = useInput('');
  const sid = useInput('');
  const major = useInput('');
  const github = useInput('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await createUser({
        variables: {
          name: name.value,
          email: email.value,
          password: password.value,
          gender: gender.value,
          phone: phone.value,
          sid: sid.value,
          major: major.value,
          github: github.value
        }
      });
      if (error) throw Error(error.message);
      setAction('complete');
    } catch (e) {
      toast.error(`업로드 실패. 에러코드: ${e}`);
    }
  }

  return action === 'signUp' ? (
    <SignUpPresenter
      name={name}
      email={email}
      password={password}
      gender={gender}
      phone={phone}
      sid={sid}
      major={major}
      github={github}
      loading={loading}
      onSubmit={onSubmit}
    />
  ) : (
    <Complete
      title='회원가입 성공'
      desc={`${name.value}님 회원가입을 축하합니다! 가입 승인 후 로그인하실 수 있습니다!`}
    />
  );
}
