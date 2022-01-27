import React from 'react';
import "../style/home.css";
import gear from '../img/icons8-gear-128.png';
import todo from '../img/todoLogo.png';
import addTodo from '../img/icons8-plus-+-150.png';
import filter from '../img/icons8-funnel-100.png';
import gallery from '../img/icons8-gallery-49.png';
import { Row, Col, Button, Input, Mentions  } from 'antd';
// import {Form, Input, Button, Image} from 'antd'
import { useState } from 'react';
import { Drawer  } from 'antd';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);}


  const closeDrawer = () => {
    setIsVisible(false);


  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className='main'>
      <Row className='header'>
        <Col span={9} offset={1}><p > TO DO LIST</p></Col>
        <Col span={2} offset={11} className='gear'><img src={gear} alt=''></img></Col>
      <div className='header'>

      </div>
      </Row>
      <Row  className='navListOfTodo'>
        <Col span={3} offset={1} className='logoTodo'>
          <img src={todo} alt=''></img>
        </Col>
        <Col span={10} offset={0} className='listOfTodo'>
          <p>LIST OF TODO</p>
        </Col>
        <Col span={2} offset={7} className='filterLogo'>
          <img src={filter} alt=''></img>
        </Col>

      </Row>
      
      <div  className='newTodo'>
        <div className='newTodo-btn'onClick={showDrawer}>
          <img src={addTodo} alt='' ></img>
        </div>
        <Drawer
        visible={isVisible}
        onClose={closeDrawer}
        placement="bottom"
        
        >
          
          <hr/>
          <Input className='input-newTodo' placeholder='Title'></Input>  
          <Mentions  className='description' placeholder='Desciption'></Mentions>  
          <Space direction="vertical" >
            <DatePicker onChange={onChange}
            placeholder={"Deadline (Optional)"}
            />
          </Space>

          <Upload  {...props} className='upload'>
            <Button icon={<UploadOutlined />} className='uploadbtn'>
              <p>Add Image (Optional)</p>
            <img src={gallery} alt="/" className="gallery"></img>
            </Button>
          </Upload>



          <Button className='add-todo-btn'>ADD TODO</Button>
      </Drawer>
      </div>

    </div>
  );
}

export default Home;
