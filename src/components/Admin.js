import { useEffect, useState } from "react"
import fire from '../fire'
import Hero from "./Hero";
import Login from "./Login";

function Admin() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailErr('');
        setPasswordErr('')
    }

    const handleLogin = () => {
        clearErrors()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailErr(err.message)
                        break;
                    case 'auth/wrong-password':
                        setPasswordErr(err.message)
                        break;
                    default:
                        break;
                }
            })
    }
    const handleSignUp = () => {
        clearErrors()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailErr(err.message)
                        break;
                    case 'auth/weak-password':
                        setPasswordErr(err.message)
                        break;
                    default:
                        break;
                }
            })
    }

    const handleLogout = () => {
        fire.auth().signOut()
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs()
                setUser(user)
            } else {
                setUser("")
            }
        })
    }
    useEffect(() => {
        authListener();
    }, [])

    return (
        <div>
            {user ? (
                <Hero handleLogout={handleLogout} />
            ) : (
                <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailErr={emailErr}
                    passwordErr={passwordErr}
                />
            )}


        </div>
    )
}

export default Admin