import React from 'react';
import {
         BrowserRouter as Router,
         Link,
         Route
       } from 'react-router-dom';

export class Header extends React.Component{


           render(){
               
                      return(

                            <nav className="navbar navbar-inverse navbar-fixed-top top-nav">
							  <div className="container-fluid">
							    <div className="navbar-header">
							      <Link className="navbar-brand text-uppercase top-nav-head" to="/"><span className="glyphicon glyphicon-shopping-cart"></span></Link>
							    </div>
							    <ul className="nav navbar-nav top-nav">
							      <li><Link className="text-uppercase" to="/men">men</Link></li>
							      <li><Link className="text-uppercase" to="/women">women</Link></li>
							      <li><Link className="text-uppercase" to="/mobile">mobile</Link></li>

							    </ul>
							  </div>
							</nav>
                      	);

           }


}