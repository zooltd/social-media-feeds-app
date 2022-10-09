import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';

import Spinner from './Spinner';
import {User} from "../constants/types";
import {defaultUser, getUsersByUserIds} from "../utils/data";
import video from "../assets/welcome.mp4"
import ProfileCard from "./ProfileCard";

interface profileProps {
    loginUser: User
}

const Profile: React.FC<profileProps> = ({loginUser}) => {
    const [user, setUser] = useState<User>(defaultUser);
    const [isOwner, setIsOwner] = useState(false);
    const {userId} = useParams();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userId === undefined) return;
        if (userId === defaultUser.id) return;
        setLoading(true);
        getUsersByUserIds([userId])
            .then(users => users[0])
            .then(user => {
                setUser(user);
                setIsOwner(loginUser.id === user.id)
                setLoading(false);
            });
    }, [userId, loginUser]);

    return (
        <>
            {
                loading ? (
                    <Spinner msg="Loading User Profile ..."/>
                ) : (
                    <div className="relative pb-2 h-full justify-center items-center">
                        <div className="flex flex-col">
                            <div className="relative flex flex-col mb-7">
                                <div className="flex flex-col justify-center items-center">
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
                                    <img className="rounded-full w-30 h-30 -mt-20 shadow-xl object-cover"
                                         src={user.avatar}
                                         alt="avatar"/>
                                </div>
                            </div>
                        </div>

                        {
                            isOwner &&
                            <div className="flex flex-col justify-center items-center">
                                <input type="file" className="text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                    file:text-sm file:font-semibold file:bg-pink-400 file:text-white hover:file:bg-rose-400"/>
                            </div>
                        }

                        <ProfileCard user={user} isOwner={isOwner}/>

                    </div>
                )
            }
        </>

    );
};

export default Profile;
