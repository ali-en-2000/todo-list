import React from 'react';
import '../style/signUp.css';
import logo from '../img/1.png';
import "antd/dist/antd.css"
import {Form, Input, Button} from 'antd'
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import {useNavigate} from "react-router-dom";



const Signup = () => {
  const navigate=useNavigate()

    return ( 
        <div className="icon"  >      
        <img className='todo-image' src={logo} alt="#"  ></img>

        <Form className='signup-form'>
            <div className='input-tag'>
                <Form.Item  name="email" style={{marginTop:"1px"}} >
                    <Input placeholder='Email' className='input-value' required></Input>
                </Form.Item>
                <Form.Item  name="fulName"style={{marginTop:"-8px"}}>
                    <Input placeholder='Full Name' className='input-value' required></Input>
                </Form.Item>
                <Input.Password 
                    placeholder="Password"
                    id='placeHolder0'
                    className='input-value'
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{fontSize:"23px",top:"-14px"}}
                    size='large' 
                />
                <Form.Item>   
                </Form.Item>
                <Input.Password 
                    placeholder="Confirm Password"
                    className='input-value'
                    id='placeHolder1'
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{fontSize:"23px",top:"-52px" }}
                    size='large' 
                />
            </div>
            <Form.Item>
            <Button block type='primary'className='sign-UP-btn' htmlType='submit' onClick={()=>{navigate("/Home")}} >SIGN UP</Button>
            </Form.Item>  
            <Form.Item>
            <span className='link-sign-up'>
                Have an account? 
                <a href="/" onClick={()=>{navigate("/")}}>
                Log in
                </a>
            </span>
            </Form.Item>     
        </Form>
    </div>
     );
}
 
export default Signup;