import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe />
      </div>
    );
  }
}

export default RecipeApp;
