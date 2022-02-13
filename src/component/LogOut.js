import React from 'react';
import setting from '../img/settings.png'
import rafiki from '../img/rafiki.png'
import { Cookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"

//        style
import "../style/LogOut.css"


const LogOut = () => {
    const cookies = new Cookies();
    const navigate=useNavigate()

    function logout(){
        cookies.remove("Name")
        cookies.remove("emial")
        cookies.remove("Password")
        navigate('/')
    }
    return ( 
        <div className='main-div-LogOutComponent'>
            <div className='head'>
                <p>TO DO LIST</p>
                <img src={setting} alt='' onClick={()=>navigate('/home')}></img>
            </div>
            <img src={rafiki} alt='' className='rafiki'></img>
            <div className='logOut_content'>
                <div className='fullName'>
                    <p>Full Name</p>
                    <p>{cookies.get('Name')}</p>
                </div>
                <div className='Email'>
                    <p>Email</p>
                    <p>{cookies.get('emial')}</p>
                </div>
                <div className='Password'>
                    <p>Password</p>
                    <p onClick={()=>navigate('/Forgetpas')}>Change Password</p>
                </div>
            </div>
            <button className='logout' onClick={()=>logout()}>LOG OUT</button>
        </div>
     );
}
 
export default LogOut;