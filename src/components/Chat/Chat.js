import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import Window from "../Window/Window";
import Messages from "../Messages/Messages";
import MessageBox from "../MessageBox/MessageBox";
import OnlineUsers from "../OnlineUsers/OnlineUsers"

import "./Chat.css";

let socket;

function Chat({location}) {
    
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "https://chat-bke.herokuapp.com/";

    useEffect( () => {
        let {name, room} = queryString.parse(location.search);
        console.log(name, room);

        setName(name);
        setRoom(room);
        
        socket = io(ENDPOINT);
        socket.on("message", (msg) => {
            setMessages(messages => [...messages, msg]);
            const scrollBottom = document.getElementById("scroll-to-bottom");
            scrollBottom.scrollTop = scrollBottom.scrollHeight;
        });

        socket.emit("join", {name, room}, (users) => {
        });

        socket.on("joinUpdater", users => {
            setOnlineUsers(users);
        });
        
        return () => {
            socket.emit("disconnect");
            socket.off();
        } 

    }, [location.search, ENDPOINT]);

    function sendMessage() {
        socket.emit("newMessage", {name, room, text: message}, () => {
        })
        setMessage("");
    }


    return <div className="row">
        <div className="col-md-5">
            <OnlineUsers onlineUsers={onlineUsers} />
        </div>
        <div className="col-md-7 container chat-main-div">
        <div className="chat-box">
            <Window room={room} />
            <Messages clientUser={name} messages={messages} />
        </div>
        <MessageBox
        setMessage={setMessage}
        message={message}
        sendMessage={sendMessage} />
    </div>
    </div>
}

export default Chat;