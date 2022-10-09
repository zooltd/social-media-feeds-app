import React, {useState} from 'react';
import {User} from "../constants/types";
import {MdEdit} from "react-icons/md";
import {Link} from "react-router-dom";

interface StatusCardProps {
    user: User
    isOwner?: boolean
}

const StatusCard: React.FC<StatusCardProps> = ({user, isOwner}) => {

    const [showEdit, setShowEdit] = useState(false);

    const cancelEdit = () => {
        setShowEdit(false);

    }

    const saveEdit = () => {
    }

    return (
        <div className="flex items-center justify-center font-medium">
            <div className="mx-auto w-60 rounded-2xl bg-gray-100 px-6 py-4 shadow-xl">
                <Link to={`profile/${user.id}`}>
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
                    isOwner &&
                    (showEdit ?
                            (<div className="flex flex-col justify-center mt-3">
                                <div>
                                 <textarea placeholder="New Status" rows={2}
                                           className="rounded-md ring-1 outline-none ring-gray-300 focus:ring-2 focus:ring-pink-400
                                           w-full px-3 py-1.5 text-gray-700 bg-gray-50 bg-clip-padding transition ease-in-out"/>
                                </div>
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
                            </div>) :
                            (
                                <div className="flex flex-row space-x-1 items-center mt-3 cursor-pointer"
                                     onClick={() => setShowEdit(true)}>
                                    <MdEdit/>
                                    <span className="text-sm">Edit Status</span>
                                </div>
                            )
                    )
                }

            </div>
        </div>

    );
};

export default StatusCard;
