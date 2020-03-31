import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $gender: Gender!
    $phone: String!
    $sid: String!
    $major: String!
    $github: String
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      gender: $gender
      phone: $phone
      sid: $sid
      major: $major
      github: $github
    ) {
      id
    }
  }
`;
