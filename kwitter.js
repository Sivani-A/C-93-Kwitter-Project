function addUser(){
    var Uname=document.getElementById("username").value;
    console.log(Uname);
    localStorage.setItem("username", Uname);
    window.location="kwitter_room.html";
    
}


