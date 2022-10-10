import React from 'react'
import { Post, User } from '../constants/types'
import Article from './Article'
import Masonry from 'react-masonry-css'

interface MasonryLayoutProps {
  pins: Post[]
  user: User
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ pins, user }) => {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
  }
  return (
    <Masonry className="flex animate-slide-fwd w-full mt-5" breakpointCols={breakpointColumnsObj}>
      {pins.map(pin => <Article key={pin.id} pin={pin} isOwner={user.id === pin.userId}/>)}
    </Masonry>
  )
}

export default MasonryLayout
