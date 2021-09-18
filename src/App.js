import React, { Component } from 'react'
import  './App.css';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Navbar from './components/Navbar';


export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
        <Navbar></Navbar>
       {/* navbar */}
         <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/recipes/" component={Recipies}/>
          <Route path="/recipe/:id" component={SingleRecipe}/>
          <Route  component={Default}/>
          </Switch> 
         </main>
      </Router>
      
    )
  }
}
