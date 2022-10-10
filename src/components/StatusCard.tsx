import React, { useEffect, useState } from 'react'
import { defaultUser, getUserByUserId } from '../utils/data'
import { User } from '../constants/types'
import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'
import { RiUserUnfollowFill } from 'react-icons/ri'

interface StatusCard2Props {
  userId: string
  setFollowingUserIds: React.Dispatch<React.SetStateAction<string[]>>
  isOwner: boolean
}

const StatusCard: React.FC<StatusCard2Props> = ({ userId, setFollowingUserIds, isOwner }) => {
  const [user, setUser] = useState<User>(defaultUser)
  const [showEdit, setShowEdit] = useState(false)
  const [statusBody, setStatusBody] = useState('')

  const cancelEdit = (): void => {
    setStatusBody('')
    setShowEdit(false)
  }

  const saveEdit = (): void => {
    user.status = statusBody
    cancelEdit()
  }

  const unfollow = (): void => {
    setFollowingUserIds(prev => prev.filter(id => id !== userId))
  }

  useEffect(() => {
    getUserByUserId(userId).then(user => setUser(user)).catch(e => console.log(e.msg))
  }, [userId])

  return (
    <div className="flex items-center justify-center font-medium">
      <div className="mx-auto w-60 rounded-2xl bg-gray-100 px-6 py-4 shadow-xl">
        <Link to={`profile/${userId}`}>
          <div className="mx-auto w-fit">
            <img src={user.avatar}
                 className="w-28 rounded-full" alt="user avatar"/>
          </div>
        </Link>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-cyan-700">
            {user.username}
          </h2>
        </div>

        {!showEdit && <p className="mt-2.5 font-semibold text-pink-400">
          {user.status}
        </p>}

        {
          isOwner
            ? (
                showEdit
                  ? (
                  <div className="flex flex-col justify-center mt-3">
                                 <textarea placeholder="New Status" rows={2}
                                           value={statusBody}
                                           onChange={(e) => setStatusBody(e.target.value)}
                                           className="rounded-md ring-1 outline-none ring-gray-300 focus:ring-2 focus:ring-pink-400 w-full px-3 py-1.5 text-gray-700 bg-gray-50 bg-clip-padding transition ease-in-out"/>
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="bg-cyan-700 text-white font-bold p-2 rounded-full w-20 outline-none hover:bg-cyan-300"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={saveEdit}
                        className="bg-pink-400 text-white font-bold p-2 rounded-full w-20 outline-none hover:bg-pink-300"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                    )
                  : (
                  <div
                    className="flex flex-row space-x-1 items-center mt-3 cursor-pointer items-center justify-start"
                    onClick={() => setShowEdit(true)}>
                    <MdEdit/>
                    <span className="text-sm">Edit Status</span>
                  </div>
                    )
              )
            : (
              <div
                className="flex flex-row space-x-1 items-center mt-3 cursor-pointer items-center justify-start"
                onClick={() => unfollow()}>
                <RiUserUnfollowFill/>
                <span className="text-sm">Unfollow</span>
              </div>
              )
        }
      </div>
    </div>
  )
}

export default StatusCard
