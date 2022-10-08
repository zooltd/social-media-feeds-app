import React, {useEffect, useState} from 'react';
import {User} from "../constants/types";
import {Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import PinDetail from "../components/PinDetail";
import CreatePin from "../components/CreatePin";
import Search from "../components/Search";

interface Pins {
    user: User
}

const Pins: React.FC<Pins> = ({user}) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} user={user}/>
            </div>

            <div className="h-full">
                <Routes>
                    <Route path="/" element={<Feed user={user}/>}/>
                    <Route path="/pin-detail/:pinId" element={<PinDetail user={user}/>}/>
                    <Route path="/search" element={<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default Pins;
