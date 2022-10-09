import React from 'react';
import {User} from "../constants/types";
import {Link, useNavigate} from "react-router-dom";
import {IoMdSearch} from "react-icons/io";
import {AiOutlineLogout} from "react-icons/ai";

interface NavbarProps {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    user: User
}

const Navbar: React.FC<NavbarProps> = ({searchQuery, setSearchQuery, user}) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/landing');
    }

    return (
        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
            <div
                className="ring-1 ring-white focus-within:ring-2 focus-within:ring-pink-400 flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none">
                <IoMdSearch fontSize={21} className="ml-1"/>
                <input
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    onFocus={() => navigate('/search')}
                    value={searchQuery}
                    className="p-2 w-full bg-white outline-none"
                />
            </div>
            <div className="flex gap-3 ">
                <Link to={`profile/${user.id}`} className="hidden md:block">
                    <img src={user.avatar} alt="user-pic" className="w-14 h-12 rounded-lg "/>
                </Link>
                <div
                    className="cursor-pointer bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center text-2xl"
                    onClick={logout}>
                    <AiOutlineLogout/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
