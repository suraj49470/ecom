import React from 'react';
import {ProductLayout} from './ProductLayout';

export class Men extends React.Component{
     constructor(props){
	       super(props);
	       console.log(this.props);
           this.state = {
                 
           }	      
     }

           render(){
               
               
                      return(

                                 <div className="container">
                                     <div className="row">
                                        <ProductLayout />
                                        <ProductLayout />
                                        <ProductLayout />
                                     </div>
                                 </div>
                      	);

           }


}