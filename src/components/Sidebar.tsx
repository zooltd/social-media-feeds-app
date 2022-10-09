import React, {useEffect, useState} from 'react';
import {User} from "../constants/types";
import {Link} from "react-router-dom";

import logo from "../assets/logo.color.svg"
import {getFollowingUsers} from "../utils/data";
import StatusCard from "./StatusCard";
import Separator from "./Separator";

interface SidebarProps {
    user: User,
    closeToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({user, closeToggle}) => {
    const [followingUsers, setFollowingUsers] = useState<User[]>([]);
    const handleCloseSidebar = () => {
        closeToggle && closeToggle(false);
    };

    useEffect(() => {
        getFollowingUsers(user.id).then(users => setFollowingUsers(users));
    }, [user])

    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-275 hide-scrollbar">
            <div className="flex flex-col">
                <Link
                    to="/"
                    className="flex px-5 gap-2 my-6 pt-1 w-250 items-center"
                    onClick={handleCloseSidebar}
                >
                    <img src={logo} alt="logo" className="w-full"/>
                </Link>

            </div>

            <div className="flex flex-col">
                <StatusCard user={user} isOwner={true}/>
            </div>

            <Separator msg="Followings"/>

            <div className="flex flex-col space-y-5">
                {
                    followingUsers.map(user => <StatusCard user={user} key={user.id}/>)
                }
            </div>

            <Separator msg="Add Followings"/>

            <div
                className="flex flex-row space-x-4 items-center w-60 mb-3 mx-3 p-3 bg-gray-100 rounded-lg shadow-lg"
                onClick={handleCloseSidebar}>
                <input className="rounded-md ring-1 outline-none ring-gray-300 focus:ring-2 focus:ring-pink-400
                px-3 py-1 w-full" placeholder="username"/>
                <button type="button"
                        className="bg-pink-400 text-white font-bold p-1 rounded-full px-4 outline-none">
                    Add
                </button>
            </div>

            <br/>
        </div>
    );
};

export default Sidebar;
