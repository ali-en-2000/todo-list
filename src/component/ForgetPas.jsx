import React from 'react';
import '../style/forgetPassword.css';
import logo from '../img/1.png';
import arrow from '../img/left.png';
import "antd/dist/antd.css";
import {Form, Input, Button} from 'antd';
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import {useNavigate} from "react-router-dom"



function ForgetP() {
  const navigate=useNavigate()
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
      />
      <Input.Password 
        placeholder="Confirm Password"
        className='input-value'
        id='placeholder-2'
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        style={{fontSize:"23px"}}
        size='large' 
      />

    <Form.Item>
      <Button block type='primary'className='changePassword-btn' htmlType='submit' onClick={()=>{navigate("/")}} >CHANGE PASSWORD</Button>
    </Form.Item>  

  </Form>
</div>
  );


}

export default  ForgetP;
