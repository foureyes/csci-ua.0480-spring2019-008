const socket = io();
function handleClick(evt) {
  const s = document.querySelector("#userSuggestion").value;
  // send to server using socket.io (hopefully websockets)
  socket.emit('lunch', s);
}

function main() {
  const btn = document.querySelector("#btn");
  btn.addEventListener('click', handleClick);
  socket.on('lunch', (s) => {
    const div = document.body.appendChild(document.createElement('div'));
    div.textContent = s;
  });

  socket.on('all lunches', (allLunches) => {
    for(const s of allLunches) {
      const div = document.body.appendChild(document.createElement('div'));
      div.textContent = s;
    }
  });
}

document.addEventListener("DOMContentLoaded", main);




