import { gql } from 'apollo-boost';

export const VOLUNTEER = gql`
  query volunteers($id: ID!) {
    volunteers(id: $id) {
      name
      sid
      grade
      college
      major
      application {
        motive
        spec
        activity
        experience
        wannaMakeDesc
        wannaMakeImageUrl
      }
    }
  }
`;
