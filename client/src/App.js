import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

const link = new HttpLink();
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const query = gql`query {
  users {
    id
    name
  }
}`;
client.query({ query })
  .then(console.log)
  .catch(console.error);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
