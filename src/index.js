'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Contract from './components/contract';
import NotFound from './components/not-found';
import ScrollToTop from './components/scroll-to-top';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <ScrollToTop>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contract/:contractId" component={Contract}/>
      <Route path="*" component={NotFound} status={404}/>
    </Switch>
    </ScrollToTop>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
