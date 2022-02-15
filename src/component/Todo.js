import React from 'react';
import Clock from '../img/icons8-clock-48.png'
import '../style/Todo.css'
import Moment from 'moment';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
const Todo = ({user,status}) => {
    let users= JSON.parse( localStorage.getItem('user') || "[]" );
    console.log("hi")

    const Filter=()=>{
        console.log(users.length)

            if(status.status==='All'){
                return (
                    <div className='show'>
                        <div 
                            onClick={() => sendDetails(user)}
                            className={user.Date===''?'todoItem-orange':'todoItem-red'} 
                            >
                            <div className='title' >{user.Title }
                            <div className={user.Title===''?'hidden':'show'}>
                            <img src={Clock} alt='' className={user.Date===''?'heidden-Clock-logo':'Clock-logo'}></img>
                            </div>
                            </div>
                            <div className='decription'>{user.Description}</div>
                            <p className={user.Description.length>65?'display':'undisplay'}>...</p>
                            <div className='date'><p>{Moment(user.Date_create).format('DD MMM YYYY')}</p></div>
                        </div>            
                    </div>
                )
            }

            if(status.status==='ByTime'){                
                return (
                    <div className={user.Date===''?'show':'hidden'}>
                        <div 
                            onClick={() => sendDetails(user)}
                            className={user.Date===''?'todoItem-orange':'todoItem-red'} 
                            >
                            <div className='title' >{user.Title }
                            <div className={user.Title===''?'hidden':'show'}>
                            <img src={Clock} alt='' className={user.Date===''?'heidden-Clock-logo':'Clock-logo'}></img>
                            </div>
                            </div>
                            <div className='decription'>{user.Description}</div>
                            <p className={user.Description.length>65?'display':'undisplay'}>...</p>
                            <div className='date'><p>{Moment(user.Date_create).format('DD MMM YYYY')}</p></div>
                        </div>
                                
                    </div>
                )
                
            }
            if(status.status==='Deadline'){
                return (
                    <div className={user.Date===''?'hidden':'show'}>
                        <div 
                            onClick={() => sendDetails(user)}
                            className={user.Date===''?'todoItem-orange':'todoItem-red'} 
                            >
                            <div className='title' >{user.Title }
                            <div className={user.Title===''?'hidden':'show'}>
                            <img src={Clock} alt='' className={user.Date===''?'heidden-Clock-logo':'Clock-logo'}></img>
                            </div>
                            </div>
                            <div className='decription'>{user.Description}</div>
                            <p className={user.Description.length>65?'display':'undisplay'}>...</p>
                            <div className='date'><p>{Moment(user.Date_create).format('DD MMM YYYY')}</p></div>
                        </div>
                    </div>
                
                )
            }
        }    

    const navigate=useNavigate();
    
    function sendDetails(user){
        navigate('/dtails',{state:{user:user}});  
    }
        return ( 
            <div >
                {Filter()}
            </div>
        );
}
 
export default Todo;