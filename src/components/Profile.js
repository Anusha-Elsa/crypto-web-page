import React from 'react'
import {useAuth} from './Auth'
import {useNavigate} from 'react-router-dom'
import classes from './Profile.module.css'

export const Profile = () => {
    const auth = useAuth()
    const navigate=useNavigate()
    

    
    const handleLogout=()=>{
        auth.Logout()
        navigate('/')
    }
  return (
    <section className={classes.profile}>
    <h1>Your User Profile</h1>
    <form className={classes.form}>
    <div className={classes.control}>
        <label>welcome <div className={classes.name}>{auth.formValues.username}</div></label>
        <div className={classes.action}>
          <button onClick={handleLogout}>Logout</button>
          </div>
    </div>
    </form>
    </section>
  )
}
