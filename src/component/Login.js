import React from 'react';
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie';
import { useState } from 'react';

//  Related to ant design
import { Form, Input, Button } from 'antd';
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

//   import style
import '../style/login.css';
import "antd/dist/antd.css";


function LogIn({setStatus,status}) {

  // for handel input incorrect error
  const[checkEmail,setCheckEmail]=useState('input-value checkEmail')
  const[checkPassword,setCheckPassword]=useState('input-value checkPassword')

  // for get email, password
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setcookie] = useCookies(['user']);

  const handle = () => {
    //  check email and password
    if(password===cookies.Password && email===cookies.emial){
     navigate("/home")  
    }

    //     If the input values ​​are not correct, Run the following styles
    if(email===''){
      setCheckEmail('input-value checkEmail_error')
    }
    if(password===''){
      setCheckPassword('input-value checkPassword_error')
    }
    if(password!==email && password!==cookies.Password && email!==cookies.emial){
      setCheckEmail('input-value checkEmail_error')
      setCheckPassword('input-value checkPassword_error')
    }
  };

   return (
    <div> 

        <Form className='login-form' >
          <Form.Item  
            name="email">
            <Input
              placeholder='Email' 
              id='placeholder_email' 
              className={checkEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
          </Form.Item>

          <Input.Password 
            placeholder="Password"
            className={checkPassword}
            id='placeholder_password'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            style={{fontSize:"23px"}}
            size='large'           
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Form.Item>          
            <span className="forgetPass_link" onClick={()=>setStatus('CHANGE PASSWORD')} >
              Forgot Password?
            </span>
          </Form.Item>
          <Form.Item>
            <Button block 
              type='primary'
              className='validation_button SINGIN' 
              htmlType='submit' 
              onClick={handle } >{status}
            </Button>
          </Form.Item>  
          <Form.Item style={{marginTop:"-10px"}}>
            <span className='sinUp_link'>
              Don't have an account? 
              <span onClick={()=>setStatus("SIGN UP")}>
                Sign up
              </span>
            </span>
          </Form.Item>     
        </Form>
    </div>
  );


}

export default  LogIn;
