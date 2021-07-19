var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var messageInput = document.getElementById('message-input');

var checkboxInput = document.getElementById('control-qa-input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (messageInput.value) {
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
  }
});

function PlaySoundWow() {
  alert("hello");
var wow = new audio();
wow.src = "/sounds/AnimeWowSoundEffect.mp3";
document.getElementById(wow);
wow.Play();
}

// Checkbox stuff
function qaInput() {
  // Get the checkbox
  var checkBox = document.getElementById("control-qa-input");
  // If the checkbox is checked
  if (checkBox.checked == true) {
    console.log(checkBox)
    var z = document.createElement('p'); // is a node
z.innerHTML = 'Ask a question checked';
    socket.emit('checked', 'block');
    messages.appendChild(z);
    checkboxInput.value = '';
  }
  //If it has been unchecked.
  else {
    socket.emit('checked', 'none');
    checkboxInput.value = '';
  }
}

var boxcheck = document.getElementById('checked');
function transmitMessage() {
  socket.send(message.value);
}

// Define the 
// on checkbox checked or soon toggled send toggle item message
//

var message = document.getElementById('message');
function transmitMessage() {
  socket.send(message.value);
}

socket.on('checkbox', function (checkvalue) {
  console.log(checkvalue)
  for (let element of document.getElementsByClassName("tab-item-1")) {
    element.style.display = checkvalue;
  }
});

socket.on('chat message', function (msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  document.body.style.backgroundColor = msg;
  document.getElementById("main").style.backgroundImage = 'url('+msg+')';
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

