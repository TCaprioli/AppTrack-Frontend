import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css'
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import NavBar from './Navbar'
import Signup from './Signup';
import Login from './Login'
import Home from './Home'








ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path ='/apps' component={App}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
