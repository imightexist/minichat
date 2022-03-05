/*
Now I'm breakin' all my bones
And I'm fallin' real fast
And I barrel towards the door
And I break through the glass
And I land on my ass
Now I'm slidin' down the street
The club's on top of a hill
So I'm pickin' up speed
*/
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function usernameCookie(){
  socket.send("disconnect",getCookie("username"));
  setCookie("username",document.getElementById('username').value,60);
  socket.send("username",getCookie("username"));
  document.getElementById("login").style.display = "none";
}
function send(){
  socket.send("chat",getCookie("username") + "▸" + document.getElementById("chat-input").value);
}
if (location.protocol == "https"){
  var socket = new WebSocket("wss://" + window.location.host);
}else{
  var socket = new WebSocket("ws://" + window.location.host);
}
if (getCookie("username") = ""){
  document.getElementById("login").style.display = "";
}else{
  socket.send("username",getCookie(username));
}
