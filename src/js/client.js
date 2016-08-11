import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./components/App"
import Layout from "./components/Layout"
import Home from "./components/Home"

import store from "./store"

import {authSuccess} from "./actions/authActions";

const app = document.getElementById('app');



function checkAuth(next, replace){
  var state = store.getState();
  console.log(state);

  if(!state.isAuthenticated) {
    // replace('/login');
  }
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <IndexRoute component={Layout}></IndexRoute>
        <Route component={Layout} path="/"></Route>
        <Route onEnter={checkAuth}>
          <Route component={Home} path="/login"></Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
  app);

  
  