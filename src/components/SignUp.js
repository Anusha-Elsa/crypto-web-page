import classes from "./SignUp.module.css";
import { useAuth } from "./Auth";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

export const Signup = () => {
    const navigate=useNavigate()
  const initialValues = {
    username: "",
    phonenumber: "",
    email: "",
    password: "",
  };
  const auth = useAuth();
  const [formValues, setformValues] = useState(initialValues);
  const[formerrors,setformerrors]=useState({})
  const[issubmit,setissubmit]=useState(false)


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setformerrors(validate(formValues))
    setissubmit(true)
    
      console.log(formValues)
  };
  useEffect(()=>{
    console.log(formerrors)
    
    if(Object.keys(formerrors).length===0 && issubmit){
      auth.Signup(formerrors)
      navigate('/')
      

    }

  },[formerrors])
  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    
    if(!values.username){
      errors.username='Username is required'
    }
    if(!values.email){
      errors.email='Email is required'
    }else if(!regex.test(values.email)){
      errors.email='Enter a valid email'
    }
    if(!values.phonenumber){
      errors.phonenumber='Phone number is required'
    }else if(values.phonenumber.length < 10){
      errors.phonenumber='Phone number must have 10 characters'
    }else if(values.phonenumber.length>10){
      errors.phonenumber='Phone number cannot exceed more than 10 characters'
    }
    if(!values.password){
      errors.password='Password is required'
    }else if(values.password.length < 4){
      errors.password='password must have more than 4 characters'
    }else if(values.password.length > 10){
      errors.password='Password cannot exceed more than 10 characters'
    }
    return errors;

  }
 



  return (
    
    <section className={classes.auth}>
      
      <form onSubmit={handleLogin}>
        <div className={classes.control}>
          <label>
            Username{""}
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <p className={classes.error}>{formerrors.username}</p>
        <div className={classes.control}>
          <label>
            Phonenumber{""}
            <input
              type="number"
              name="phonenumber"
              value={formValues.phonenumber}
              onChange={handleChange}
            />
          </label>

        </div>
       <p className={classes.error}>{formerrors.phonenumber}</p>
        <div className={classes.control}>
          <label>
            Email{""}
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <p className={classes.error}>{formerrors.email}</p>
        <div className={classes.control}>
          <label>
            Password{""}
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <p className={classes.error}>{formerrors.password}</p>
        <div className={classes.actions}>
          <button type="submit">Signup</button>
        </div>
      </form>
    </section>
  );
};
