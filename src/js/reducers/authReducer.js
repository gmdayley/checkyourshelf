export default function reducer(state = {
  authenticated: false,
  userId: null,
  email: null
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
      return {
        ...state,
        authenticated:true,
        userId: action.payload.uid,
        email: action.payload.email,
      }
    }
  }

  return state
}