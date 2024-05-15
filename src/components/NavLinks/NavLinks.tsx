import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import classes from './NavLinks.module.scss'

interface IProps extends NavLinkProps {
  to: string
}

const NavLinks: React.FC<IProps> = ({ children, to, ...rest }) => {
  return (
    <NavLink className={classes.navLink} to={to} {...rest}>
      {children}
    </NavLink>
  )
}

export default NavLinks
