import React from 'react';
import '../style/signUp.css';
import logo from '../img/1.png';
import "antd/dist/antd.css"
import {Form, Input, Button} from 'antd'
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const navigate=useNavigate()
    const [name, setName] = useState('');
    const [emial, setEmial] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const [cookies,setCookie] = useCookies(['user']);
    
    const handle = () => {
        if(pwd===cpwd && pwd!=='' && cpwd!==''){
            if(name!=='' && emial!==''){

                const a =cookies.Password;
                cookies.Password=a;
                //tow line above is just for fix error 
                setCookie('Name', name, { path: '/', maxAge:'3600'});
                setCookie('Password', pwd, { path: '/', maxAge:'3600'});
                setCookie('emial', emial, { path: '/', maxAge:'3600'});
                window.location.replace("/");
            }else(alert('fill empty box'))
        }
        else(
        alert("your confitrm pasword is not corect.!!!")
        )
    };
    return ( 
        <div className="icon"  >      
        <img className='todo-image' src={logo} alt="#"  ></img>

        <Form className='signup-form'>
            <div className='input-tag'>
            <Form.Item  name="fulName"style={{marginTop:"-8px"}}>
                    <Input 
                        placeholder='Full Name' 
                        className='input-value' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    ></Input>
                </Form.Item>
                <Form.Item  name="email" style={{marginTop:"1px"}} >
                    <Input 
                        placeholder='Email' 
                        className='input-value' 
                        value={emial}
                        onChange={(e) => setEmial(e.target.value)}
                        required
                    ></Input>                    
                </Form.Item>
                <Input.Password 
                    placeholder="Password"
                    id='placeHolder0'
                    className='input-value'
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{fontSize:"23px",top:"-14px"}}
                    size='large'
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)} 
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
                    value={cpwd}
                    onChange={(e) => setCpwd(e.target.value)}
                />
            </div>
            <Form.Item>
            <Button block type='primary'
                className='sign-UP-btn' 
                htmlType='submit' 
                onClick={handle} >SIGN UP
            </Button>
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