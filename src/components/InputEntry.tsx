import React, { HTMLInputTypeAttribute } from 'react'

interface InputEntryProps {
  type: HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
  required?: boolean
  name?: string
  id?: string
  value?: string
  pattern?: string
}

const InputEntry: React.FC<InputEntryProps> = ({
  type,
  placeholder,
  className,
  handleChange,
  required,
  name,
  id,
  value,
  pattern
}) => {
  const fixedClass = 'rounded-md ring-1 outline-none ring-gray-300 focus:ring-2 focus:ring-pink-400 px-4 py-2 w-full'
  return (
    <input type={type}
           className={`${fixedClass} ${(className !== undefined) ? className : ''}`}
           placeholder={placeholder}
           onChange={handleChange}
           required={required}
           id={id}
           name={name}
           value={value}
           pattern={pattern}/>
  )
}

export default InputEntry
