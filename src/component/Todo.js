import React from 'react';
import Clock from '../img/icons8-clock-48.png'
import '../style/Todo.css'
import { useNavigate} from 'react-router-dom';

const Todo = ({user,navigation}) => {


const navigate=useNavigate();

function sendDetails(user){
    navigate('/dtails',{state:{user:user,name:'sabaoon'}});            
}
    return ( 
        <>
            <div 
            onClick={() => sendDetails(user)}
            className={user.Description.length>65?'todoItem-orange':'todoItem-red'} >
                <div className='title' >{user.Title }
                <img src={Clock} alt='' className={user.Description.length>65?'heidden-Clock-logo':'Clock-logo'}></img>
                </div>
                <div className='decription'>{user.Description}</div>
                <p className={user.Description.length>65?'display':'undisplay'}>...</p>
                <div className='date'>{user.Date}</div>

            </div>
        </>
     );
}
 
export default Todo;