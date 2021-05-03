let main = document.querySelector("main");

function createMessageList() {
  console.log("called");
  for (let a = 0; a < 8; a++) {
    let height = (Math.floor(Math.random() * 3) + 1) * 40;
    let width = (Math.floor(Math.random() * 6) + 4) * 22;

    createMessage(width, height, a);
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
    message.remove();
  });
  main.appendChild(message);
}

let x = setInterval(() => {
  createMessageList();
}, 1000);
