import React from "react";
import "./Window.css";

function Window({room}) {
    return <div className="window-main">
        <div className="row">
            <div className="col-6 window-left-div">
                <p className="window-bar-text">Room: {room}</p>
            </div>
            <div className="col-6 window-right-div">
            <a href="/"><p className="window-bar-text"><i class="fas fa-times-circle"></i></p></a>
            </div>
        </div>
    </div>
}

export default Window;