import React from 'react';

const UserCard = ({}) => {
    return (
        <div className="flex h-screen items-center justify-center bg-[#071e34] font-medium">
            <div className="mx-auto w-64 rounded-2xl bg-[#20354b] px-8 py-6 shadow-lg">

                <div className="mx-auto mt-6 w-fit">
                    <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                         className="w-28 rounded-full" alt="profile picture" srcSet=""/>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold tracking-wide text-white">
                        Jonathan <br/>
                        Smith
                    </h2>
                </div>
                <p className="mt-2.5 font-semibold text-emerald-400">Active</p>

                <div className="mt-8 h-1 w-full rounded-full bg-black">
                    <div className="h-1 w-2/5 rounded-full bg-yellow-500"></div>
                </div>
                <div className="mt-3 text-sm text-white">
                    <span className="font-semibold text-gray-400">Storage:</span>
                    <span>40%</span>
                </div>
            </div>
        </div>

    );
};

export default UserCard;
