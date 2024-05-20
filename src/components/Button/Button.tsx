import React, { ReactNode } from 'react'
import classes from './Button.module.scss'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button {...props} className={classes.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
