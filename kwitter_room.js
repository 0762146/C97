
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDERBzTakkqw_NgIN-Q76hN3B7UfJlYXgs",
      authDomain: "class-93-97.firebaseapp.com",
      databaseURL:"https://class-93-97-default-rtdb.firebaseio.com/",
      projectId: "class-93-97",
      storageBucket: "class-93-97.appspot.com",
      messagingSenderId: "752244171537",
      appId: "1:752244171537:web:66ef1d582e4cbab84822b0"

    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var User_name = localStorage.getItem("User_name");
    document.getElementById("User_name").innerHTML="Welcome "+User_name+"!!!";

    function addRoom(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem('User_name');
      localStorage.removeItem('room_name');
      window.location="index.html";
}