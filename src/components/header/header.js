import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ numItems, total }) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          Redux-Mart
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <span className="mr-1">
                <i className="fa fa-shopping-cart" />
              </span>
              {numItems} items (${total})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
