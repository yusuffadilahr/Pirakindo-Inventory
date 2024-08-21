import React from 'react'

const InputCustom = ({type, className, placeholder,name, required, autoComplete}) => {
  return (
    <input type={type} className={className} placeholder={placeholder} name={name} required autoComplete={autoComplete} />
  )
}

export default InputCustom
