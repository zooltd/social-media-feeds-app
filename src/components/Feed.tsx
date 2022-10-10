import React from 'react'
import Spinner from './Spinner'
import { Post, User } from '../constants/types'
import CreateArticle from './CreateArticle'
import MasonryLayout from './MasonryLayout'
import Separator from './Separator'

interface FeedProps {
  user: User
  pins: Post[]
  setPins: React.Dispatch<React.SetStateAction<Post[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Feed: React.FC<FeedProps> = ({ user, pins, setPins, loading, setLoading }) => {
  return (
    loading
      ? (
        <Spinner msg="loading"/>
        )
      : (
        <div className="flex flex-col justify-center items-center">
          <CreateArticle user={user} setPins={setPins} setLoading={setLoading}/>
          <MasonryLayout pins={pins} user={user}/>
          <div className="w-4/5">
            <Separator msg="To The End"/>
          </div>
        </div>
        )
  )
}

export default Feed
