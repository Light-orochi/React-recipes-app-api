import React, { Component } from 'react'
import Recipes from './Recipes'

export default class RecipesList extends Component {

  render() {
    const { recipes } = this.props;
    return ( 
      <>
      < div className = "container py-5" >
      < div className = "row  col-md-6 m-auto d-block  text-uppercase mb-3" >

      <h1 className = "text-slanted text-center" > Recipes List </h1>

      </div>
      <div className="row ">
        {recipes.map(recipe=>(<Recipes key={recipe.recipe_id} recipe={recipe} />))}
      </div>

      </div>

      </>
      
    )
  }
}