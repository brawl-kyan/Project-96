function adduser(){
user = document.getElementById("your_user_name").value;
localStorage.setItem("user_name",user);
window.location = "kwitter_room.html";
}