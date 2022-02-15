import React, { useState } from 'react';

//   Import pages
import Login from './Login';
import Signup from './SignUp';
import ForgetPass from './ForgetPas';

//   Import style
import '../style/EntranceGates.css'

//   Import pictures
import logo from '../img/Union.png'


const EntranceGates = () => {
    // Components key
    const[status,SetStatus]=useState('SIGN UP')
    return ( 
        <>
            <div className='mainDiv'>
            <img className='todo-image' src={logo} alt="#"  ></img>

                <div className='inputValidation_Div'>
                    {status==='SIGN IN' && <Login status={status} setStatus={SetStatus}/>}
                    {status==='SIGN UP' && <Signup status={status}  setStatus={SetStatus}/>}
                    {status==='CHANGE PASSWORD' && <ForgetPass status={status}  setStatus={SetStatus}/>}
                </div>
            </div>
        </>
     );
}
 
export default EntranceGates;