import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from "apollo-link-http";

import { ApolloProvider } from 'react-apollo';
import UsersList from './UsersList';
import AddUser from './AddUser';

import logo from './logo.svg';
import './App.css';

const link = new HttpLink({ uri: 'http://localhost:4000/graphql' });
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
          <AddUser />
          <UsersList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
