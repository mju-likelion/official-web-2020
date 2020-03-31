import { gql } from 'apollo-boost';

export const SIGNIN_STATUS = gql`
  {
    isSignedIn @client
  }
`;

export const MYSELF = gql`
  query myself {
    myself {
      isStaff
    }
  }
`;

export const SIGN_OUT = gql`
  mutation signOut {
    signOut @client
  }
`;
