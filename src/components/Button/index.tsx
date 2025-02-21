import React, { JSX } from 'react'

interface Props {
  children: JSX.Element;
}

const Button = ({ children }: Props) => {
  return (
    <button style={{ padding: '1em' }}>{children}</button>
  )
}

export default Button