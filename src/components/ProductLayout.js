import React from 'react';


export class ProductLayout extends React.Component{
   


    render(){

         return(

              <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <div className="P_container">
                                <div className="imgContainer">
                                                <img src={this.props.productdata.product_image} className="img img-responsive"></img>
                                 </div>
                                     <div className="P_footer text text-center">
                                                 <p className="text-danger">{this.props.productdata.product_name}</p>
                                                 <p className="text-danger">{this.props.productdata.product_price}</p>
                                                 <button className="btn btn-danger">Add to Cart</button>
                                      </div>

                        </div>
                        
               </div>

         	   );

    }

}