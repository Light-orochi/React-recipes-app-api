import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Recipes extends Component {
    render() {
        const {image_url,title,source_url,publisher,recipe_id}=this.props.recipe
       
        return (
            
          
           <div className="row col-10 m-auto d-block col-md-6 col-lg-4 my-4">
              <div className="card text-left my-3">
                <img className="card-img-top" src={image_url} style={{ height:"14rem"}} alt="" />
                <div className="card-body">
                  <h6 className="card-title text-capitalize">{title}</h6>
                  <h6 className="text-warning text-slanted">Provider by { publisher}</h6>
                 <div className="card-footer">
                     <Link to={`/recipe/${recipe_id}`} className="btn btn-primary mx-2"> Details</Link>
                   
                     <a href={source_url} target="blank" rel="noopener noreferrer" className="btn btn-success 
                     text-capitalize">recipe url</a>
                  
                 </div>
                </div>
              </div>   
           </div>
        )
    }
}
 

