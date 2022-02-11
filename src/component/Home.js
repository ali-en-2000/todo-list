import React from 'react';
import "../style/home.css";
import gear from '../img/Gear.png';
import todo from '../img/todoLogo.png';
import addTodo from '../img/icons8-plus-+-150.png';
import filter from '../img/icons8-funnel-100.png';
import gallery from '../img/icons8-gallery-49.png';
import { Row, Col, Button, Input} from 'antd';
import { useState } from 'react';
import { Drawer  } from 'antd';
import 'antd/dist/antd.css';
// import { Space } from 'antd';
// import { Upload, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoList from "../component/TodoList";

import { DatePicker,Space } from 'antd';
import "antd/dist/antd.css"
const{TextArea }=Input;





function Home() {
  const [style, setStyle] = useState("cont"); 
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
    setStyle("cont2");
   }
  const closeDrawer = () => {
    setIsVisible(false)
    setStyle("cont");
  }

const [title, setName] = useState('');
const [description, setDescription] = useState('');
const [date, setStartDate] = useState(new Date());
const [image, setImage] = useState('');
let users = JSON.parse( localStorage.getItem('user') || "[]" );
var user={
  Title:title, 
  Description:description, 
  Date:date, 
  Image:image
}
  function saveTodo(){
    window.location.reload();
    if(document.querySelector('input').defaultValue === '' && 
    document.querySelector('TextArea').defaultValue === ''){
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


  return (
    <div className='main'>
      <Row className='header'>
        <Col span={9} offset={1}><p > TO DO LIST</p></Col>
        <Col span={2} offset={11} className='gear'><img src={gear} className={style} alt=''></img></Col>
      </Row>
      <Row  className='navListOfTodo'>
        <Col span={3} offset={1} className='logoTodo'>
          <img src={todo} alt=''></img>
        </Col>
        <Col span={10} offset={0} className='listOfTodo'>
          <p>LIST OF TODO</p>
        </Col>
        <Col span={2} offset={7} className='filterLogo'>
          <img src={filter} alt='' className={style}></img>
        </Col>       
      </Row>
      <Row>
        <TodoList />
      </Row>

      <div  className={style}>
        <div className='newTodo-btn'onClick={showDrawer}>
          <img src={addTodo} alt='' ></img>
        </div>
        <Drawer
        visible={isVisible}
        onClose={closeDrawer}
        placement="bottom"
        >        
        <hr/>
          <Input  className='input-newTodo' placeholder='Title' value={title} onChange={(e) => setName(e.target.value)}></Input>  
          <TextArea className='description' placeholder='Desciption' value={description} onChange={(e) => setDescription(e.target.value)}></TextArea>  
          <Space direction="vertical" className='div-datapicker' >
            <DatePicker 
            onChange={(Date) => setStartDate(Date)} 
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

          <Button className='add-todo-btn'onClick={saveTodo}>ADD TODO</Button>
        </Drawer>
      </div>

    </div>
  );
}

export default Home;
