import React from 'react';
import Clock from '../img/icons8-clock-48.png'
import '../style/Todo.css'
import Moment from 'moment';
import { useNavigate} from 'react-router-dom';

const Todo = ({user}) => {

    const navigate=useNavigate();
    function sendDetails(user){
        navigate('/dtails',{state:{user:user,name:'sabaoon'}});  
        console.log('do it')          
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
                    <div className='date'><p>{Moment(user.Date).format('DD MMM YYYY')}</p></div>

                </div>
            </>
        );
}
 
export default Todo;