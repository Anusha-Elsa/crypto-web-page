import React,{useState,useEffect} from 'react'
import { useAuth } from './Auth'
import { useNavigate,useLocation } from 'react-router-dom'
import classes from './Login.module.css'


export const Login = () => {
  const initialValues={
    username:'',
    phonenumber:'',
    password:'',
}
  const auth = useAuth()
  const [formValues,setformValues]=useState(initialValues)
  const[formerrors,setformerrors]=useState({})
  const[issubmit,setissubmit]=useState(false)
    
   
    
    const navigate=useNavigate()
    const location=useLocation()

    const redirectPath=location.state?.path || '/'

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setformValues({...formValues,[name]:value})
      

    }
    
    const handleLogin=(e)=>{
      e.preventDefault()
      setformerrors(validate(formValues))
      setissubmit(true)
      
     

        

    }
    useEffect(()=>{
      console.log(formerrors)
      
      if(Object.keys(formerrors).length===0 && issubmit){
        auth.Login(formValues)
        navigate(redirectPath, {replace:true})
        console.log(formValues)
          
       
  
      }
  
    },[formerrors])
    
    const validate=(values)=>{
      const errors={}
      
      if(!values.username){
        errors.username='Username is required'
      }
      
      
      if(!values.phonenumber){
        errors.phonenumber='Enter a registered phone number'}
      // }else if(values.phonenumber.length < 10){
      //   errors.phonenumber='Phone number must have 10 characters'
      // }else if(values.phonenumber.length>10){
      //   errors.phonenumber='Phone number cannot exceed more than 10 characters'
      // }
      if(!values.password){
        errors.password='Password is required'}
      // }else if(values.password.length < 4){
      //   errors.password='password must have more than 4 characters'
      // }else if(values.password.length > 10){
      //   errors.password='Password cannot exceed more than 10 characters'
      // }
      return errors;
    }
  
    
   
  return (
    <section className={classes.auth}>
       <form onSubmit={handleLogin}>
        <div className={classes.control}>
         
          <label>
              Username{''}
              <input type='text' name='username' value={formValues.username} onChange={handleChange}/>
          </label>
        </div>
        <p className={classes.error}>{formerrors.username}</p>
       
        <div className={classes.control}>
          <label>
              Phonenumber{''}
              <input type='number' name='phonenumber' value={formValues.phonenumber} onChange={handleChange}/>
          </label>
        </div>
        <p className={classes.error}>{formerrors.phonenumber}</p>
        <div className={classes.control}>
          <label>
              Password{''}
              <input type='password' name='password' value={formValues.password} onChange={handleChange}/>
          </label>
        </div>
        <p className={classes.error}>{formerrors.password}</p>
        <div className={classes.actions}><button type='submit'>Login</button></div>
        
          <div className={classes.actions}><button type='submit' onClick={()=>navigate('/signup')}>create your account</button></div>
        
        </form>


    </section>
    
  )
}

