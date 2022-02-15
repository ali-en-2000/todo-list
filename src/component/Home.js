import React from 'react';
import "../style/home.css";
import setting from '../img/settings.png';
import todo from '../img/todoLogo.png';
import addTodo from '../img/icons8-plus-+-150.png';
import filter from '../img/icons8-funnel-100.png';
import gallery from '../img/icons8-gallery-49.png';
import { Row, Col, Button, Input} from 'antd';
import { useState } from 'react';
import { Drawer  } from 'antd';
import {useNavigate} from "react-router-dom"
import TodoList from "../component/TodoList";
import { DatePicker,Space } from 'antd';
import { Menu, Dropdown } from 'antd';


import 'antd/dist/antd.css';
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css"
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
  ///           save input todo in him state
  const [title, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date_create, setStartDateCreate] = useState(new Date());
  const [date, setStartDate] = useState('');
  const [image, setImage] = useState('');
  let users = JSON.parse( localStorage.getItem('user') || "[]" );
  var user={
    Title:title, 
    Description:description, 
    Date:date,
    Date_create:date_create, 
    Image:image
  }
  function saveTodo(){
    if(document.querySelector('input').defaultValue === '' && document.querySelector('TextArea').defaultValue === ''){
      closeDrawer();
    }else{
      users.push(user);
      localStorage.setItem('user',JSON.stringify(users));
      closeDrawer();
      clearFild();
    }
  }
  
  const clearFild=()=>{
    setName('');
    setDescription('');
    setImage('');
    document.querySelector('input').defaultValue = '';
    document.querySelector('TextArea').defaultValue = '';
    document.querySelector('input').defaultValue = '';

  }
  /////////// dropdown filter icon

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
          <Space direction="vertical" className='div-datapicker' >
          {/* datepicker fro get deadline */}
          <DatePicker 
            onChange={(Date) => setStartDate(Date)} 
            placeholder='Deadline (optional)' 
            format='DD MMMM yyyy' />
          </Space>
          <Space direction="vertical" style={{display:'none'}} >
          {/* datepicker fro get date create */}
          {/* fix onChange */}            
          <DatePicker 
            onChange={(Dat) => setStartDateCreate(Dat)} 
            placeholder='Deadline (optional)' 
            format='DD MMMM yyyy' />
          </Space>
          <button className='add-img-btn'>
            <input 
              className="add-img" 
              onChange={(e) => setImage(e.target.value)}
              type="file" 
              value={image}/>
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
