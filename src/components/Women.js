
import React from 'react';
import firebase from '.././firebase';
import {ProductLayout} from './ProductLayout';
import loadjson from './loader';
export class Women extends React.Component{
         
         constructor(props){
			       super(props);
		           this.state = {
				      "women" : loadjson,
                      "addToCartClassProduct" : "hide"
				     };
         }
     componentWillMount(){
             this.setState({"women":loadjson,"addToCartClassProduct" : "hide"});
     }
     componentDidMount(){
             firebase.database().ref('women').on('value',(women) => {
               this.setState({"women":women.val(),"addToCartClassProduct" : "show"});
           });
     }

           render(){
               console.log(this.props);
                      return(

                                  <div className="container">
                                     <div className="row">
                                     
                                   {this.state.women.map((women,index) =>  <ProductLayout key={index} addToCartClass={this.state.addToCartClassProduct} productdata={women} /> )}
                                     </div>
                                 </div>
                      	);

           }


}