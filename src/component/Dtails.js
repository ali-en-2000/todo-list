import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/Dtails.css'
const ShowDtails = (props) => {

    // var jj = JSON.parse('jjj');
    // let users = JSON.parse( localStorage.getItem('user') || "[]" );
    // console.log(props.user)
    return ( 
        <>
            <div className='div-dtails'>
                {alert(props.user.Title)}
                {/* <h1>hello {props.user}</h1> */}

            </div>
        </>
     );
}
 
export default ShowDtails;