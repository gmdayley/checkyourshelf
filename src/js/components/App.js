import React from "react"
import {connect} from "react-redux"

@connect((store) => {
  return {
    user: store.user.user,
    // userFetched: store.user.fetched,
    // tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  render() {
    console.log('Render app');
    return (
      <div>
        <h1>App</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
