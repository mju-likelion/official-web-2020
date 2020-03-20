import { gql } from 'apollo-boost';

export const CREATE_VOLUNTEER = gql`
  mutation createVolunteer(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
    $sid: String!
    $grade: String!
    $college: String!
    $major: String!
  ) {
    createVolunteer(
      name: $name
      email: $email
      password: $password
      phone: $phone
      sid: $sid
      grade: $grade
      college: $college
      major: $major
    ) {
      id
    }
  }
`;

export const CREATE_APPLICATION = gql`
  mutation createApplication(
    $motive: String
    $spec: String
    $activity: String
    $experience: String
    $wannaMakeDesc: String
    $wannaMakeImageUrl: String
    $volunteerEmail: String!
    $volunteerPassword: String!
  ) {
    createApplication(
      motive: $motive
      spec: $spec
      activity: $activity
      experience: $experience
      wannaMakeDesc: $wannaMakeDesc
      wannaMakeImageUrl: $wannaMakeImageUrl
      volunteerEmail: $volunteerEmail
      volunteerPassword: $volunteerPassword
    ) {
      id
    }
  }
`;
