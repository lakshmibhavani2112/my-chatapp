import React from 'react'
import {getAuth} from 'firebase/auth'
import firebaseApp from '../../services/firebase';
import { Link } from 'react-router-dom';

function Header() {
  const auth = getAuth(firebaseApp);
  return (
    <header>
      <nav className='flex flex-row bg-slate-300 justify-between p-2'>
        <Link to='/' className='text-gray-900 text-2xl'>reactChat</Link>
        <div> 
            {auth.currentUser
              ? <div>
                <Link to="/chat">Profile</Link>
                <button onClick={() => auth.signOut()}>Logout</button>
              </div>
              : <div>
                <Link to="/login" className='mr-2 font-semibold hover:text-blue-600 '>Login In</Link>
                <Link to="/signup" className='mr-2 font-semibold hover:text-blue-600 '>Sign Up</Link>
              </div>}
          </div>
      </nav>
    </header>
  )
}

export default Header