import React from 'react';
import '../style/login.css';
import logo from '../img/1.png';
import "antd/dist/antd.css"
import {Form, Input, Button} from 'antd'
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import {useNavigate} from "react-router-dom"



function Log() {
  const navigate=useNavigate()
   return (
    <div className="icon"  >      
        <img className='todo-image' src={logo} alt="#"  ></img>

        <Form className='login-form' style={{marginBottom:"50px"}}>
          <Form.Item  name="email" >
            <Input placeholder='Email' id='placeholder0' className='input-value' required></Input>
          </Form.Item>
          <Input.Password 
            placeholder="Password"
            className='input-value'
            id='placeholder1'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            style={{fontSize:"23px"}}
            size='large' 
          />
        <Form.Item>          
          <a className="login-form-forgot" href="/ForgetPas" onClick={()=>{navigate("/ForgetPas")}} >
            Forgot Password?
          </a>
        </Form.Item>
        <Form.Item>
          <Button block type='primary'className='sign-in-btn' htmlType='submit' onClick={()=>{navigate("/Home")}} >SIGN IN</Button>
        </Form.Item>  
        <Form.Item style={{marginTop:"-10px"}}>
          <span className='link-sign-up'>
            Don't have an account? 
            <a className="ali" href="/SignUp" onClick={()=>{navigate("/SignUp")}}>
              Sign up
            </a>
          </span>
        </Form.Item>     
      </Form>
    </div>
  );


}

export default  Log;
