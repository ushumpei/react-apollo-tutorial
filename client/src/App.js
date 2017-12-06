import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

import { makeExecutableSchema, addMockFunctionsToSchema, } from 'graphql-tools';
import { typeDefs } from './schema';
import MockLink from './MockLink';

import { ApolloProvider } from 'react-apollo';
import UsersList from './UsersList';

import logo from './logo.svg';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const link = new MockLink({ schema });
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <UsersList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
