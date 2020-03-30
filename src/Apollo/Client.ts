import ApolloClient from 'apollo-boost';

import { defaults, resolvers } from './LocalState';

export const client = new ApolloClient({
  uri: 'https://mju-likelion-official-server.herokuapp.com/',
  clientState: {
    defaults,
    resolvers
  }
});
