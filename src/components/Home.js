
import React from 'react';
import firebase from '.././firebase';
import loadjson from './loader';
import {ProductLayout} from './ProductLayout';
export class Home extends React.Component{
  constructor(props){
	       super(props);
         this.state = {
      "trend" : loadjson,
      "addToCartClassProduct" : "hide"
     };
    }

  componentWillMount(){
             this.setState({"trend":loadjson,"addToCartClassProduct" : "hide"});
     }
   componentDidMount(){

      firebase.database().ref('trending').on('value',(trend) => {
           this.setState({"trend":trend.val(),"addToCartClassProduct" : "show"});
      });
  
     }
           render(){
              return(
                <div className="container">
                     <div className="row">
                     
                   {this.state.trend.map((trend,index) =>  <ProductLayout key={index} addToCartClass={this.state.addToCartClassProduct} productdata={trend} /> )}
                     </div>
                 </div>         
                    );

           }


}