import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { VOLUNTEER } from './ApplyConfirmQueries';
import useInput from 'hooks/useInput';
import SignInPresenter from './SignInPresenter';
import EditContainer from './EditContainer';
import Loading from 'components/Loading';
import Error from 'components/Error';

export default function ApplyConfirmContainer() {
  const [
    getVolunteer,
    { data: queryData, loading: queryLoading, error: queryError }
  ] = useLazyQuery(VOLUNTEER);

  const [action, setAction] = useState('signIn');

  const sid = useInput('');
  const password = useInput('');

  function signIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    getVolunteer({ variables: { sid: sid.value, password: password.value } });
    setAction('editInfo');
  }

  return action === 'signIn' ? (
    <SignInPresenter sid={sid} password={password} onSubmit={signIn} />
  ) : queryError === undefined ? (
    queryLoading === true ? (
      <Loading />
    ) : (
      <EditContainer queryData={queryData} />
    )
  ) : (
    <Error
      title='로그인 에러!'
      desc='학번 또는 비밀번호가 일치하지 않습니다. 비밀번호에 한글이 들어가 있지 않은지 확인바랍니다.'
    />
  );
}
