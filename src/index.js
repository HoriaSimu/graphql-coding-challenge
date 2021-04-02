import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './components/App';

const client = new ApolloClient({
  uri: 'https://fakerql.stephix.uk/graphql',
  cache: new InMemoryCache()
});

const providerWrap = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(
  providerWrap,
  document.querySelector('#root')
);
