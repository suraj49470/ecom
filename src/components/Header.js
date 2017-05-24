import React from 'react';
import {
         BrowserRouter as Router,
         Link,
         Route
       } from 'react-router-dom';

export class Header extends React.Component{


           render(){
               
                      return(

                            <nav className="navbar navbar-inverse navbar-fixed-top">
							  <div className="container-fluid">
							    <div className="navbar-header">
							      <Link className="navbar-brand" to="/">Ecom</Link>
							    </div>
							    <ul className="nav navbar-nav">
							      <li><Link to="/men">Men</Link></li>
							      <li><Link to="/women">women</Link></li>
							      <li><Link to="/mobile">mobile</Link></li>

							    </ul>
							  </div>
							</nav>
                      	);

           }


}