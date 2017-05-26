
import React from 'react';
import firebase from '.././firebase';
import {ProductLayout} from './ProductLayout';
import loadjson from './loader';
export class Mobile extends React.Component{
    constructor(props){
         super(props);
         this.state = {
      "mobile" : loadjson,
      "addToCartClassProduct" : "hide"
     };
   }

   componentWillMount(){
             this.setState({"mobile":loadjson,"addToCartClassProduct" : "hide"});
     }
   componentDidMount(){

      firebase.database().ref('mobile').on('value',(mobile) => {
           this.setState({"mobile":mobile.val(),"addToCartClassProduct" : "show"});
      });
  
     }


           render(){
               
                      return(

                                 <div className="container">
                                     <div className="row">
                                     
                                   {this.state.mobile.map((mobile,index) =>  <ProductLayout key={index} addToCartClass={this.state.addToCartClassProduct} productdata={mobile} /> )}
                                     </div>
                                 </div>
                      	);

           }


}