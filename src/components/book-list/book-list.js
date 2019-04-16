import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from '../book-list-item';
import withBookstoreService from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="d-flex flex-wrap justify-content-around book-list p-0">
      {books.map(book => (
        <li className="mt-3" key={book.id}>
          <BookListItem book={book} onAddToCart={() => onAddToCart(book.id)} />
        </li>
      ))}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddToCart: bookAddedToCart
    },
    dispatch
  );
};

export default withBookstoreService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookListContainer)
);
