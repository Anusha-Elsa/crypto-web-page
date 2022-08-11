import { createContext, useState,useContext} from "react";


const AuthContext=createContext(null)


export const AuthProvider=({children})=>{
    const [formValues,setformValues]=useState({})
    const Signup=(formValues)=>{
        setformValues(formValues)

    }
    const Login=(formValues)=>{
       setformValues(formValues)
    }
    const Logout=()=>{
       setformValues(null)
    }

    return (
        <AuthContext.Provider value={{formValues,Signup,Login,Logout}}>{children}</AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}