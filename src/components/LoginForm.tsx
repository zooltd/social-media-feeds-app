import React, {useState} from 'react';
import {loginFields} from "../constants/formFields";
import FormEntry from "./FormEntry";
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
        authenticateUser(loginState["email"], loginState["password"]).then(res => res).then((res) => {
            localStorage.setItem('user', JSON.stringify(res));
            navigate('/', {replace: true});
        });
    }

    return (
        <form className="mt-4 space-y-4 w-80" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    loginFields.map(field =>
                        <FormEntry
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}/>
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

            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-black font-medium rounded-md text-black bg-slate-50 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onSubmit={handleSubmit}>
                Login
            </button>
        </form>
    )
}

export default LoginForm;
