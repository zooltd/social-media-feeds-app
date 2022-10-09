import React, {useEffect, useState} from 'react';
import {Post, User} from "../constants/types";
import {Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Search from "../components/Search";
import {defaultUser, getFeedsByUser} from "../utils/data";

interface PinsProps {
    user: User
}

const Main: React.FC<PinsProps> = ({user}) => {
        const [searchQuery, setSearchQuery] = useState("");
        const [pins, setPins] = useState<Post[]>([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
                if (user.id === defaultUser.id) return;
                setLoading(true);
                getFeedsByUser(user).then(posts => {
                    posts && posts.length && setPins(posts);
                    setLoading(false);
                });
            }, [user]
        );

        return (
            <div className="px-2 md:px-5">
                <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} user={user}/>

                <Routes>
                    <Route path="/" element={<Feed user={user} pins={pins} loading={loading}/>}/>
                    <Route path="/search"
                           element={<Search searchQuery={searchQuery} user={user} pins={pins} loading={loading}
                                            setLoading={setLoading}/>}/>
                </Routes>

            </div>
        );
    }
;

export default Main;
