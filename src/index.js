import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route exact path="/" component={PostIndex} />
      <Route path="/posts/new" component={ PostNew } />
      <Route path="/posts/:id" component={ PostShow } />
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
