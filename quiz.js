// from replit import db

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL4g-98x_jNjL8nYgL10ixPl9BF-QJFTA",
  authDomain: "fountainofcode.firebaseapp.com",
  projectId: "fountainofcode",
  storageBucket: "fountainofcode.appspot.com",
  messagingSenderId: "940797215605",
  appId: "1:940797215605:web:f743255e0c6f51f10dc93c",
  measurementId: "G-2RCQM16ZQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
/*$(document).ready(function() {
   var firebaseConfig = {
    apiKey: "AIzaSyC3NpXeKwlF_wMwDz0P4ZJjidEcMA1c-wQ",
    authDomain: "boby-23283.firebaseapp.com",
    databaseURL: "https://boby-23283-default-rtdb.firebaseio.com",
    projectId: "boby-23283",
    storageBucket: "boby-23283.appspot.com",
    messagingSenderId: "952241079929",
    appId: "1:952241079929:web:42f64be08d01299bdc36a8",
    measurementId: "G-ERJ43SYP92"
   
  };
  firebase.initializeApp(config);
  firebase.analytics();
  const auth = firebase.auth();
  const db = firebase.firestore();

  db.collection("cities").doc(document.getElementById("fname").value).set({
    name: document.getElementById("fname").value,
    email: email=document.getElementById("email").value,
    intro: document.getElementById("introvert").value
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });

  function signUp() {
  	
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var age=document.getElementById("age").value;
    var introvert=document.getElementById("introvert").value;
    var activity=document.getElementById("activity").value;
    var cookie=document.getElementById("cookie").value;
    var flavor=document.getElementById("flavor").value;
    var gender=document.getElementById("gender").value;
  	//const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  	promise.catch(e => alert(e.message));
  	alert('Signed Up!');
  } */
  
  /*let guestBook = firebase.database().ref();
  function signGuestbook(fname, lname, email, age, introvert, activity, cookie, flavor, gender) {
  $("#comments").append("<p><b>" + fname + "</b><br/>" + lname +"</b><br/>" + email + "</b><br/>" + age +"</b><br/>" + introvert +"</b><br/>" + activity +"</b><br/>" + cookie +"</b><br/>" + flavor +"</b><br/>" + gender +"</p>");

    guestBook.on('child_added', function(guest) {
    if (guest.val().fname && guest.val().lname && guest.val().email && guest.val().age && guest.val().introvert &&guest.val().activity && guest.val().cookie && guest.val().flavor && guest.val().gender ){
        signGuestbook((guest.val().fname,guest.val().lname, guest.val().email,guest.val().age, guest.val().introvert, guest.val().activity,guest.val().cookie, guest.val().flavor, guest.val().gender );
      }
  });
}

  $('#guestbook').submit(function(event) {
    event.preventDefault();
     // Add guest to guestbook
    guestBook.push({
      name: $('#fname').val(),
      lname: $('#lname').val(),
      email: $('#email').val(),
      age: $('#age').val(),
      introvert: $('#introvert').val(),
      activity: $('#activity').val(),
      cookie: $('#cookie').val(),
      flavor: $('#flavor').val(),
      gender: $('#gender').val(),
    });

    $('#fname').val('');
    $('#lname').val('');
    $('#email').val('');
    $('#age').val('');
    $('#introvert').val('');
    $('#activity').val('');
    $('#cookie').val('');
    $('#flavor').val('');
    $('#gender').val('');
    $('#fname').focus();
}); */

});
