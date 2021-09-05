//YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCR7vNDtdqTtdvkpeTMVnG_h21hlDxob3M",
    authDomain: "kwitter-project-9e278.firebaseapp.com",
    databaseURL: "https://kwitter-project-9e278-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-9e278",
    storageBucket: "kwitter-project-9e278.appspot.com",
    messagingSenderId: "1089778835638",
    appId: "1:1089778835638:web:60dc066629d54764674617"
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
name_width_tag="<h4>"+username+"<img id='tick' class='user_tick' src='tick.png'> </h4>";
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