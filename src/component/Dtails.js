import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row} from 'antd';
import { useNavigate } from 'react-router-dom';

////////////////// images needed
import trashBin from '../img/trash-bin.png'
import pencil from '../img/pencil.png'
import clock from '../img/icons8-clock-48.png'
import arow_left from '../img/left.png'

import '../style/Dtails.css'
import { upload } from '@testing-library/user-event/dist/upload';
const ShowDtails = (props) => {
  const navigate=useNavigate()

    const location = useLocation();
    return ( 
        
        <div className='main-div-detail-page'>
            <Row className='head-div'>
               <div>
                   <img alt='' src={arow_left} onClick={()=>{navigate("/home")}}/>
               </div>
               <div>
                    <img alt='' src={clock} />
                    <img alt='' src={pencil}/>
                    <img alt='' src={trashBin}/>
               </div>
                <Row className='date-Todo-div'>
                    {location.state.user.Date}
                </Row>
            </Row>
            <div className='content'>
                <Row className='Title-Todo-div'>
                    {location.state.user.Title}
                </Row>
                <Row className='description-Todo-div'>
                {location.state.user.Description}
                </Row>
                <Row className='imag-Todo-div'>
                {location.state.user.Image}
                </Row>
            </div>
        </div>
        
     );
}
 
export default ShowDtails;
