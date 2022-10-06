import React, {useState} from 'react';
import {loginFields} from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import {User} from "../constants/types";
import {authenticateUser} from "../utils/data";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [loginState, setLoginState] = useState(Object.fromEntries(loginFields.map(field => [field.id, ""])));
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({...loginState, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        authenticate();
    }

    const Signup = () => {

    }

    //Handle LoginForm API Integration here
    const authenticate = async () => {
        const res = await authenticateUser(loginState["email"], loginState["password"]);
        if (res) {
            localStorage.setItem('user', JSON.stringify(res));
            navigate('/', { replace: true });
        } else {

        }
    }

    return (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    loginFields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
            </div>

            <div className="flex items-center justify-between ">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                        Remember me
                    </label>
                </div>

            </div>

            <div className="w-80"/>


            <FormAction handleSubmit={handleSubmit} type='Button' action='submit' text="Login"/>
            {/*<FormAction handleSubmit={Signup} type='Button' action='submit' text="Signup"/>*/}

            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="/signup" className="text-xs text-slate-50 uppercase">or sign up</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>

        </form>
    )
}

export default LoginForm;
