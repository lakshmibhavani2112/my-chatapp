import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <Layout>
      React Chat App
      <Login />
      <hr/>
      <Signup/>
    </Layout>
  );
}

export default App;
