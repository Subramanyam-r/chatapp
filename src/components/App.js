import React from "react";
import Join from "./Join/Join";
import Chat from "./Chat/Chat";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return <div>
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    </div>
}

export default App;