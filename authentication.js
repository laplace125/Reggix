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
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value , password.value);
      promise.catch(e => alert(e.message));
      window.location = "./loggedIn.html";
      alert("SignedUp");
  }

  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value , password.value);
    promise.catch(e => alert(e.message));
    window.location = "./loggedIn.html";
}
function signOut() {
    auth.signOut();
    window.location = "./index.html";
    
}


firebase.auth().onAuthStateChanged(function(user) {

        if(user){
            var email = user.email;
            alert(email.value);
        }else{
              
        }

    })


    