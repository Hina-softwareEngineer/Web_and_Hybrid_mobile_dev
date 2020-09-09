/*let obj = {
  name: "hina",
  email: "hina@gmail.com",
};

let { name, email } = obj;

console.log(name, email);
*/
/// array functions 'startswith, endswith, filter'

let email = document.getElementById("email");
let password = document.getElementById("password");

function signup() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((result) =>
      console.log(
        "%cSign Up successfully",
        "background: green; color: #fff;",
        result
      )
    )
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
}

function login() {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((result) => console.log(result))
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function signout() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(
        displayName,
        email,
        emailVerified,
        photoURL,
        isAnonymous,
        uid,
        providerData
      );
      // ...
    } else {
      console.log("User is signed out.");
      // User is signed out.
      // ...
    }

    firebase.auth().signOut();
  });
}
