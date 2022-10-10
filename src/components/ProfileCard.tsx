import React from 'react'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md'
import ProfileForm from './ProfileForm'
import { User } from '../constants/types'

interface ProfileCardProps {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  isOwner: boolean
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, setUser, isOwner }) => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div
        className="flex flex-col justify-center lg:items-center lg:flex-row lg:space-x-10 rounded-2xl px-6 py-4 shadow-lg bg-cyan-700 text-white">
        <div className="flex flex-col space-y-6 lg:space-y-8 p-5 text-center ">
          <div className="flex items-center gap-3 text-xl">
            <AiOutlineUser/>
            <span>{user.username}</span>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <AiOutlineMail/>
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <MdOutlinePhone/>
            <span>{user.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <MdOutlineLocationOn/>
            <span>{user.zipcode}</span>
          </div>

        </div>

        {
          isOwner &&
          <div className="bg-white rounded-xl shadow-lg p-8 text-black">
            <ProfileForm setUser={setUser}/>
          </div>
        }
      </div>
    </div>
  )
}

export default ProfileCard
