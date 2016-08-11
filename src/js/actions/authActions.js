export function authUser() {
  return function(dispatch) {
    dispatch({type: "USER_AUTH"});

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      
      
      dispatch({type: "USER_AUTH_SUCCESS", payload: user});
      
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      
      dispatch({type: "USER_AUTH_ERROR", payload: error});
    });  
  }  
}