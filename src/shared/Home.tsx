import React, {useEffect, useRef, useState} from 'react';
import {HiMenu} from "react-icons/hi";

import sidebar from "../components/Sidebar";
import profile from "../components/Profile"
import logo from "../assets/logo.color.svg"
import Sidebar from "../components/Sidebar";
import {Link, Route, Routes} from "react-router-dom";
import {AiFillCloseCircle, AiOutlineUser} from "react-icons/ai";
import {User} from "../constants/types";
import Profile from "../components/Profile";
import Pins from "./Pins";
import {defaultUser} from "../utils/data";

const Home = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState<User>(defaultUser);
    const scrollRef = useRef<HTMLDivElement>(null);

    const userInfo: User = JSON.parse(localStorage.getItem("user") ?? "{}");

    useEffect(() => {
        console.log(userInfo)
        if (Object.keys(userInfo).length && userInfo !== defaultUser) setUser(userInfo);
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <Sidebar user={user} closeToggle={setToggleSidebar}/>
            </div>

            <div className="flex md:hidden flex-row">
                <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">

                    <HiMenu fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-28"/>
                    </Link>
                    <Link to={`profile/${user.id}`}>
                        <img src={user.avatar} alt="user-pic" className="w-9 h-9 rounded-full "/>
                    </Link>
                </div>

                {toggleSidebar && (
                    <div className="fixed w-3/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                        <div className="absolute w-full flex justify-end items-center p-2">
                            <AiFillCloseCircle fontSize={30} className="cursor-pointer"
                                               onClick={() => setToggleSidebar(false)}/>
                        </div>
                        <Sidebar user={user} closeToggle={setToggleSidebar}/>
                    </div>
                )}

            </div>


            <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
                <Routes>
                    <Route path={"/profile/:userId"} element={<Profile/>}></Route>
                    <Route path={"/*"} element={<Pins user={user}/>}></Route>
                </Routes>
            </div>

        </div>
    );
};

export default Home;
