import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import TitleText from '../../components/TitleText/TitleText.tsx'
import classes from './ErrorPage.module.scss'

const ErrorPage: React.FC = () => {
  const error: any = useRouteError() as Error

  return (
    <div className={classes.errorPage}>
      <TitleText>Oops!</TitleText>
      <p className={classes.statusText}>
        Sorry, an unexpected error has occurred.
      </p>
      <p className={classes.statusText}>{error.statusText || error.message}</p>
      <Link className={classes.home} to={'/'}>
        Home
      </Link>
    </div>
  )
}

export default ErrorPage
