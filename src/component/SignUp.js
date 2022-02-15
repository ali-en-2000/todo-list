import React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom"

//  Related to ant design
import {Form, Input, Button} from 'antd'
import EyeTwoTone from '@ant-design/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

//  Import style
import '../style/signUp.css';
import "antd/dist/antd.css"


const Signup = ({setStatus,status}) => {

    // for handel input incorrect error
    const[checkEmail,setcheckEmail]=useState('input-value SignUp_Input_emial')
    const[checkFullName,setcheckFullName]=useState('input-value SignUp_Input_Name')
    const[checkPassword,setcheckPassword]=useState('input-value SignUp_Input_Password')
    const[checkConfirmPassword,setcheckConfirmPassword]=useState('input-value SignUp_Input_ConfirmPassword')

    // for save new name, new email, new password
    const navigate=useNavigate()
    const [name, setName] = useState('');
    const [emial, setEmial] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const [cookies,setCookie] = useCookies(['user']);
    
    const handle = () => {
        if(pwd===cpwd && pwd!=='' && cpwd!=='' && name!=='' && emial!==''){
            //save name, email and password in cookies
            setCookie('Name', name, { path: '/', maxAge:'3600'});
            setCookie('emial', emial, { path: '/', maxAge:'3600'});
            setCookie('Password', pwd, { path: '/', maxAge:'3600'});
            navigate('/home')
        }

        //     If the input values ​​are not correct, Run the following styles
        if(emial===''){
            setcheckEmail('input-value SignUp_Input_emial_error')
        }
        if(name===''){
            setcheckFullName('input-value SignUp_Input_Name_error')
        }
        if(pwd===''){
            setcheckConfirmPassword('input-value SignUp_Input_Password_error')
        }
        if(cpwd===''){
            setcheckPassword('input-value SignUp_Input_ConfirmPassword_error')
        }
        if(pwd!==cpwd){
            setcheckConfirmPassword('input-value SignUp_Input_Password_error')
            setcheckPassword('input-value SignUp_Input_ConfirmPassword_error')
        }
    };
    return ( 
        <div>     

            <Form className='signup-form'>
                <Form.Item  name="email" >
                    <Input 
                        placeholder='Email' 
                        className={checkEmail} 
                        value={emial}
                        onChange={(e) => setEmial(e.target.value)}
                        required
                    ></Input>                    
                </Form.Item>
                
                <Form.Item  name="fulName">
                    <Input 
                        placeholder='Full Name' 
                        className={checkFullName} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    ></Input>
                </Form.Item>

                <Input.Password 
                    placeholder="Password"
                    id='placeHolder_Password'
                    className={checkPassword}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    size='large'
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)} 
                    required
                />
                <Form.Item>   
                </Form.Item>
                <Input.Password 
                    placeholder="Confirm Password"
                    className={checkConfirmPassword}
                    id='placeHolder_ConfirmPassword'
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    size='large' 
                    value={cpwd}
                    onChange={(e) => setCpwd(e.target.value)}
                    required
                />
                <Form.Item>
                <Button block type='primary'
                    className='validation_button signUp' 
                    onClick={handle} >{status}
                </Button>
                </Form.Item>  
                <Form.Item>
                <span className='login_link'>
                    Have an account? 
                    <span onClick={()=>setStatus('SIGN IN')}>
                    Log in
                    </span>
                </span>
                </Form.Item>     
            </Form>
        </div>
     );
}
 
export default Signup;