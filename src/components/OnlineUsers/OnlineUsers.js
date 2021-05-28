import React from "react";

import "./OnlineUsers.css";

function OnlineUsers({onlineUsers}) {

    return <div class="online-users-main">
        <div>
        <i class="fas fa-globe"></i> <h2 className="mb-2 text-online-users"> Online Users</h2>
        </div>
        {onlineUsers.map((user, i) => <div key={i} className="online-user">• {user.name}</div>)}
    </div>
}

export default OnlineUsers;