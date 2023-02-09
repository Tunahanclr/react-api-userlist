import React,{useState,useEffect} from 'react'
import axios from'axios'
import SingleUser from './SingleUser'
function UserList() {
    const [users,setUsers]=useState([])
    const fetchUsers = async ()=>{
            const response= await axios.get('https://randomuser.me/api/?results=5')
            setUsers(response.data.results)
    }

    useEffect(() => {
            fetchUsers()
    }, [])
    
  return (
    <div>
        <div className="user-list">
            <ul>
                {users.map((user,idx)=>(
                    <li><SingleUser user={user} key={idx} /></li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default UserList