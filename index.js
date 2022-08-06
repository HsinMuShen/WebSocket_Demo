const ws = new WebSocket("ws://localhost:3000");
const sky = document.getElementsByClassName("sky");
const box = document.getElementsByClassName("box");
const btn = document.getElementsByClassName("Bug_color");
const btnSky = document.getElementsByClassName("Sky_color");

ws.onopen = function () {
  console.log("open connection");
};

ws.onmessage = function (e) {
  console.log(e.data);
  if (isNaN(e.data)) {
    let backColor = e.data.split("/");
    if (backColor[0] === "sky") {
      sky[0].style.backgroundColor = backColor[1];
    } else {
      box[0].style.backgroundColor = backColor[1];
    }
  } else {
    box[0].style.width = `${e.data}px`;
  }
};

ws.onclose = () => {
  console.log("close connection");
};

btn[0].onclick = function () {
  ws.send(getWormRandomRGB());
};

btnSky[0].onclick = function () {
  ws.send(getSkyRandomRGB());
};

function getWormRandomRGB() {
  let RGB = `worm/rgb(${Math.floor(
    Math.random() * 255
  ).toString()}, ${Math.floor(Math.random() * 255).toString()}, ${Math.floor(
    Math.random() * 255
  ).toString()})`;
  return RGB;
}

function getSkyRandomRGB() {
  let RGB = `sky/rgb(${Math.floor(
    Math.random() * 255
  ).toString()}, ${Math.floor(Math.random() * 255).toString()}, ${Math.floor(
    Math.random() * 255
  ).toString()})`;
  return RGB;
}
