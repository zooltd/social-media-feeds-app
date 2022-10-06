import React, {useState} from 'react';
import {loginFields, signupFields} from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const SignupForm = () => {
    const [signupState, setSignupState] = useState(Object.fromEntries(signupFields.map(field => [field.id, ""])));

    const handleChange = (e: { target: { id: any; value: any; }; }) => setSignupState({
        ...signupState,
        [e.target.id]: e.target.value
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(signupState)
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
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            customClass=""/>
                    )
                }

                <div className="w-80"/>

                <FormAction handleSubmit={handleSubmit} text="Signup" action='submit' type='Button'/>

                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href="/login" className="text-xs text-slate-50 uppercase">or login</a>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>

            </div>


        </form>
    )
};

export default SignupForm;
