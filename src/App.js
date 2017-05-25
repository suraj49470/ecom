import React, { Component } from 'react';
import {
         BrowserRouter as Router,
         Link,
         Route
       } from 'react-router-dom';
import logo from './logo.svg';
import mob from './images/mob.png';
import firebase from './firebase';
import './App.css';
import {Header} from './components/Header';
import {Women} from './components/Women';
import {Mobile} from './components/Mobile';
import {Men} from './components/Men';
import {Home} from './components/Home';
import {User} from './components/User';
class App extends Component {
           constructor(){
            super();

           }
   


  render() {
    return (
          <Router>
                <div>
                       <Header />
                      <Route exact path="/" component={Home} />
                      <Route path="/men" component={Men} />
                      <Route path="/women" component={Women} />
                      <Route path="/mobile" component={Mobile} />
                      <Route path="/user/:id" component={User} /> 
                </div>
          </Router>
    );
  }
}

export default App;
