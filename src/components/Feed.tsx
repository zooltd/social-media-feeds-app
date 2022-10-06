import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Spinner from "./Spinner";
import MasonryLayout from "./MasonryLayout";
import {emptyPost, getFeedsByUser, getPostsByUserIds} from "../utils/data";
import {Post, User} from "../constants/types";
import {defaultUser} from "../utils/data";

interface FeedProps {
    user: User
}

const Feed: React.FC<FeedProps> = ({user}) => {
    const [loading, setLoading] = useState(true);
    const [pins, setPins] = useState<Post[]>([]);

    useEffect(() => {
        setLoading(true);
        console.log("Feed")
        if (user !== defaultUser) {
            getFeedsByUser(user).then(posts => setPins(posts));
        } else {
            setPins([emptyPost]);
        }
        setLoading(false);
    }, [user])

    if (loading)
        return <Spinner msg="loading"/>

    return (
        <div>
            {pins && <MasonryLayout pins={pins}/>}
        </div>
    );
};

export default Feed;
