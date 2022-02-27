import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'
import { Auth } from 'aws-amplify';

async function signUp() {

    try {
        const { user } = await Auth.signUp({
            username:'ehalseyhb001',
            password:'KKkk87*&_',
            attributes: {
                email:'ehalseyhb@gmail.com',          // optional
                phone_number:'1040296539',   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}


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
            <div>
            <a href="https://wwww">sign in</a>
            <button onClick={async () =>signUp()}>sign up</button>
            </div>
        )
    }

}

export default User
