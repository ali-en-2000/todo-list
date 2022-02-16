import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import images
import battrey_img from './img/Battery Normal.png';
import Tower from './img/Tower.png';
import Network from './img/Network.png';

// Import style
import '../src/style/App.css';

// Import components
import EntranceGates from "./component/EntranceGates";
import Login from './component/Login';
import Signup from "./component/SignUp";
import ForgetPas from "./component/ForgetPas";
import Home from "./component/Home";
import Details from './component/Dtails';
import LogOut from "./component/LogOut";



function App() {
    return ( 
        <>
            <div className="General" >
                <p className="time">08:34</p>
                <div className="power">
                    <div >
                    <img src={Network} alt=""  ></img>
                    <img src={Tower} className='Tower' alt=""  ></img>
                    </div>
                    <div className="battrey">
                        <img src={battrey_img} alt="" ></img>
                    </div>
                </div>
            </div>
            <Router>
                <Routes>
                    <Route path={"/"}  element={<EntranceGates/>}/>
                    <Route path={"/Login"}   element={<Login/>}/>
                    <Route path={"/Home"}   element={<Home/>}/>
                    <Route path={"/SignUp"}   element={<Signup/>}/>
                    <Route path={"/Forgetpas"}   element={<ForgetPas/>}/>
                    <Route path={"/Details"}   element={<Details/>}/>
                    <Route path={"/LogOut"}   element={<LogOut/>}/>
                </Routes>
            </Router>
        </>
     );
     
}

 
export default App;