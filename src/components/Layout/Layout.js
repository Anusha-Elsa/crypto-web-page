import {Fragment} from 'react'
import { Navbar } from '../Navbar'

export const Layout=({children})=>{
    return (
        <Fragment>
            <Navbar/>
            <main>{children}</main>
        </Fragment>
    )
}