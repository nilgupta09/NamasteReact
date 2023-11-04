
import logo_icon from '../../image/logo.png'
import { useState } from 'react';

const Header = () => {

    const [btn, setBtn] = useState("Login");
    console.log("Header is rendered");
    return (
        <div className='header'>
            <div className='logo'>
                <img id ="logo" src={logo_icon}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className='btn-login' onClick={()=> {
                        btn == "Login" ? setBtn("Logout") : setBtn("Login");
                    }}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
}



export default Header;