
//ADD YOUR FIREBASE LINKS HERE
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
  var user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"✨";
  function addRoom() {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Adding Roomname"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Name: "+Room_names);
    var row="<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}