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
      <div>
        <h1>SignUp</h1> 
        <form onSubmit={this.handleSignup}>
            <input 
                type='email' 
                placeholder='Enter Your Email'
                value={email}
                onChange={this.onEmailChange}
            />
            <input 
                type='password'
                placeholder='Enter Password here'
                value={password}
                onChange={e => this.setState({password : e.target.value})}
            />
            <button>SignUp</button>
        </form>
      </div>
    )
  }
}

export default Signup