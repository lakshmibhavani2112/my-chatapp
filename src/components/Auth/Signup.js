import React, { Component } from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import firebaseApp from '../../services/firebase';

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    }

    handleSignup = async (e) => {
        e.preventDefault();
        const {email,password} = this.state;
        if(email && password){
            await createUserWithEmailAndPassword(
                getAuth(firebaseApp),
                email,
                password
            )
        }
    }

    onEmailChange = (e) => {
        this.setState({email : e.target.value})
    }

  render() {
    const {email,password} =  this.state;
    return (
      <div className='w-screen h-screen bg-zinc-200 flex justify-center'>
        <div className='w-96 rounded-lg bg-white opacity-90 my-20'>
            <div className='flex justify-center my-4'>
                <h1 className='text-2xl text-zinc-600 font-bold py-4'>SignUp</h1>
            </div>
         
            <div className='flex-col justify-center'>

                <form onSubmit={this.handleSignup} >
                    <div className='mb-2 px-4 py-4'>
                        <input 
                            type='email' 
                            placeholder='Email Address'
                            value={email}
                            onChange={this.onEmailChange}
                            className='border-2 rounded-md w-full p-2'
                            required
                        />
                    </div>
                    <div className='mb-2 px-4 py-4'>
                        <input 
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={e => this.setState({password : e.target.value})}
                            className='border-2 rounded-md w-full p-2'
                            required
                        />
                    </div>
                    <div className='px-4 py-4'>
                        <button className='w-full rounded-lg p-2 bg-blue-400 text-white font-bold hover:bg-blue-800'>
                            SignUp
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Signup