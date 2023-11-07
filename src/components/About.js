import Users from "./Users";
import UsersClass from "./UsersClass";

import { Component } from "react";

class About extends Component{
    render(){
        return <div>
            <h1>About us Page</h1>
            <UsersClass component={"Class Component"} name={"Nilesh Gupta"} location={"kitchener, Ontario"} contact={"nilesh88987@gmail.com"}/>
        </div>
    }
} 

export default About;