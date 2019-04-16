import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddToCart }) => {
  const { title, author, price, cover } = book;
  return (
    <div className="card">
      <img src={cover} alt="cover" className="card-img-top" />

      <div className="card-body">
        <span className="card-title">{title} </span>
        <div>{author}</div>
        <div>${price}</div>
        <button onClick={onAddToCart} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
