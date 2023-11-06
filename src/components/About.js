import Users from "./Users";
import UsersClass from "./UsersClass";

const About = () => {
    return <div>
        <h1>About us Page</h1>
        <Users component={"Functional Component"} name={"Nilesh Gupta"} location={"kitchener, Ontario"} contact={"nilesh88987@gmail.com"}/>
        <UsersClass component={"Class Component"} name={"Nilesh Gupta"} location={"kitchener, Ontario"} contact={"nilesh88987@gmail.com"}/>
    </div>
};

export default About;