import React from "react"
import {connect} from "react-redux"
import {authUser} from "../actions/authActions"

@connect((store) => {
  return {
    user: store.user.user,
    // userFetched: store.user.fetched,
    // tweets: store.tweets.tweets,
  };
})
export default class Login extends React.Component {
  login() {
    this.props.dispatch(authUser());
  }

  render() {
    return (
      <div>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    )
  }
}
