import React, { Component } from 'react';
import {
         BrowserRouter as Router,
         Link,
         Route
       } from 'react-router-dom';
import logo from './logo.svg';
import mob from './images/mob.png';
import * as firebase from 'firebase';
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

                        //initialize firebase
                        let config = {
                        apiKey: "AIzaSyBgDwufq6iQVVkejgwu9RU-BizIhfbE96c",
                        authDomain: "product-d8f1f.firebaseapp.com",
                        databaseURL: "https://product-d8f1f.firebaseio.com",
                        projectId: "product-d8f1f",
                        storageBucket: "product-d8f1f.appspot.com",
                        messagingSenderId: "442187147115"
                      };
                      firebase.initializeApp(config);
                       
                      //initialize main conponent's(App) state
                      this.state = {};

           }
     componentDidMount(){
     firebase.database().ref().on('value',(trending) => {
           this.setState(trending.val());
     });
     }


  render() {
    return (
          <Router>
                <div>
                       <Header />
                       <Route exact path="/" component={() => (<Home trending-data={this.state.trending} />)} />
                      <Route path="/men" component={() => (<Men trending-data={this.state.men} />)} />
                      <Route path="/women" component={() => (<Women trending-data={this.state.women} />)} />
                      <Route path="/mobile" component={() => (<Mobile trending-data={this.state.mobile} />)} />
                      <Route path="/user/:id" component={User} /> 
                </div>
          </Router>
    );
  }
}

export default App;
