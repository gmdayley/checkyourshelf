export default function reducer(state = {
  authenticating: false,
  user: null
}, action) {

  switch (action.type) {
    // case "LOGIN": {
    //   return {...state, authenticating: true}
    // }
    // case "LOGIN_REJECTED": {
    //   return {...state, authenticating: false, error: action.payload}
    // }
    // case "LOGIN_FULFILLED": {
    //   return {
    //     ...state,
    //     user: action.payload,
    //     authenticating: false,
    //   }
    // }
      
    case "USER_AUTH_SUCCESS": {
      return {...state, user: action.payload}
    }
  }

  return state
}