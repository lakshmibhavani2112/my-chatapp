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
    <div className='w-screen h-screen bg-zinc-200 flex justify-center'>
        <div className='w-96 rounded-lg bg-white opacity-90 my-20'>
            <div className='flex justify-center my-4'>
                <h1 className='text-2xl text-zinc-600 font-bold py-4'>Login</h1>
            </div>
         
            <div className='flex-col justify-center'>
                <form onSubmit={handleLogin}>
                    <div className='mb-2 px-4 py-4'>
                        <input 
                            type='email' 
                            placeholder='Enter Address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='border-2 rounded-md w-full p-2'
                            required
                        />
                    </div>
                    <div className='mb-2 px-4 py-4'>
                        <input 
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className='border-2 rounded-md w-full p-2'
                            required
                        />
                    </div>
                    <div className='px-4 py-4'>
                        <button className='w-full rounded-lg p-2 bg-lime-600 text-white font-bold hover:bg-blue-800'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login