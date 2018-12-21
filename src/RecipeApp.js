import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="pasta"
          ingredients={['flour', 'water']}
          instructions="Mix Ingredients"
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg?crop=1xw:1xh;center,top&resize=768:*"
        />
      </div>
    );
  }
}

export default RecipeApp;
