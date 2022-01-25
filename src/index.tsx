import * as React from "react";
import * as ReactDOM from "react-dom";

import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";

ReactDOM.render(
    <div>
        <h1>Hello, World!</h1>
        <FirstComponent />
        <UserComponent 
            name="John Doe"
            age={33}
            address="123 Garam St, Paju"
            birthday={new Date()}
        />
    </div>,
    document.getElementById("root")
);