import React, {useState} from 'react';
import {User} from "../constants/types";
import {MdEdit} from "react-icons/md";

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
        //bg-[#20354b]
        <div className="flex items-center justify-center font-medium">
            <div className="mx-auto w-64 rounded-2xl bg-slate-200 px-8 py-6 shadow-lg">
                <div className="mx-auto w-fit">
                    <img src={user.avatar}
                         className="w-28 rounded-full" alt="profile picture" srcSet=""/>
                </div>

                <div className="mt-4">
                    <h2 className="text-2xl font-bold tracking-wide text-indigo-700">
                        {user.username} {isOwner ? "(Myself)" : ""}
                    </h2>
                </div>

                {!showEdit && <p className="mt-2.5 font-semibold text-cool-gray-700">
                    {user.status}
                </p>}

                {/*<div className="mt-8 h-1 w-full rounded-full bg-black">*/}
                {/*    <div className="h-1 w-2/5 rounded-full bg-yellow-500"></div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 text-sm text-white">*/}
                {/*    <span className="font-semibold text-gray-400">Storage:</span>*/}
                {/*    <span>40%</span>*/}
                {/*</div>*/}

                {
                    isOwner &&
                    (showEdit ?
                        (<div className="flex flex-col justify-center mt-3">
                            <div>
                                 <textarea placeholder="New Status" rows={2}
                                           className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="bg-gray-500 text-white font-bold p-2 rounded-full w-20 outline-none"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    onClick={saveEdit}
                                    className="bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none"
                                >
                                    Save
                                </button>
                            </div>
                        </div>) :
                        <MdEdit className="text-indigo-700 cursor-pointer mt-3" onClick={() => setShowEdit(true)}/>)
                }

            </div>
        </div>

    );
};

export default StatusCard;
