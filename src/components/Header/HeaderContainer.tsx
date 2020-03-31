import React, { useEffect } from 'react';
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';

import { SIGNIN_STATUS, MYSELF, SIGN_OUT } from './HeaderQueries';
import HeaderPresenter from './HeaderPresenter';

export default function HeaderContainer() {
  const {
    data: { isSignedIn }
  }: any = useQuery(SIGNIN_STATUS);
  const [getMyInfo, { data: myData }]: any = useLazyQuery(MYSELF);
  const [signOut] = useMutation(SIGN_OUT);

  useEffect(
    function() {
      if (isSignedIn) getMyInfo();
    },
    [isSignedIn, getMyInfo]
  );

  async function onSignOut(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    await signOut();
  }

  return (
    <HeaderPresenter
      isSignedIn={isSignedIn}
      myData={myData}
      onSignOut={onSignOut}
    />
  );
}
