let main = document.querySelector("main");
function createMessageList() {
  isFull = false;
  for (let a = 0; a < 50; a++) {
    let height = (Math.floor(Math.random() * 3) + 1) * 40;
    let width = (Math.floor(Math.random() * 6) + 4) * 22;

    isFull = createMessage(width, height, a);
    if (isFull) {
      console.log("broken");
      break;
    }
  }
}

function createMessage(width, height, delay) {
  let message = document.createElement("div");
  message.classList.add("message");
  let circle = document.createElement("div");
  message.style.setProperty("--delay", `${delay}`);
  circle.classList.add("circle");
  let bubble = document.createElement("div");
  bubble.style.setProperty("--bubble-height", `${height}px`);
  bubble.style.setProperty("--bubble-width", `${width}px`);
  bubble.classList.add("bubble");

  message.appendChild(circle);
  message.appendChild(bubble);
  message.addEventListener("animationend", () => {
    let y = setTimeout(() => {
      message.remove();
    }, 100);
  });
  main.appendChild(message);
  let check =
    message.getBoundingClientRect().y + message.getBoundingClientRect().height >
    window.innerHeight;
  return check;
}

let x = setInterval(() => {
  createMessageList();
}, 1300);
