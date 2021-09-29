const firebaseConfig = {
      apiKey: "AIzaSyDPzhlG2ETMdCZJxpEMN4RZvDwzsasGB9I",
      authDomain: "kwitter-by-rajlaxmi.firebaseapp.com",
      databaseURL: "https://kwitter-by-rajlaxmi-default-rtdb.firebaseio.com",
      projectId: "kwitter-by-rajlaxmi",
      storageBucket: "kwitter-by-rajlaxmi.appspot.com",
      messagingSenderId: "570930259456",
      appId: "1:570930259456:web:a16af6e4470f645fc01ae5"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
