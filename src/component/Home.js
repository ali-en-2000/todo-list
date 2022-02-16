import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import React from 'react';
//  Related to ant design

import { Row, Col, Button, Input} from 'antd';
import { Drawer  } from 'antd';
import { DatePicker,Space } from 'antd';
import { Menu, Dropdown } from 'antd';

// Import pictures
import addTodo from '../img/plus-circle.png';
import setting from '../img/settings.png';
import todo from '../img/todoLogo.png';
import filter from '../img/icons8-funnel-100.png';
import gallery from '../img/icons8-gallery-49.png';

// Import page
import TodoList from "../component/TodoList";

// Import styles
import "../style/home.css";
import 'antd/dist/antd.css';
import "react-datepicker/dist/react-datepicker.css";
const{TextArea }=Input;


function Home() {

  const navigate=useNavigate()
  const [style, setStyle] = useState("hidden1"); 
  const [status, setStatus] = useState("All"); 
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setStyle("show1");
    setTimeout(function () {
      setIsVisible(true);
    },0);
   }
  const closeDrawer = () => {
    setIsVisible(false)
    setTimeout(function () {
      setStyle("hidden1");
    },300);
  }

  ///  save input todo in him state
  let users = JSON.parse( localStorage.getItem('user') || "[]" );
  var user;
  const [title, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date_create, setStartDateCreate] = useState(new Date());
  const [date, setStartDate] = useState('');
  const [imagee, setImagee]=useState('')

  // set input user to user Todo
  user={
    Title:title, 
    Description:description, 
    Date:date,
    Date_create:date_create, 
    Image:imagee
  }

  //  get image
  const changeImage=(e)=>{
    const file = e.target.files[0];    

    const getBase64 = (file) => {
      return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      })
    }

    getBase64(file).then(base64 => {
      setImagee(base64)
    }) 
  }


  // save input data in local storage
  function saveTodo(){
    if(document.querySelector('input').defaultValue === '' && document.querySelector('TextArea').defaultValue === ''){
      closeDrawer();
    }else{
      if(user.Date===null){
        user.Date=''
      }
      // seve Todo in local storage
      users.push(user);
      localStorage.setItem('user',JSON.stringify(users));
      closeDrawer();
      clearFild();
    }
  }
  
  const clearFild=()=>{
    setName('');
    setDescription('');
    document.querySelector('input').defaultValue = '';
    document.querySelector('TextArea').defaultValue = '';
  }

  // dropdown filter icon
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p onClick={()=>setStatus("All")}>
         All
        </p>
      </Menu.Item>
      <Menu.Item key="1">
        <p onClick={()=>setStatus("ByTime")}>
       By Time
        </p>
      </Menu.Item>
      <Menu.Item key="2">
      <p onClick={()=>setStatus('Deadline')}>
        Deadline
        </p>
      </Menu.Item>
    </Menu>
  );




  return (
    <div className='main'>
      <Row className='header'>
        <Col span={9} offset={1}><p > TO DO LIST</p></Col>
        <Col span={2} offset={11} className='gear'>
          <img 
            src={setting} 
            alt=''
            onClick={()=>navigate('/LogOut')}
          ></img>
        </Col>
      </Row>
      <Row  className='navListOfTodo'>
        <Col span={3} offset={1} className='logoTodo'>
          <img src={todo} alt=''></img>
        </Col>
        <Col span={10} offset={0} className='listOfTodo'>
          <p>LIST OF TODO</p>
        </Col>
        <Col span={2} offset={7} className='filterLogo'>
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} >
            <img 
              src={filter} 
              alt='' 
            >              
            </img>
          </Dropdown>
        </Col>       
      </Row>
      <Row>
        <TodoList status={status} />
      </Row>

      <div>

        {/* button for how drawer */}
        <div className='newTodo-btn'onClick={showDrawer}>
          <img src={addTodo} alt='' ></img>
        </div>

        {/* drawer for get todo */}
        <Drawer
        className={style}
        visible={isVisible}
        onClose={closeDrawer}
        placement="bottom"
        >        
        <hr/>
          <Input  
            className='input-newTodo' 
            placeholder='Title' 
            value={title} 
            onChange={(e) => setName(e.target.value)}>
          </Input>  
          <TextArea 
            className='description' 
            placeholder='Desciption' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}>
          </TextArea>

          {/* datepicker fro get deadline */}
          <Space direction="vertical" className='div-datapicker' >
          <DatePicker 
            onChange={(Date) => setStartDate(Date)} 
            placeholder='Deadline (optional)' 
            format='DD MMMM yyyy' />
          </Space>

          {/* datepicker fro get date create */}
          <Space direction="vertical" style={{display:'none'}} >
          <DatePicker 
            onChange={(DateCreate) => setStartDateCreate(DateCreate)} 
            placeholder='Deadline (optional)' 
            format='DD MMMM yyyy' />
          </Space>

          <button className='add-img-btn'>
            <input 
              className="add-img" 
              onChange={(imagee)=>changeImage(imagee)}
              type="file" 
              />
              <img src={gallery} alt="/" className="gallery"></img>
          </button>

          {/* button for save todo */}
          <Button className='add-todo-btn'onClick={saveTodo}>ADD TODO</Button>
        </Drawer>
      </div>

    </div>
  );
}

export default Home;
