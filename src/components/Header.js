
import logo_icon from '../../image/logo.png'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {

    const [btn, setBtn] = useState("Login");
    const [newUserName, setNewUserName] = useState();

    const onlineStatus = useOnlineStatus(); 

    useEffect(() =>
    {
        setNewUserName("Nilesh Gupta");
    }, []);
    
    const {userName} = useContext(UserContext);
    console.log(userName + newUserName);        
    return (
        <UserContext.Provider value={{userName: newUserName}}>
            <div className='flex justify-between p-4 m-4 shadow-lg'>
                <div className=''>
                    <img id ="logo" src={logo_icon}></img>
                </div>
                <div className='p-6 m-6 align-middle'>
                    <ul className='flex font-medium'>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'><Link to="/" >Home</Link></li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'><Link to="/about" >About Us</Link></li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'><Link to="/contact" >Contact Us</Link></li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'><Link to="/grocery" >Grocery</Link></li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'>Cart</li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600 bg-gray-300 rounded-md'><button className='btn-login' onClick={()=> {
                            btn == "Login" ? setBtn("Logout") : setBtn("Login");
                        }}>{btn}</button></li>
                        <li className='px-4 hover:cursor-pointer hover:text-gray-600'>{userName}</li>
                    </ul>
                </div>
            </div>
        </UserContext.Provider>
    )
}



export default Header;