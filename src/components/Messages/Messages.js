import React from "react";
// @ts-ignore
import "./Messages.css";

function Messages({clientUser, messages}) {

    return  <div id="scroll-to-bottom" className="messages-main">
                {messages.map( msg => {
                    let key = messages.indexOf(msg);
                    if(msg.user === clientUser) {
                        return <div key={key}className="blue-outer-div">
                            <div className="mb-3 message-client">{msg.text}</div>
                        </div>
                    } else if(msg.user === "Admin") {
                        return <div key={key}className="admin-outer-div">
                            <div className="mb-3 admin-message">{msg.text}</div>
                        </div>
                    } else {
                       return <div key={key}>
                            <div className="mb-3"><div className="message"><p className="username"><b>{msg.user}</b></p>{msg.text}</div></div>
                       </div>
                    }
                })}
            </div>
}

export default Messages;