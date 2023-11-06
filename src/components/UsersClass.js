import React from "react";

class UsersClass extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render(){

        const {component, name, location, contact} = this.props;

        return(
            <div className="user-card">
                <h1>{component}</h1>
                <h1>Name: {name}</h1>
                <h2>Address: {location}</h2>
                <h2>Contact: {contact}</h2>
            </div>
        )
    }
}

export default UsersClass;