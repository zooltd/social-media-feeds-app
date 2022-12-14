import React, { useEffect, useRef, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import logo from '../assets/logo.color.svg'
import Sidebar from '../components/Sidebar'
import { Link, Route, Routes } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import { User } from '../constants/types'
import Profile from '../components/Profile'
import Main from './Main'
import { defaultUser, getFollowingUserIds } from '../utils/data'

const Home: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [user, setUser] = useState<User>(defaultUser)
  const [followingUserIds, setFollowingUserIds] = useState<string[]>([])

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const userInfo: User = JSON.parse(localStorage.getItem('user') ?? '{}')
    setUser(userInfo)
    scrollRef.current?.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    getFollowingUserIds(user.id).then(ids => setFollowingUserIds(ids)).catch(e => console.error(e))
  }, [user])

  return (
    <div className="flex bg-gray-100 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user} closeToggle={setToggleSidebar} followingUserIds={followingUserIds}
                 setFollowingUserIds={setFollowingUserIds}/>
      </div>

      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
          <Link to="/">
            <img src={logo} alt="logo" className="w-28"/>
          </Link>
          <Link to={`profile/${user.id}`}>
            <img src={user.avatar} alt="user-pic" className="w-9 h-9 rounded-full "/>
          </Link>
        </div>

        {toggleSidebar && (
          <div className="fixed w-3/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer"
                                 onClick={() => setToggleSidebar(false)}/>
            </div>
            <Sidebar user={user} closeToggle={setToggleSidebar} followingUserIds={followingUserIds}
                     setFollowingUserIds={setFollowingUserIds}/>
          </div>
        )}

      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path={'/profile/:userId'} element={<Profile loginUser={user}/>}/>
          <Route path={'/*'} element={<Main user={user} followingUserIds={followingUserIds}/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default Home
