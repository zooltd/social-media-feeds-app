import React from 'react';
import {User} from "../constants/types";
import {MdOutlineEmail, MdAlternateEmail, MdLocationPin, MdOutlineLocationOn, MdOutlinePhone} from "react-icons/md";
import {AiOutlineMail, AiOutlinePhone, AiOutlineUser} from "react-icons/ai";
import {TbMoodHappy} from "react-icons/tb";

interface UserFormProps {
    user: User
}

const UserForm: React.FC<UserFormProps> = ({user: {id, avatar, username, status, email, phone, zipcode}}) => {
    return (
        <div className="m-2 flex flex-col justify-center items-center lg:h-4/5 ">
            <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 w-full shadow-md">
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-3xl tracking-wide">Current Info</h1>

                        <div className="shrink-0 mt-5">
                            <img className="h-20 w-20 object-cover rounded-full"
                                 src={avatar} alt="Current profile photo"/>
                        </div>
                        <div className="block pt-2">
                            <span className="sr-only t-2">Choose profile photo</span>
                            <input type="file" className="w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-pink-300 file:text-zinc-900
      hover:file:bg-rose-300
    "/>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-3 text-xl">
                                <AiOutlineUser/>
                                <span>{username}</span>
                            </div>

                            <div className="flex items-center gap-3 text-xl">
                                <AiOutlineMail/>
                                <span>{email}</span>
                            </div>

                            <div className="flex items-center gap-3 text-xl">
                                <MdOutlinePhone/>
                                <span>{phone}</span>
                            </div>

                            <div className="flex items-center gap-3 text-xl">
                                <MdOutlineLocationOn/>
                                <span>{zipcode}</span>
                            </div>

                            <div className="flex items-center gap-3 text-xl">
                                <TbMoodHappy/>
                                <span>{status}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
