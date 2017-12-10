import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { usersListQuery } from './UsersList';

const AddUser = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      mutate({
        variables: { name: evt.target.value },
        update: (store, { data: { addUser } }) => {
          const data = store.readQuery({ query: usersListQuery });
          data.users.push(addUser);
          store.writeQuery({ query: usersListQuery, data });
        },
      });
      evt.target.value = '';
    }
  };

  return (
    <input
      type="text"
      placeholder="New user"
      onKeyUp={handleKeyUp}
    />
  );
};

const addUserMutation = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;

export default graphql(addUserMutation)(AddUser);
