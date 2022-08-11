import React,{Fragment} from 'react'
import {useNavigate} from 'react-router-dom'
import classes from './OrderSummary.module.css'
export const OrderSummary =()=>{
    const navigate=useNavigate()
    return(
        <>
        <div className={classes.order}>
            Order Confirmed!
        </div>
        <div className={classes.actions}>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
        </>

    )
}