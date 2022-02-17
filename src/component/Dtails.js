import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment';
import { useState } from 'react';

// Related to ant design
import { Drawer,Button, Input, DatePicker, Space, Modal} from 'antd';
import { Row} from 'antd';
import { Tooltip } from 'antd';

// Import pictures
import trashBin from '../img/trash-bin.png'
import pencil from '../img/pencil.png'
import clock from '../img/icons8-clock-48.png'
import arow_left from '../img/left.png'
import gallery_icon from '../img/icons8-gallery-49.png';
import close_icon from '../img/close.png';

// import style
import '../style/Dtails.css'
const{TextArea }=Input




const ShowDtails = () => {
  const [style, setStyle] = useState("hidden"); 

  const navigate=useNavigate()
  const location = useLocation();

  // show or close drawer
  const [isVisible, setIsVisible] = useState(false);
  const showDrawer = () => {
    setStyle("show");
    setTimeout(function () {
      setIsVisible(true);
    },0);
  }
  const closeDrawer = () => {
    setIsVisible(false)
    setTimeout(function () {
      setStyle("hidden");
    },300);

  }

  //  modal function for delete Todo
  const { confirm } = Modal;
  
  function showConfirm() {
      setTimeout(() => {
      confirm({
        onOk() {  
        },
        onCancel() {
          ///   find index Todo from local storage
          var user=JSON.parse(localStorage.getItem('user'))
          const index = user.findIndex(object => {
            return object.Title === location.state.user.Title;
          });
          ///   delete Todo
          var myMovie = JSON.parse(localStorage.getItem("user"));
          myMovie.splice(index,1);
          localStorage.setItem("user",JSON.stringify(myMovie));
          navigate("/home")
        },
      });
    });
  }

  //  drawer and change value
  var Edited_User;
  const [Index, setIndex] = useState(location.state.user.Title);
  const [newTitle, setNewTitle] = useState(location.state.user.Title);
  const [newDescription, setNewDescription] = useState(location.state.user.Description);
  const [newDeadline, setNewDeadline] = useState(location.state.user.Date);
  const [newimage,setNewImag]=useState(location.state.user.Image)
  const [imgName, setImgName]=useState(location.state.user.ImgName)

  // change value of old Todo to new Todo
  Edited_User={
    Edited_Title:newTitle, 
    Edited_Description:newDescription, 
    Edited_Deadline:newDeadline,
    Edited_Image:newimage,
    Edited_Image_Name:imgName
  }


  // change Todo
  function getchangeValue(){
    ///   find index array
    var user=JSON.parse(localStorage.getItem('user'))
    const index = user.findIndex(users => {
      return users.Title === Index;
    });


    ///    check if add some things
    if(Edited_User.Edited_Title!=='' ){
      user[index].Title=Edited_User.Edited_Title;
      localStorage.setItem('user',JSON.stringify(user));
    }
    if(Edited_User.Edited_Description!==''){
      user[index].Description=Edited_User.Edited_Description; 
      localStorage.setItem('user',JSON.stringify(user))
    }
    if(Edited_User.Edited_Deadline!==''){
      user[index].Date=Edited_User.Edited_Deadline;
      localStorage.setItem('user',JSON.stringify(user))
    }
    if(Edited_User.Edited_Image!==''){
      user[index].Image=Edited_User.Edited_Image;
      user[index].ImgName=Edited_User.Edited_Image_Name;
      localStorage.setItem('user',JSON.stringify(user))
    }
    ///    Check if the fields are completely empty
    if(Edited_User.Edited_Title===''){
      user[index].Title=Edited_User.Edited_Title;
      localStorage.setItem('user',JSON.stringify(user));
    }
    if(Edited_User.Edited_Description===''){
      user[index].Description=Edited_User.Edited_Description; 
      localStorage.setItem('user',JSON.stringify(user))
    }
    if(Edited_User.Edited_Deadline===null){
      user[index].Date='';
      localStorage.setItem('user',JSON.stringify(user))
    }
    if(Edited_User.Edited_Image===''){
      user[index].Image='';
      user[index].ImgName='';
      
      localStorage.setItem('user',JSON.stringify(user))
    }
    setIndex(Edited_User.Edited_Title)
    closeDrawer()
  }

  //  change image
  const changeImage=(e)=>{
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach(e => {
      setImgName(e.name)
    });

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
      setNewImag(base64)
    }) 
  }
  function hiddenNameImage(){
    setImgName('')
    setNewImag('')
  }


    return ( 
        
        <div className='main-div-detail-page'>

            <Row className='head-div'>
               <div>
                   <img alt='' className='arrow_left' src={arow_left} onClick={()=>{navigate("/home")}}/>
               </div>
               <div >
                    <Tooltip 
                    placement="bottom" 
                    color={'#F79E89'}
                    title={location.state.user.Date===''?'':Moment(location.state.user.Date).format('DD MMM YYYY')}
                    >
                      <img 
                        alt='' 
                        src={clock} 
                        className={location.state.user.Date===''?'opacity_half':'opacity_one'}/>
                    </Tooltip>
                    <img 
                      alt='' 
                      src={pencil}
                      onClick={showDrawer}
                    />

                    <img 
                      alt='' 
                      src={trashBin}
                      onClick={showConfirm}
                    />


               </div>

          </Row>
          <div className='content'>
              <Row className='Title-Todo-div'>
                {Edited_User.Edited_Title}
              </Row>
              <Row className='description-Todo-div'>
                {Edited_User.Edited_Description}
              </Row>
              <Row className='imag-Todo-div'>
              <img
                alt=''
                src={Edited_User.Edited_Image}                
                />
              </Row>
              <Row className='date-Todo-div'>
                  {Moment(location.state.user.Date_create).format('DD MMM YYYY')}
              </Row>
          </div>


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
              defaultValue={Edited_User.Edited_Title}
              onChange={(e) => setNewTitle(e.target.value)}
            ></Input> 
            
            <TextArea 
              placeholder='Description'
              className='description' 
              defaultValue={location.state.user.Description}
              onChange={(e) => setNewDescription(e.target.value)}
            ></TextArea>  

            <Space direction="vertical" className='div-datapicker' >
            <DatePicker 
              onChange={(Date) => setNewDeadline(Date)} 
              placeholder='Deadline (optional)' 
              defaultValue={location.state.user.Date===''?"":Moment(location.state.user.Date)}
              format={'DD MMMM YYYY'}
              />
            </Space>

            <button className='add-img-btn'>
              <input 
                className="add-img" 
                onChange={(newImage)=>changeImage(newImage)}
                type="file" 
                id='file'
                />                
                <label className="label" htmlFor="file">
                    {Edited_User.Edited_Image_Name ===''?'Add Image (Optional)':Edited_User.Edited_Image_Name}
                </label>
                <img 
                  src={imgName===''? gallery_icon:close_icon} 
                  alt="/" 
                  className="gallery"
                  onClick={()=>hiddenNameImage()}
                ></img>
            </button>

            <Button className='add-todo-btn' onClick={()=>getchangeValue()}>ADD TODO</Button>
          </Drawer>
      
    </div>
        
     );
}
 
export default ShowDtails;
