import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { SIGNIN_STATUS, SIGN_OUT } from './HeaderQueries';
import HeaderPresenter from './HeaderPresenter';

export default function HeaderContainer() {
  const { data } = useQuery(SIGNIN_STATUS);
  const [signOut] = useMutation(SIGN_OUT);

  async function onSignOut(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    await signOut();
  }

  return <HeaderPresenter isSignedIn={data.isSignedIn} onSignOut={onSignOut} />;
}
