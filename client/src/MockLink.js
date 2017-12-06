import { ApolloLink, Observable } from 'apollo-link';
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';

export default class MockLink extends ApolloLink {
  constructor(params) {
    super();
    this.schema = params.schema;
    this.rootValue = params.rootValue;
    this.context = params.context;
  }

  request(operation) {
    const request = {
      ...operation,
      query: print(operation.query)
    };

    return new Observable(observer => {
      graphql(this.schema, request.query, this.rootValue, this.context, request.variables, request.operationName)
        .then(data => {
          if (!observer.closed) {
            observer.next(data);
            observer.complete();
          }
        })
        .catch(error => {
          if (!observer.closed) {
            observer.error(error);
          }
        });
    });
  }
}

