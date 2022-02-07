import React from "react";
import battrey_img from './img/icons8-low-battery-48.png';

import '../src/style/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./component/SignUp";
import Log from './component/Login';
import ForgetPas from "./component/ForgetPas";
import Home from "./component/Home";
import Dtails from './component/Dtails';




function App() {
    return ( 
        <div>
            <div className="General" >
                <p span={3} offset={1}>08:34</p>
                <div className="power">
                    <p span={1} offset={13}>4G </p>
                    <p span={3} offset={0} className="battrey">
                        <img src={battrey_img} alt="" ></img>
                    </p>
                </div>
            </div>
            <Router>
                <Routes>
                    <Route path={"/"}   element={<Log/>}/>
                    <Route path={"/Home"}   element={<Home/>}/>
                    <Route path={"/SignUp"}   element={<Signup/>}/>
                    <Route path={"/Forgetpas"}   element={<ForgetPas/>}/>
                    <Route path={"/Dtails"}   element={<Dtails/>}/>
                </Routes>
            </Router>
        </div>
     );
     
}

 
export default App;