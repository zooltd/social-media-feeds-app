import React, {useState} from 'react';
import {Post, User} from "../constants/types";
import {AiTwotoneDelete} from "react-icons/all";
import {Link, useNavigate} from "react-router-dom";
import {defaultUser} from "../utils/data";

interface PinProps {
    pin: Post,
    className?: string
}

const Pin: React.FC<PinProps> = ({pin: {id, title, body, image, user}, className}) => {
    const navigate = useNavigate();

    return (
        <div className="m-2 shadow-md p-3">
            <div onClick={() => navigate(`/pin-detail/${id}`)}
                 className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
                {image && <img className="rounded-lg w-full " src={image} alt="user-post"/>}
            </div>

            <div className="capitalize font-bold text-xl">
                {title}
            </div>

            <div className="flex gap-2 mt-2 ">
                {body}
            </div>

            <Link to={`/profile/${user.id}`} className="flex gap-2 mt-4 items-center">
                <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={user.avatar}
                    alt="user-profile"
                />
                <p className="font-medium capitalize text-slate-500">{user.username}</p>
            </Link>
        </div>
    );
};

export default Pin;
