import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

export default WrappedComponent => {
  const withBookstoreService = ({ ...props }) => {
    return (
      <BookstoreServiceConsumer>
        {bookstoreService => {
          return (
            <WrappedComponent {...props} bookstoreService={bookstoreService} />
          );
        }}
      </BookstoreServiceConsumer>
    );
  };

  return withBookstoreService;
};
