import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"
import Welcome from "./components/Welcome";
import Home from "./shared/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
    );
}

export default App;
