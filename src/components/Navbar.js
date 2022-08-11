import {NavLink} from 'react-router-dom'
import { useAuth } from './Auth'
import classes from './Navbar.module.css'

export const Navbar=()=>{
    const navlinkStyles=({isActive})=>{
        return {
            fontWeight: isActive ? 'bold': 'normal',
            textDecoration: isActive ? 'underline': 'none'
        }

    }
    const auth=useAuth()
    return (
        <header className={classes.header}>
            <NavLink  style={navlinkStyles}to='/'><div className={classes.logo}>Crypto Merchant</div></NavLink>
            
            <nav>
                <ul>
                    <li>
                        <NavLink style={navlinkStyles}to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink style={navlinkStyles} to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink style={navlinkStyles} to='/profile'>Profile</NavLink>
                    </li>
                    {/* <li>
                        <NavLink style={navlinkStyles} to='/signup'>Signup</NavLink>
                    </li> */}
                    <li>{!auth.formValues && <NavLink style={navlinkStyles} to='/login'>Login</NavLink> }</li>
                </ul>
            </nav>
        </header>
    )
}