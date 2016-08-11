import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAAhelTWYkgxMkI0du1NBX_yX1dekrH4-0",
  authDomain: "checkyourshelf-4b362.firebaseapp.com",
  databaseURL: "https://checkyourshelf-4b362.firebaseio.com",
  storageBucket: "checkyourshelf-4b362.appspot.com",
};

firebase.initializeApp(config);
const database = firebase.database();


export function loadAndListen() {
  return function(dispatch) {

    // firebase.auth().signInWithRedirect(provider);

    database.ref("items").on("value", function(snapshot) {
      console.log(snapshot.val());
      dispatch({type: "INVENTORY_CHANGED", payload: snapshot.val()})
    });

    
    //
    // firebase.auth().getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // ...
    //   }
    //   // The signed-in user info.
    //   var user = result.user;
    //
    //
    //
    //   database.ref('TEST/' + Date.now()).set({
    //     username: "abc",
    //     email: "123123",
    //     profile_picture: "asdfasdfasdf"
    //   });
    //
    //   database.ref("items").on("value", function(snapshot) {
    //     console.log(snapshot.val());
    //     dispatch({type: "INVENTORY_CHANGED", payload: snapshot.val()})
    //   });
    //
    //
    //
    //
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });



  }
}



