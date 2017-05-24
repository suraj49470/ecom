import React from 'react';


export class ProductLayout extends React.Component{


    render(){
        const img = "https://firebasestorage.googleapis.com/v0/b/product-d8f1f.appspot.com/o/ecom_product_images%2Fmob.png?alt=media&token=8306cd9e-b5e9-4d58-a504-8b8aada03b9f";

         return(

              <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <div className="P_container">
                                <div className="imgContainer">
                                                <img src={img} className="img img-responsive"></img>
                                 </div>
                                     <div className="P_footer text text-center">
                                                 <p className="text-danger">IPhone</p>
                                                 <p className="text-danger">Rs.30000</p>
                                                 <button className="btn btn-danger">Add to Cart</button>
                                      </div>

                        </div>
                        
               </div>

         	   );

    }

}