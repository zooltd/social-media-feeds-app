import React from 'react';
import {Post} from "../constants/types";
import {Link} from "react-router-dom";

interface PinProps {
    pin: Post,
    isOwner?: boolean
}

const Pin: React.FC<PinProps> = ({pin: {id, body, image, user}, isOwner}) => {

    return (
        <div className="m-2 shadow-md p-3 rounded-md bg-white">
            <div onClick={() => {}}
                 className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
                {image && <img className="rounded-lg w-full " src={image} alt="user-post"/>}
            </div>

            <div className="flex gap-2 mt-2 ml-1 mr-1">
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

            <div className="flex flex-col space-y-2 mt-2">
                <button type="button"
                        className="bg-cyan-700 text-white font-bold rounded-md mt-2 relative w-full flex justify-center py-2 px-4 hover:bg-cyan-300">
                    Comment
                </button>
                {
                    isOwner &&
                    <button type="button"
                            className="bg-pink-400 text-white font-bold rounded-md mt-2 relative w-full flex justify-center py-2 px-4 hover:bg-pink-300">
                        Edit
                    </button>
                }
            </div>
        </div>
    );
};

export default Pin;
