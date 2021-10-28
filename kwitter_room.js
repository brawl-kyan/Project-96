const firebaseConfig = {
  apiKey: "AIzaSyDzHWVINVrawQm6-0GmtsmTZnxEBpFTXQ8",
  authDomain: "kwitter-project-1d89b.firebaseapp.com",
  databaseURL: "https://kwitter-project-1d89b-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-1d89b",
  storageBucket: "kwitter-project-1d89b.appspot.com",
  messagingSenderId: "502765712063",
  appId: "1:502765712063:web:8391d23133f0941a448c0a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  user_room = document.getElementById("room").value;
  firebase.database().ref("/").child(user_room).update({
    kabir: "hola"
  });
  localStorage.setItem("room", user_room);

  window.location = "kwitter_page.html"
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}
getData();

function rediectToRoomName() {
  localStorage.setItem("room_name", user_room);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  window.location = "index.html";
}