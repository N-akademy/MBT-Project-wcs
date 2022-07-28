import React from 'react';
import Routeur from './routeur';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';
import './Styles/index.css';
import { getCookie } from 'helpers';

export default function App() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const middleware = new ApolloLink((operation: any, forward: any) => {
    const cookie = getCookie('token');
    console.log(cookie);
    if (cookie !== '') {
      operation.setContext({
        headers: {
          Authorization: cookie,
        },
      });
      return forward(operation);
    }
    return forward(operation);
  });

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include',
    link: concat(middleware, httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <Routeur />
    </ApolloProvider>
  );
}
