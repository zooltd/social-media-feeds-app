import React from 'react';
import {Post, User} from "../constants/types";
import Pin from "./Pin";
import Masonry from "react-masonry-css";

interface MasonryLayoutProps {
    pins: Post[]
    user: User
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({pins, user}) => {
    const breakpointColumnsObj = {
        default: 4,
        3000: 6,
        2000: 5,
        1200: 3,
        1000: 2,
        500: 1,
    };
    return (
        <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
            {pins.map(pin => <Pin key={pin.id} pin={pin} isOwner={user.id === pin.userId}/>)}
        </Masonry>
    )
};

export default MasonryLayout;
