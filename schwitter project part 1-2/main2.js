//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAZLAQCDejkUDhDUwHi6vwmZRe1Cnp8Po8",
    authDomain: "kojo-09jjj-9iio.firebaseapp.com",
    projectId: "kojo-09jjj-9iio",
    storageBucket: "kojo-09jjj-9iio.appspot.com",
    messagingSenderId: "898974787485",
    appId: "1:898974787485:web:42509383c470fe495e7174"
  };
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();