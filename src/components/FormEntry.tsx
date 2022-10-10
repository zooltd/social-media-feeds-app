import React from 'react'
import InputEntry from './InputEntry'

interface FormEntryProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  labelText: string
  labelFor: string
  id: string
  name: string
  type: string
  isRequired: boolean
  placeholder: string
  value: string
  showLabel: boolean
  pattern?: string
}

const FormEntry: React.FC<FormEntryProps> = ({
  handleChange,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  value,
  showLabel,
  pattern
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={labelFor} className={showLabel ? '' : 'sr-only'}>
        {labelText}
      </label>
      <InputEntry handleChange={handleChange} placeholder={placeholder} type={type} id={id} name={name}
                  required={isRequired} value={value} pattern={pattern}/>
    </div>
  )
}

export default FormEntry
