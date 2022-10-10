import React, { useState } from 'react'
import { signupFields } from '../constants/formFields'
import FormEntry from './FormEntry'
import { CreateUser } from '../utils/data'
import { useNavigate } from 'react-router-dom'
import Toast from './Toast'

const SignupForm: React.FC = () => {
  const [signupState, setSignupState] = useState(Object.fromEntries(signupFields.map(field => [field.id, ''])))
  const navigate = useNavigate()
  const [signupErr, setSignupErr] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSignupState({
    ...signupState,
    [e.target.id]: e.target.value
  })

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    setSignupErr('')
    if (signupState.password !== signupState['confirm-password']) {
      setSignupErr("Passwords Don't Match.")
      return
    }

    CreateUser(signupState.username, signupState.email).then(user => {
      const userInfo = { ...user, ...signupState }
      localStorage.setItem('user', JSON.stringify(userInfo))
      localStorage.setItem(user.id, JSON.stringify(userInfo))
      navigate('/', { replace: true })
    }).catch(e => console.error(e))
  }

  return (
    <>
      {(signupErr.length !== 0) ? <Toast msg={signupErr} type="danger" setErrorMsg={setSignupErr}/> : <></>}
      <form className="mt-4 w-80" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
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
                placeholder={field.placeholder}
                showLabel={false}
                pattern={field.pattern}/>
            )
          }
        </div>

        <button
          type="submit"
          className="mt-6 ring-1 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 border-none w-full py-2 px-4 border border-transparent text-sm text-black font-medium rounded-md text-black bg-slate-50 hover:bg-slate-200"
          onSubmit={handleSubmit}>
          Sign Up
        </button>
      </form>
    </>
  )
}

export default SignupForm
