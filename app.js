const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");

const users = [];

corsOptions={
    cors: true,
   }
const io = require("socket.io")(server, corsOptions);
const PORT = process.env.PORT || 3001;

app.use(cors());
app.get("/", (req, res) => {
    res.send("Chat app express server is active!");
});

io.on("connection", (socket) => {
    console.log("A new user just connected: " + socket.id);

    socket.on("join", ({name, room}, callback) => {
        console.log(name + " has joined the room " + room);
        socket.join(room);
        users.push({id: socket.id, name: name, room: room});
        console.log(users);
        socket.emit("message", {user: "Admin", text: "Welcome to the room, " + name});
        socket.broadcast.to(room).emit("message", {user: "Admin", text: name + " has joined the chat!"});
        io.in(room).emit("joinUpdater", users.filter(user => user.room === room))
    });

    socket.on("disconnect", () => {
        console.log("user disconnected! -  " + socket.id);
        let disconnectedId = users.findIndex(user => user.id === socket.id);
        socket.broadcast.to(users[disconnectedId].room).emit("message", {user: "Admin", text: users[disconnectedId].name + " has left the chat"});
        socket.broadcast.to(users[disconnectedId].room).emit("joinUpdater", users.filter((user, i) => user.room === users[disconnectedId].room && i !== disconnectedId));
        users.splice(disconnectedId, 1);
        console.log("disconnectedId: " + disconnectedId);
        console.log(users);
    });

    socket.on("newMessage", (message, callback) => {
        io.in(message.room).emit("message", {user: message.name, text: message.text});
        callback();
    });
});

server.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
});