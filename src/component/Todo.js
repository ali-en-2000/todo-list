import React from 'react';
import Moment from 'moment';
import { useNavigate} from 'react-router-dom';

// Import picture 
import Clock from '../img/icons8-clock-48.png'

// Import style
import '../style/Todo.css'

const Todo = ({user,status}) => {

    const Filter=()=>{
            // Condition for filtering
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
    //  navigate to detail coponent
    function sendDetails(user){
        navigate('/details',{state:{user:user}});  
    }
        return ( 
            <div >
                {Filter()}
            </div>
        );
}
 
export default Todo;