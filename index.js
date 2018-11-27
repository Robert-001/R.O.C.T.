firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location = "main.html"
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function register() {
  document.getElementById("user_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";
  
}

function login() {
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
}

function loginwithfirebase() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}

function registerwithfirebase() {

  var rEmail = document.getElementById("remail_field").value;
  var rPass = document.getElementById("rpassword_field").value;
  var crPass = document.getElementById("c_rpassword_field").value;

  if(rPass == crPass && rEmail!=null) {
    firebase.auth().createUserWithEmailAndPassword(rEmail, rPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });
  }
  else  {
    window.alert("Please enter same text in password and confirm password field!")
  }
}

function logout() {
  firebase.auth().signOut();
}
