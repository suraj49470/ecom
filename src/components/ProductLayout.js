import React from 'react';


export class ProductLayout extends React.Component{
                constructor(props){
                    super(props);
        
                }




    render(){
  
   console.log(this.props);
         return(

              <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <div className="P_container">
                                <div className="imgContainer">
                                                <img src={this.props.productdata.product_image} className="img img-responsive"></img>
                                 </div>
                                     <div className="P_footer text text-center">
                                                 <p className="text-color text-uppercase">{this.props.productdata.product_name}</p>
                                                 <p className="text-color text-uppercase">{this.props.productdata.product_price}</p>
                                                  <button className={`btn btn-danger text-uppercase text-color-back  ${this.props.addToCartClass}`}>Add to Cart</button>                                    
                                      </div>

                        </div>
                        
               </div>

         	   );

    }

}