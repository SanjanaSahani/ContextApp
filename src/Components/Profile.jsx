import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
const {user} = useContext(UserContext);

 if(!user) return <div  className='text-3xl font-bold text-gray-900'>Please Login</div>

 return <div className='text-3xl font-bold text-gray-900'>Welcome {user.username}</div>
}

export default Profile;