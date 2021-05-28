import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";

function Join() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return <div className="container join-main-div">
        <h1>Join a Room!</h1>
        <hr className="line"></hr>

            <input type="text" className="form-control mb-3" placeholder="Username" onChange={e => setName(e.target.value)} value={name} />
            <input type="text" className="form-control mb-3" placeholder="Roomname" onChange={e => setRoom(e.target.value)} value={room} />

        <Link onClick={(event) =>  (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="btn btn-primary join-button mb-3">Join</button>
        </Link>
        <Link onClick={(event=> {
            if(!name) {
                return event.preventDefault();
            }
        })} to={`/chat?name=${name}&room=default`}>
            <button className="btn btn-outline-light join-button">Default Room</button>
        </Link>
    </div>
}

export default Join;