import React from 'react'
import {useAuth} from './Auth'
import {Navigate,useLocation} from 'react-router-dom'

export const RequiredAuth = ({children}) => {
    const auth= useAuth()
    const location=useLocation()
    if (!auth.formValues){
      return <Navigate to='/login' state={{path:location.pathname}}/>
        
    }
    return children
  
}

