const express = require("express");
const WebSocket = require("ws");

const server = express().listen(3000, () => {
  console.log(`Listening on port 3000.`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  const sendNowTime = setInterval(() => {
    ws.send(getRandomInt());
  }, 3000);

  ws.on("message", (message) => {
    let clients = wss.clients;
    clients.forEach((client) => {
      client.send(message.toString());
    });
  });

  ws.on("close", function close() {
    clearInterval(sendNowTime);
    console.log("Client disconnected");
  });
});

function getRandomInt() {
  return Math.floor(100 + Math.random() * 900).toString();
}
//
