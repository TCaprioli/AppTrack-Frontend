import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css'
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import App from './App';
import NavBar from './Navbar'
import Signup from './Signup';
import Login from './Login'
import Home from './Home'
import AppShow from './AppShow'
import Resume from './Resume'
import ResumeShow from './ResumeShow'
import Folder from './Folder'

const history = createBrowserHistory






ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <NavBar history={history}/>
        <Route exact path="/" component={Home}/>
        <Route exact path ='/applications' component={App}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/applications/more-info' component={AppShow}/>
        <Route exact path='/resumes' component={Resume}/>
        <Route exact path ='/resumes/more-info' component={ResumeShow}/>
        <Route exact path='/folders' component={Folder}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
