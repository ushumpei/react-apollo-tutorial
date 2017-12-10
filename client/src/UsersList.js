import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './UsersList.css';

const UsersList = ({ data: { loading, error, users }}) => {
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return <ul className="users-list">
    { users.map(u => <li key={u.id}>{u.name}</li>) }
  </ul>;
};

export const usersListQuery = gql`query {
  users {
    id
    name
  }
}`;

export default graphql(usersListQuery, {
  options: { pollInterval: 5000 },
})(UsersList);
