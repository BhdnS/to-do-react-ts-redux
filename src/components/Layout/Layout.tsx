import React from 'react'
import { Outlet } from 'react-router-dom'
import NavLinks from '../NavLinks/NavLinks.tsx'
import navLinksData from '../NavLinks/navLinksData.ts'
import classes from './Layout.module.scss'

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            {navLinksData.map((navLink) => (
              <NavLinks to={navLink.to} key={navLink.id}>
                {navLink.name}
              </NavLinks>
            ))}
          </ul>
        </nav>
      </header>
      <div className={classes.containerOutlet}>
        <Outlet />
      </div>
      <footer className={classes.footer}>
        <h1>Todo List</h1>
        <p>2024</p>
      </footer>
    </>
  )
}

export default Layout
