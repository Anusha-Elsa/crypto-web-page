import {useParams} from 'react-router-dom'

export const UserDetails =()=>{
    const {userId}=useParams()
   
    return (
        <div>Details of the user {userId}</div>
    )
}