import React from 'react';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

//  Related to ant design
import { Form, Input, Button } from 'antd';
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

//  Import style
import "antd/dist/antd.css";
import '../style/forgetPassword.css';

//   Import picture
import arrow from '../img/left.png';


function ForgetPas({setStatus,status}) {

  // for handel input incorrect error
  const[checkPw,setCheckPw]=useState('input-value pw')
  const[checkCpw,setCheckCpw]=useState('input-value cpw')

  // for save new password
  const [ConfirmPassword, setConfirmPasswrod] = useState('');
  const [password, setPassword] = useState('');
  const [cookies,setCookie] = useCookies(['user']);


  const handle = () => {
  if(password===ConfirmPassword && password!==''){
    //    seve new password
    setCookie('Password', password, { path: '/', maxAge:'3600'});
    setStatus('SIGN IN')  
  }

  //     If the input values ​​are not correct
  if(password!==ConfirmPassword){
    setCheckPw('input-value pw-error')
    setCheckCpw('input-value cpw-error')
  }
  if(ConfirmPassword===''){
    
    setCheckCpw('input-value cpw-error')
  }
  if(password===''){
    setCheckPw('input-value pw-error')
  }

  };

  return (
    <div >  
      <img className='arrow-image' src={arrow} alt="#" onClick={()=>setStatus('SIGN IN')} ></img>

      <Form className='psw-div'>

        <Input.Password 
          placeholder="Password"
          className={checkPw}
          id='placeholder_NewPassword'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          style={{fontSize:"23px"}}
          size='large' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input.Password 
          placeholder="Confirm Password"
          className={checkCpw}
          id='placeholder_ConfirmNewPassword'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          style={{fontSize:"23px"}}
          size='large' 
          value={ConfirmPassword}
          onChange={(e) => setConfirmPasswrod(e.target.value)}
          required
        />

      <Form.Item>
        <Button block type='primary'className='validation_button changePass' htmlType='submit' onClick={()=>handle()} >{status}</Button>
      </Form.Item>  

      </Form>
    </div>
  );
}

export default  ForgetPas;
