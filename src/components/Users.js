import {Outlet,useSearchParams} from 'react-router-dom'
import React,{Fragment} from 'react'

export const Users=()=>{
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'
    return (
        <>
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
        </div>
        <Outlet/>
        <div>
            <button onClick={()=>setSearchParams({filter:'active'})}>ActiveUser</button>
            <button onClick={()=>setSearchParams()}>resetFilter</button>
        </div>
        {showActiveUsers ? 'show active users' : 'show all users'}
        </>
        
    )
}