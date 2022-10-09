import React from 'react';
import Spinner from "./Spinner";
import {Post, User} from "../constants/types";
import CreatePin from "./CreatePin";
import MasonryLayout from "./MasonryLayout";

interface FeedProps {
    user: User
    pins: Post[]
    loading: boolean
}

const Feed: React.FC<FeedProps> = ({user, pins, loading}) => {
    return (
        loading ? (
            <Spinner msg="loading"/>
        ) : (
            <>
                <CreatePin/>
                <MasonryLayout pins={pins} user={user}/>
            </>
        )
    );
};

export default Feed;
