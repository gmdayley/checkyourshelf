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
export default class Layout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(authUser());
    // this.props.dispatch(fetchUser());
    // this.props.dispatch(loadAndListen());
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const {user, tweets} = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }
    //
    // const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
