import React, { Component } from 'react';
import RecipesList from '../components/RecipesList';
import Search from '../components/Search';

import { recipeData } from '../data/tempList';
export default class Recipies extends Component {
    constructor(props){
        super(props);
        this.getRecipes=this.getRecipes.bind(this);
        this.state={
            recipes:recipeData,
            search:'',
            url:"https://forkify-api.herokuapp.com/api/search?q=pizza",
            baseUrl:`https://forkify-api.herokuapp.com/api/search?`,
            query:'q=',
            error:''
            
        }

    };
    async getRecipes(){
    
      
        await fetch(this.state.url).then(response=>{ 
          if(response.status===200){ 
            return response.json().then((result)=>{
              // console.log(result.count);
     
             
                 // console.log('zero result');
                  
               
               
               
                 this.setState({
                   recipes:result.recipes,
                   error:''
               })
               
             
             },
             (error)=>{
             console.log(error);
           }
           )
          }else{
           return this.setState({
              error:"sorry not recipe found please try again with another keywords"
            }) 
          } 
        } )
    }

    componentDidMount(){
      this.getRecipes();
    }

    handleChange=(e)=>{
        this.setState({
            search:e.target.value
           
        })
        console.log(this.state.search);
    };
    handleSubmit = (e) =>{
      e.preventDefault();
      const{baseUrl,query,search}=this.state;

      this.setState({
        url:`${baseUrl}${query}${search}`,
        search:"",
      },
      ()=>this.getRecipes()
      )
    }


    render() {
        return (
          <>
          <Search search={this.state.search} 
          handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
        {this.state.error?(
        <div className="container p-5">

           <div className="alert alert-danger"> {this.state.error}</div>
        </div>
        
       ): <RecipesList recipes={ this.state.recipes}/>}
         
          </>
        )
    }
}
