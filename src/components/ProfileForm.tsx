import React, { useRef, useState } from 'react'
import FormEntry from './FormEntry'
import { profileFields } from '../constants/formFields'
import { User } from '../constants/types'

interface ProfileFormProps {
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const ProfileForm: React.FC<ProfileFormProps> = ({ setUser }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [profileState, setProfileState] = useState(Object.fromEntries(profileFields.map(field => [field.id, ''])))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setProfileState({
    ...profileState,
    [e.target.id]: e.target.value
  })

  const handleReset = (): void => {
    setProfileState(Object.fromEntries(profileFields.map(field => [field.id, ''])))
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    setUser(prev => ({ ...prev, ...profileState }))
    handleReset()
  }

  return (
    <form className="flex flex-col space-y-4" ref={formRef} onReset={handleReset} onSubmit={handleSubmit}>
      {
        profileFields.map(({
          labelText,
          labelFor,
          id,
          name,
          type,
          isRequired,
          placeholder,
          pattern
        }) =>
          <FormEntry
            key={id}
            handleChange={handleChange}
            value={profileState[id]}
            labelText={labelText}
            labelFor={labelFor}
            id={id}
            name={name}
            type={type}
            isRequired={isRequired}
            placeholder={placeholder}
            showLabel={true}
            pattern={pattern}/>)
      }

      <div className="flex flex-row items-center justify-between">
        <input type="reset" id="reset" value="Reset"
               className="cursor-pointer bg-cyan-700 text-white font-bold p-2 rounded-md w-28 outline-none hover:bg-cyan-300">
        </input>
        <input type="submit" id="submit" value="Submit"
               className="cursor-pointer bg-pink-400 text-white font-bold p-2 rounded-md w-28 outline-none hover:bg-pink-300">
        </input>
      </div>

    </form>
  )
}

export default ProfileForm
