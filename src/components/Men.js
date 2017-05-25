import React from 'react';
import firebase from '.././firebase';
import {ProductLayout} from './ProductLayout';
import loadjson from './loader';
export class Men extends React.Component{
     constructor(props){
	       super(props);
         this.state = {
      "men" : loadjson
     };
    }

     componentWillMount(){
             this.setState({"men":loadjson});
     }
     componentDidMount(){
             firebase.database().ref('men').on('value',(men) => {
               this.setState({"men":men.val()});
           });
     }

           render(){
               
               
                      return(

                                 <div className="container">
                                     <div className="row">
                                     
                                   {this.state.men.map((men,index) =>  <ProductLayout key={index} productdata={men} /> )}
                                     </div>
                                 </div>
                      	);

           }


}