
import logo_icon from '../../image/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

    const [btn, setBtn] = useState("Login");

    const onlineStatus = useOnlineStatus(); 

    console.log("Header is rendered"+ {onlineStatus});
    return (
        <div className='header'>
            <div className='logo'>
                <img id ="logo" src={logo_icon}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About Us</Link></li>
                    <li><Link to="/contact" >Contact Us</Link></li>
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