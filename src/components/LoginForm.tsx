import React, { useState } from 'react'
import { loginFields } from '../constants/formFields'
import FormEntry from './FormEntry'
import { authenticateUser } from '../utils/data'
import { useNavigate } from 'react-router-dom'
import Toast from './Toast'

const LoginForm: React.FC = () => {
  const [loginState, setLoginState] = useState(Object.fromEntries(loginFields.map(field => [field.id, ''])))
  const [loginErr, setLoginErr] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    setLoginErr('')
    authenticateUser(loginState.username, loginState.password).then((res) => {
      if (res != null) {
        localStorage.setItem('user', JSON.stringify(res))
        navigate('/', { replace: true })
      } else {
        setLoginErr('Login Authentication Failed!')
      }
    }).catch(e =>
      setLoginErr(e.msg)
    )
  }

  return (
    <>
      {(loginErr.length !== 0) ? <Toast msg={loginErr} type="danger" setErrorMsg={setLoginErr}/> : <></>}
      <form className="mt-4 w-80" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
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
                placeholder={field.placeholder}
                showLabel={false}/>
            )
          }
        </div>

        <div className="flex items-center justify-between mt-4">
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
          className="mt-4 ring-1 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 border-none w-full py-2 px-4 border border-transparent text-sm text-black font-medium rounded-md text-black bg-slate-50 hover:bg-slate-200"
          onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    </>
  )
}

export default LoginForm
