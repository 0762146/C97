//YOUR FIREBASE LINKS
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


var username = localStorage.getItem("User_name");
var roomname = localStorage.getItem("room_name");

function send(){
      var msg = document.getElementById("input_message").value;
      firebase.database().ref(roomname).push({
            name : username,
            message : msg,
            like : 0
           
      });
      document.getElementById("input_message").value = "";
      
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name = message_data ['name'];
var message = message_data ['message'];
var like = message_data ['like'];
name_with_tag = "<h4>"+ name +"<img class='blue_tick' src='tick.png' height='20px' width='20px'></h4>";
message_with_tick = "<h4 class='message_h4'>" + message +"</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id +"value="+ like +"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button>";
row = name_with_tag + message_with_tick + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on the like button–" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedlikes = Number(likes) +1;
      console.log(updatedlikes);

      firebase.database().ref(roomname).child(message_id).update({
            like : updatedlikes
      });
}

function logout(){
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}