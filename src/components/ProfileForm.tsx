import React, {useRef} from 'react';

const ProfileForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form className="flex flex-col space-y-4" ref={formRef}>
            <div>
                <label className="text-sm">Your Name</label>
                <input type="text" placeholder="Your name"
                       className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                                               focus:ring-2 focus:ring-teal-300">
                </input>
            </div>
            <div>
                <label className="text-sm">Email Address</label>
                <input type="email" placeholder="Email Address"
                       className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                                               focus:ring-2 focus:ring-teal-300">
                </input>
            </div>
            <div>
                <label className="text-sm">Phone Number</label>
                <input type="tel" placeholder="Phone Number"
                       className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                                               focus:ring-2 focus:ring-teal-300">
                </input>
            </div>
            <div>
                <label className="text-sm">ZIP code</label>
                <input type="text" placeholder="ZIP code"
                       className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                                               focus:ring-2 focus:ring-teal-300">
                </input>
            </div>
            <div>
                <label className="text-sm">New Password</label>
                <input type="password" placeholder="New Password"
                       className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                                               focus:ring-2 focus:ring-teal-300">
                </input>
            </div>

            <div className="flex flex-row items-center justify-between">
                <input
                    type="reset"
                    className="inline-block cursor-pointer bg-cyan-700 text-white font-bold rounded-lg w-28 h-10 uppercase text-sm">
                </input>
                <input
                    type="submit"
                    className="inline-block cursor-pointer bg-pink-400 text-white font-bold rounded-lg w-28 h-10 uppercase text-sm">
                </input>
            </div>

        </form>
    );
};

export default ProfileForm;
