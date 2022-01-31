import React from 'react';
import '../style/forgetPassword.css';
import logo from '../img/1.png';
import arrow from '../img/left.png';
import "antd/dist/antd.css";
import {Form, Input, Button} from 'antd';
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import {useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie';
import  { useState } from 'react';


function ForgetP() {
  const navigate=useNavigate()
  const [ConfirmPassword, setConfirmPasswrod] = useState('');
  const [password, setPassword] = useState('');
  const [cookies,setCookie] = useCookies(['user']);


  const handle = () => {
  if(password===ConfirmPassword && password!==''){
    const a =cookies.Password;
    cookies.Password=a;
    //tow line above is just for fix error 
    setCookie('Password', password, { path: '/', maxAge:'3600'});
    window.location.replace("/");
  }else{
    alert('password and confirm pass is not match!! or your fild is empty')
  } 
  };

  return (
  <div className="icon"  >  
    <img className='todo-image' src={logo} alt="#"  ></img>
    <img className='arrow-image' src={arrow} alt="#" onClick={()=>{navigate("/")}} ></img>

    <Form className='login-form'>

      <Input.Password 
        placeholder="Password"
        className='input-value iv'
        id='placeholder-1'
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        style={{fontSize:"23px"}}
        size='large' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input.Password 
        placeholder="Confirm Password"
        className='input-value'
        id='placeholder-2'
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        style={{fontSize:"23px"}}
        size='large' 
        value={ConfirmPassword}
        onChange={(e) => setConfirmPasswrod(e.target.value)}
      />

    <Form.Item>
      <Button block type='primary'className='changePassword-btn' htmlType='submit' onClick={handle} >CHANGE PASSWORD</Button>
    </Form.Item>  

    </Form>
  </div>
);


}

export default  ForgetP;
