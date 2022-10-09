import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"
import Home from "./shared/Home";
import {User} from "./constants/types";
import {defaultUser} from "./utils/data";
import Landing from "./components/Landing";

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo: User = JSON.parse(localStorage.getItem("user") ?? "{}");
        if (Object.keys(userInfo).length && userInfo.id !== defaultUser.id) {
            // auth?
        } else {
            localStorage.clear();
            navigate("/landing");
        }
    }, []);

    return (
        <Routes>
            <Route path="landing" element={<Landing/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
    );
}

export default App;
