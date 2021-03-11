
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDLp1C_IXym4dN5HYyPw0_SpOpKOUi7lMc",
  authDomain: "kwitter-fae05.firebaseapp.com",
  databaseURL: "https://kwitter-fae05-default-rtdb.firebaseio.com",
  projectId: "kwitter-fae05",
  storageBucket: "kwitter-fae05.appspot.com",
  messagingSenderId: "108217175420",
  appId: "1:108217175420:web:2ca97afff98d81a1a5a8f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS




user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";




function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}





function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;

      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();





function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}








function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}