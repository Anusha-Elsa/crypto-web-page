import React from 'react'
import {useNavigate} from 'react-router-dom'
import classes from './Home.module.css'
import bitcoin from '../assets/bitcoin.jpeg'
export const Home=()=>{
   
    return (
        <section className={classes.home}>
            <div className={classes.img}><img src={bitcoin} alt="bitcoin image" /></div>
        <h1>Welcome to the world of Crypto</h1>
        
        </section>
    )
}