import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const LOCAL_SIGN_IN = gql`
  mutation signIn($token: String!) {
    signIn(token: $token) @client
  }
`;
