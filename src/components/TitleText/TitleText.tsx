import React from 'react'
import classes from './TitleText.module.scss'

interface TitleTextProps {
  children: string
}

const TitleText: React.FC<TitleTextProps> = ({ children }) => {
  return <h1 className={classes.title}>{children}</h1>
}

export default TitleText
