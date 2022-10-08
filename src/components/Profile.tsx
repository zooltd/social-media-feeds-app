import React, {useEffect, useRef, useState} from 'react';
import {AiOutlineLogout} from 'react-icons/ai';
import {useParams, useNavigate} from 'react-router-dom';

import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import {Post, User} from "../constants/types";
import {getUsersByUserIds} from "../utils/data";
import UserForm from "./UserForm";
import video from "../assets/welcome.mp4"
import welcomeVideo from "../assets/welcome.mp4";
const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';

interface profileProps {
    loginUser: User
}

const Profile: React.FC<profileProps> = ({loginUser}) => {
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();
    const {userId} = useParams();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (userId === undefined) return;
        getUsersByUserIds([userId])
            .then(users => users[0])
            .then(user => setUser(user));
    }, [userId]);

    const logout = () => {
        localStorage.clear();

        navigate('/login');
    };

    if (!user) return <Spinner msg="Loading profile"/>;

    return (
        //src="https://source.unsplash.com/1600x900/?nature"
        <div className="relative pb-2 h-full justify-center items-center">
            <div className="flex flex-col pb-5">
                <div className="relative flex flex-col mb-7">
                    <div className="flex flex-col justify-center items-center">
                        {/*<img className=" w-full h-200 2xl:h-340 shadow-lg object-cover"*/}
                        {/*     src={video}*/}
                        {/*     alt="user-pic"/>*/}
                        <video
                            ref={videoRef}
                            src={video}
                            typeof="video/mp4"
                            loop
                            controls={false}
                            muted
                            autoPlay
                            className="w-full h-200 2xl:h-340 shadow-lg object-cover"
                            onCanPlay={() => {
                                videoRef.current && (videoRef.current.playbackRate = 0.1);
                            }}/>
                        <img className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
                             src={user.avatar}
                             alt="user-pic"/>
                    </div>
                    <h1 className="font-bold text-3xl text-center mt-3">
                        {user.username}
                    </h1>
                </div>
            </div>

            <UserForm user={user}/>

        </div>
    );
};

export default Profile;
