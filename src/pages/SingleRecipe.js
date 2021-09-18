import React, { Component } from 'react'
 import { Link } from 'react-router-dom';
// import { recipeData } from '../data/tempDetails';
export default class SingleRecipe extends Component {
    constructor(props){
        super(props);
       const id= this.props.match.params.id;

       this.state={
           //recipe:recipeData,
           recipe:{},
           id,
           loading:true,
       }
    }

    async componentDidMount(){
        const url=`https://forkify-api.herokuapp.com/api/get?rId=${this.state.id}`
        
        try{
             await  fetch(url,{
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }}).then(res =>  res.json()).then((result=>{
                  console.log(result.recipe);
                this.setState({
                          loading: false,
                    recipe: result.recipe
                  });
              }))
           

            // this.setState({
            //     recipe:responseData,
            //     loading:false
            // })
         
           
        }
        catch(e){
            console.log(e);

        }

    }


    render() {
        const {image_url,publisher,publisher_url ,source_url,title,ingredients}=this.state.recipe
       if(this.state.loading){
           return (
               <div className="col-10 mx-auto col-md-6 my-3">
                   <h2 className="text-uppercase text-green text-center">fETCHING DATA...</h2>
               </div>
           )
       }else{
           return <div className="container my-5">
               <div className="row ">
                   <div className="col-10 mx-auto col-md-6 ">
                       <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize"> Back to recipes</Link>
                       <img src={image_url} className="d-block w-100" alt="recipe" style={{maxHeight:"30rem"}} />

                   </div>
                   <div className="col-10 mx-auto col-md-6  ">
                       <h6 className="text-uppercase ">{title}</h6>
                       <h6 className="text-warning text-capitalize text-slanted ">provided by {publisher} </h6>
                       <a href={publisher_url} className="btn btn-primary mb-1 mr-2 text-capitalize mt-2 text-capitalise"
                       rel="noopener noreferrer" target="_blank">Publisher webpage</a>
                       <a href={source_url} className="btn btn-success mt-2 mb-1 text-capitalize mt-2 text-capitalise "
                       rel="noopener noreferrer" target="_blank">Recipes url</a>

                       <div className="list-group mt-3">
                          {ingredients.map((item,index)=>{return (<li key={index} className="list-group-item text-slanted">{item}</li>)})}
                       </div>

                   </div>
                   
               </div>
           </div>
       }
    }
}
