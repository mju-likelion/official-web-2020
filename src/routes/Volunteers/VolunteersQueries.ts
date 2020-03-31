import { gql } from 'apollo-boost';

export const VOLUNTEERS = gql`
  query volunteers {
    volunteers {
      id
      name
      sid
      grade
      college
      major
    }
  }
`;
