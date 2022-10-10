import React, { useEffect, useState } from 'react'
import { Post, User } from '../constants/types'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import Search from '../components/Search'
import { getPostsByUserIds } from '../utils/data'

interface MainProps {
  user: User
  followingUserIds: string[]
}

const Main: React.FC<MainProps> = ({ user, followingUserIds }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [pins, setPins] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPostsByUserIds(followingUserIds)
      .then(posts => posts.sort((lhs, rhs) => rhs.timestamp - lhs.timestamp))
      .then(posts => {
        setPins(posts)
        setLoading(false)
      }).catch(e => console.log(e.msg))
  }, [followingUserIds]
  )

  return (
    <div className="px-2 md:px-5">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} user={user}/>

      <Routes>
        <Route path="/" element={<Feed user={user} pins={pins} setPins={setPins} loading={loading}
                                       setLoading={setLoading}/>}/>
        <Route path="/search"
               element={<Search searchQuery={searchQuery} user={user} pins={pins} loading={loading}
                                setLoading={setLoading}/>}/>
      </Routes>

    </div>
  )
}

export default Main
