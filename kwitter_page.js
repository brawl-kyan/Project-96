
var firebaseConfig = {
    apiKey: "AIzaSyDzHWVINVrawQm6-0GmtsmTZnxEBpFTXQ8",
  authDomain: "kwitter-project-1d89b.firebaseapp.com",
  databaseURL: "https://kwitter-project-1d89b-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-1d89b",
  storageBucket: "kwitter-project-1d89b.appspot.com",
  messagingSenderId: "502765712063",
  appId: "1:502765712063:web:8391d23133f0941a448c0a"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0    
});
document.getElementById("msg").value = "";     
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();



function logout(){
    localStorage.removeItem("name_of_user");
    localStorage.removeItem("room_name")
    window.location = "index.html";      
}