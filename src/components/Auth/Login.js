import React,{useCallback, useState} from 'react'
import firebaseApp from '../../services/firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(firebaseApp);

    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        if(email && password){

           await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
        }
    }, [email,password])
  return (
    <div>
        <h1>Login</h1> 
        <form onSubmit={handleLogin}>
            <input 
                type='email' 
                placeholder='Enter Your Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type='password'
                placeholder='Enter Password here'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login