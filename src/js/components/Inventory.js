import React from "react"
import {connect} from "react-redux"

import {fetchUser} from "../actions/userActions"
import {fetchTweets} from "../actions/tweetsActions"
import {loadAndListen} from "../actions/inventoryActions"
import {authUser} from "../actions/authActions"

@connect((store) => {
  return {
    user: store.user.user,
    // userFetched: store.user.fetched,
    // tweets: store.tweets.tweets,
  };
})
export default class Inventory extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadAndListen());
  }

  render() {
    return (
        <div>
          Inventory
        </div>
    )
  }
}
