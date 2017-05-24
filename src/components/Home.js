
import React from 'react';


export class Home extends React.Component{


           render(){
               console.log(this.props);
                      return(
                                <div className="container-fluid text-center">
                                 <h1>Home Section</h1>
                                 <img src={this.props.imgname}></img>
                                 </div>
                      	);

           }


}