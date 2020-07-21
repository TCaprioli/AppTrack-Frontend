import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './pages/App';
import NavBar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import AppShow from './pages/AppShow';

const history = createBrowserHistory;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <NavBar history={history} />

        <Route exact path="/" component={Home} />
        <Route exact path="/applications" component={App} />
        <Route  exact path="/applications/more-info" component={AppShow} />
        <Route  exact path="/signup" component={Signup} />
        <Route  exact path="/login" component={Login} />

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
