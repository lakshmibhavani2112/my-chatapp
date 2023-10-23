import React,{useState} from 'react';
import './App.css';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Layout/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
