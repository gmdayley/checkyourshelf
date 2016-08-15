import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./components/App"
import Home from "./components/Home"
import Login from "./components/Login"
import Inventory from "./components/Inventory"

import store from "./store"

import {authSuccess} from "./actions/authActions";

const app = document.getElementById('app');



function checkAuth(nextState, replace) {
  let { loggedIn } = store.getState();

  // check if the path isn't dashboard
  // that way we can apply specific logic
  // to display/render the path we want to
  if (nextState.location.pathname !== '/inventory') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname);
      } else {
        replace('/');
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname);
      } else {
        replace('/login');
      }
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Home} />
          <Route onEnter={checkAuth}>
            <Route path="/login" component={Login} />
            <Route path="/inventory" component={Inventory} />
          </Route>
          {/*<Route path="*" component={NotFound} />*/}
        </Route>
    </Router>
  </Provider>,
  app);

  
  