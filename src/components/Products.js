import React,{Fragment} from 'react'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'
import classes from './Products.module.css'
export const Products=()=>{
    const navigate=useNavigate()
    const ProductsNavLink=({isActive})=>{
        return {fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'underline' : 'none'}
    }
    return (
        <div className={classes.list}>
        <div className={classes.control}>
            <input type="search" placeholder='Search Products'/>
        </div>
        <header className={classes.header}>
            <nav>
                <ul>
                    <NavLink style={ProductsNavLink} to='featured'>Featured</NavLink>
                    <li>
                        <NavLink style={ProductsNavLink}to='new'>new</NavLink>
                    </li>
                    <li className={classes.action}>
                        <button onClick={()=>navigate('/order-summary',{replace:true})}>Place order</button>
                    </li>
                    
                </ul>
            </nav>
           
        </header>
        
        <Outlet/>
        </div>
    )
}