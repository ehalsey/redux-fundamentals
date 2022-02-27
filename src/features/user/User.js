import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'

const User = () => {
    const user = useSelector(selectUser)

    if (user.signedIn) {
        return (
            <div className="user-item">
                {user.userName}
            </div>
        )
    } else {
        return (
            <a href="https://wwww">sign in</a>
        )
    }

}

export default User
