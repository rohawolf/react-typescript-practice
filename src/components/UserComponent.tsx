import * as React from "react";
import UserInterface from "../interfaces/UserInterface";

export default class UserComponent extends React.Component<UserInterface, {}> {
    constructor (props: UserInterface) {
        super(props);
    }

    render() {
        const {name, age, address, birthday} = this.props;
        return (
            <div>
                <h1>User Component</h1>
                Hello <b>{name}</b>
                <br />
                You are <b>{age}</b> years old
                <br />
                You live at: <b>{address}</b>
                <br />
                You were born: <b>{birthday.toDateString()}</b>
                <br />
            </div>
        );
    }
}