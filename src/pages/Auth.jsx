import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {UserDataContext} from '../utils/UserDataContext'

function Auth() {
    const user = React.useContext(UserDataContext)
    console.log("userContext data" , user);
    const auth = getAuth();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)

                user.setUserData(userCredential)
                console.log(user.userData);
            })
            .catch((error) => {
                setError(error.message)
            })

    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(auth, email, password)

        signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential)

            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <main>
            <form>
                <h2>{error}</h2>
                <label>
                    Email:
                </label>
                <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                <label>
                    Password:
                </label>
                <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                <div>
                    <input type="submit" value="Signup" onClick={handleSignup} className="m-3 border bg-blue-500 p-3 rounded-md text-white hover:bg-violet-500" />

                    <input type="submit" value="Login" onClick={handleLogin} className="m-3 border bg-blue-500 p-3 rounded-md text-white hover:bg-violet-500" />
                </div>
            </form>
        </main>
    )
}

export default Auth