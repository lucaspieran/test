/* eslint-disable no-unused-vars */
import React, { ChangeEvent } from 'react'

interface Props {
  label?: string
  name?: string
  value: string
  onChange: (name: string, value: string) => void
  required?: boolean
  isSubmitted?: boolean
}

const Input: React.FC<Props> = ({ label, name, value, onChange, required, isSubmitted }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name ?? '', event.target.value)
  }

  const isInvalid = required && isSubmitted && value.trim() === ''

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-[12px] font-medium leading-6 text-[#9B9B9B]">
        {label} {required ? ' *' : null}
      </label>
      <div className="relative">
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          className="peer block w-full border-0 px-0 py-1 text-black focus:ring-0 sm:text-sm sm:leading-6"
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2"
          aria-hidden="true"
        />
      </div>
      {isSubmitted && isInvalid && (
        <p className="mt-2 text-xs text-red-500">This field is required</p>
      )}
    </div>
  )
}

export default Input
