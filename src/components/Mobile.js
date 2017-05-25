
import React from 'react';
import firebase from '.././firebase';
import {ProductLayout} from './ProductLayout';
import loadjson from './loader';
export class Mobile extends React.Component{
    constructor(props){
         super(props);
         this.state = {
      "mobile" : loadjson
     };
   }

   componentWillMount(){
             this.setState({"mobile":loadjson});
     }
   componentDidMount(){

      firebase.database().ref('mobile').on('value',(mobile) => {
           this.setState({"mobile":mobile.val()});
      });
  
     }


           render(){
               
                      return(

                                 <div className="container">
                                     <div className="row">
                                     
                                   {this.state.mobile.map((mobile,index) =>  <ProductLayout key={index} productdata={mobile} /> )}
                                     </div>
                                 </div>
                      	);

           }


}