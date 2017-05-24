import React from 'react';
import {
         BrowserRouter as Router,
         Link,
         Route
       } from 'react-router-dom';

export class User extends React.Component{

  


           render(){
                      console.log(this.props.match.params)             
                      return(

                        <h1>User Section</h1>
                      	);

           }


}