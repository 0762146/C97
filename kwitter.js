function addUser(){
    var user_name = document.getElementById("User_name").value;
    localStorage.setItem("User_name", user_name);
    window.location="kwitter_room.html"
}