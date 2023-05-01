
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBS3zRf-_cLnbxz0VIe4lBcfqjRILwEyiI",
  authDomain: "database-98b5e.firebaseapp.com",
  databaseURL: "https://database-98b5e.firebaseio.com",
  projectId: "database-98b5e",
  storageBucket: "database-98b5e.appspot.com",
  messagingSenderId: "360143623988",
  appId: "1:360143623988:web:2719cc76ae88334f3f3761",
  measurementId: "G-HXXJ9DQCPW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
status= localStorage.getItem("status");
if(status==-1){
  window.location="kwitter.html";
}
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({//firebase.database().ref("/").
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}





function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
  console.log(snapshot);
   document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot)  
 { 
  console.log(childSnapshot);
   childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=  row;
    });
  });

}

getData();

function redirectToRoomName(rname)
{
  console.log(rname);
  localStorage.setItem("room_name", rname);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.setItem("status",-1);
localStorage.removeItem("user_name");// it is used to delete the variable created by you
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
