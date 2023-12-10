import io from "socket.io-client";
import dotenv from "dotenv";

dotenv.config();
const BACKEND_URL = "http://65.2.29.114:8000";
const URL = BACKEND_URL;
console.log(URL);

const socket = io(URL);

var mySocketId;
// register preliminary event listeners here:

socket.on("createNewGame", (statusUpdate) => {
  console.log(
    "A new game has been created! Username: " +
      statusUpdate.userName +
      ", Game id: " +
      statusUpdate.gameId +
      " Socket id: " +
      statusUpdate.mySocketId
  );
  mySocketId = statusUpdate.mySocketId;
});

export { socket, mySocketId };
