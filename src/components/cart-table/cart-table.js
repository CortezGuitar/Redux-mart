import React from 'react';
import { connect } from 'react-redux';

import {
  allBooksRemovedFromCart,
  bookAddedToCart,
  bookRemovedFromCart
} from '../../actions';

import './cart-table.css';

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <div className="btn-group d-flex flex-wrap">
            <button
              onClick={() => onDecrease(id)}
              className="btn btn-outline-warning"
            >
              <i className="fas fa-minus-circle" />
            </button>
            <button
              onClick={() => onIncrease(id)}
              className="btn btn-outline-success"
            >
              <i className="fas fa-plus-circle" />
            </button>
            <button
              onClick={() => onDelete(id)}
              className="btn btn-outline-danger"
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTable);
