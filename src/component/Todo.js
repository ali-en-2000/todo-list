import React from 'react';
import Clock from '../img/icons8-clock-48.png'
import '../style/Todo.css'
import {Navigate, useNavigate} from "react-router-dom"
import Dtials from './Dtails'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Todo = ({user}) => {


const navigate=useNavigate();

function sendDetails(user){
    return (
        <>
            {alert(user.Title)}
            {<Dtials user={user} onClick={navigate('/Dtails')}   />}
            
            
        </>
    );

}
    return ( 
        <>
        {/* <Link to={{pathname:'/dtails',state:{users:user}}} > */}
            <div 
            onClick={() => sendDetails(user)}
            // onClick={<Dtials/>}            
            className={user.Description.length>65?'todoItem-orange':'todoItem-red'} >
                <div className='title' >{user.Title }
                <img src={Clock} alt='' className={user.Description.length>65?'heidden-Clock-logo':'Clock-logo'}></img>
                </div>
                <div className='decription'>{user.Description}</div>
                <p className={user.Description.length>65?'display':'undisplay'}>...</p>
                <div className='date'>{user.Date}</div>

            </div>
        {/* </Link> */}
        </>
     );
}
 
export default Todo;