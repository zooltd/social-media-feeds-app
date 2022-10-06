import React from 'react';
import {Post} from "../constants/types";
import Masonry from 'react-masonry-css';
import Pin from "./Pin"

interface MasonryLayoutProps {
    pins: Post[]
}

const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
};
const MasonryLayout: React.FC<MasonryLayoutProps> = ({pins}) => {
    return (
        <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
            {pins.map((pin) => <Pin key={pin.id} pin={pin} className="w-max"/>)}
        </Masonry>
    );
};

export default MasonryLayout;
