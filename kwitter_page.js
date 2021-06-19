//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBJ9uiByBI0SNUFtV02zm3cA5XBUuEp4Ic",
    authDomain: "kwitter-app-6036f.firebaseapp.com",
    databaseURL: "https://kwitter-app-6036f-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-6036f",
    storageBucket: "kwitter-app-6036f.appspot.com",
    messagingSenderId: "58135413102",
    appId: "1:58135413102:web:910eefb91efb30b9e6417f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send() {
        msg=document.getElementById("message").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("message").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
username=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_width_tag="<h4>"+username+"<img class='user_tick' src='tick.png'> </h4>";
message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button> <hr>";
row=name_width_tag+message_width_tag+like_button+span_width_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}