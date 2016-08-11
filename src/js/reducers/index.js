import { combineReducers } from "redux"

// import tweets from "./tweetsReducer"
// import user from "./userReducer"

import user from "./authReducer"

export default combineReducers({
  user
})