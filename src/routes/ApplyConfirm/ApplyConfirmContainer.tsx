import React from 'react';

import ApplyConfirmPresenter from './ApplyConfirmPresenter';
import useInput from 'hooks/useInput';

export default function ApplyConfirmContainer() {
  const sid = useInput('');
  const password = useInput('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(sid.value);
    console.log(password.value);
  }

  return (
    <ApplyConfirmPresenter sid={sid} password={password} onSubmit={onSubmit} />
  );
}
