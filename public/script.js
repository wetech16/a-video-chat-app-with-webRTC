const { PeerServer } = require("peer");

const socket = io("/");
const myPeer = new PeerServer(undefined, {
  host: "/",
  port: "3001",
});

socket.emit("join-room", ROOM_ID, 10);

socket.on("user-connected", (userId) => {
  console.log("User Connected: " + userId);
});
