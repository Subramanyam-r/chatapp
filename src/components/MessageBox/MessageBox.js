import React from "react";

function MessageBox({setMessage, message, sendMessage}) {

    
    return <div className="mt-2">
            <div className="input-group mb-3">
                <input id="message-box-input" onKeyPress={e => e.charCode === 13 ? sendMessage() : null} type="text" className="form-control" placeholder="Type a message..." onChange={e => setMessage(e.target.value)} value={message} />
                <div className="input-group-append">
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => {
                    document.getElementById("message-box-input").focus();
                    if(message) {
                        sendMessage();
                    }
                }}>Send</button>
            </div>
        </div>
    </div>
}

export default MessageBox;