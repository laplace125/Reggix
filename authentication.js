//The core Firebase JS SDK is always required and must be listed first 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_Ljcif1a2gQHM-T-s2RYiQZdcnFZFevE",
    authDomain: "signin-8e344.firebaseapp.com",
    databaseURL: "https://signin-8e344.firebaseio.com",
    projectId: "signin-8e344",
    storageBucket: "signin-8e344.appspot.com",
    messagingSenderId: "301012150076",
    appId: "1:301012150076:web:3e190f490e4758f90be039"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  const auth = firebase.auth();

  function signUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
        alert("User " + userCredential.user.uid + " LOGGED IN");
        window.location = 'loggedIn.html';
     }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    
    // [END createwithemail]
  }




//start signin of existing users
  function signIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;  
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(userCredential => {
        window.location = "loggedIn.html";
        alert("Hello " + userCredential.user.uid);
        console.log(userCredential.user.uid);
    } ).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        
        
        // [END_EXCLUDE]
    });
}

    //end  Sign in existing user


function signOut() {
    auth.signOut();
    window.location = "./index.html";
    alert("Signed OUt"); 
}









   