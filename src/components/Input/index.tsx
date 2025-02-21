import React from 'react'

const TextInput = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input {...props} type='text' style={{ backgroundColor: 'red' }} />
  )
}

export default TextInput