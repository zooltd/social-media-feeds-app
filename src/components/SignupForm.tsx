import React, {useState} from 'react';
import {signupFields} from "../constants/formFields"
import FormEntry from "./FormEntry";

const SignupForm = () => {
    const [signupState, setSignupState] = useState(Object.fromEntries(signupFields.map(field => [field.id, ""])));

    const handleChange = (e: { target: { id: any; value: any; }; }) => setSignupState({
        ...signupState,
        [e.target.id]: e.target.value
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        createAccount()
    }

    //handle SignupForm API Integration here
    const createAccount = () => {

    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    signupFields.map(field =>
                        <FormEntry
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}/>
                    )
                }

                <div className="w-80"/>

                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-black font-medium rounded-md text-black bg-slate-50 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onSubmit={handleSubmit}>
                    Sign Up
                </button>
            </div>


        </form>
    )
};

export default SignupForm;
