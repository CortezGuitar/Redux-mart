import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Header from '../header';

import './app.css';

const App = () => {
  return (
    <div className="container">
      <Header numItems={2} total={168} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;
