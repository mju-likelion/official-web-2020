import { gql } from 'apollo-boost'

export const SUBMIT_HOMEWORK = gql`
  mutation submitHomework($github: String!, $week: Int!) {
    submitHomework(github: $github, week: $week) {
      id
    }
  }
`
