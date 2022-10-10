import React, { useState } from 'react'
import { User } from '../constants/types'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.color.svg'
import { CreateUser } from '../utils/data'
import Separator from './Separator'
import InputEntry from './InputEntry'
import StatusCard from './StatusCard'

interface SidebarProps {
  user: User
  closeToggle: React.Dispatch<React.SetStateAction<boolean>>
  followingUserIds: string[]
  setFollowingUserIds: React.Dispatch<React.SetStateAction<string[]>>
}

const Sidebar: React.FC<SidebarProps> = ({ user, closeToggle, followingUserIds, setFollowingUserIds }) => {
  const [username, setUsername] = useState('')

  const handleCloseSidebar = (): void => {
    closeToggle(false)
  }

  const addFollowing = (): void => {
    setUsername('')
    CreateUser(username, 'Unknown Email').then(user => {
      setFollowingUserIds(prev => [user.id, ...prev])
      localStorage.setItem(user.id, JSON.stringify(user))
    }).catch(e => console.error(e.msg))
  }

  return (
    <div
      className="flex flex-col items-center  bg-white h-full overflow-y-scroll min-w-275 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-250 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full"/>
        </Link>

      </div>

      <div className="flex flex-col">
        <StatusCard userId={user.id} key={user.id} setFollowingUserIds={setFollowingUserIds} isOwner={true}/>
      </div>

      <div className="w-4/5">
        <Separator msg="Followings"/>
      </div>

      <div className="flex flex-col space-y-5">
        {
          followingUserIds.map(userId => <StatusCard userId={userId} key={userId}
                                                     setFollowingUserIds={setFollowingUserIds} isOwner={false}/>)
        }
      </div>

      <div className="w-4/5">
        <Separator msg="Add Followings"/>
      </div>

      <div
        className="flex flex-row space-x-4 items-center w-60 mb-3 mx-3 p-3 bg-gray-100 rounded-lg shadow-lg"
        onClick={handleCloseSidebar}>

        <InputEntry type="text" placeholder="username" value={username}
                    handleChange={e => setUsername(e.target.value)}/>

        <button type="button"
                className="bg-pink-400 text-white font-bold p-1 rounded-md px-4 py-2 outline-none"
                onClick={() => addFollowing()}>
          Add
        </button>
      </div>

      <br/>
    </div>
  )
}

export default Sidebar
