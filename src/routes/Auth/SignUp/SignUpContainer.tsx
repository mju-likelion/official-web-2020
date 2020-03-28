import React from 'react';

import useInput from 'hooks/useInput';
import SignUpPresenter from './SignUpPresenter';

export default function SignUpContainer() {
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

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(gender);
    console.log(phone);
    console.log(sid);
    console.log(major);
    console.log(github);
  }

  return (
    <SignUpPresenter
      name={name}
      email={email}
      password={password}
      gender={gender}
      phone={phone}
      sid={sid}
      major={major}
      github={github}
      onSubmit={onSubmit}
    />
  );
}
