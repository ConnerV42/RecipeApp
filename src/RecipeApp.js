import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Recipe from './recipe';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
          ingredients: ["Pasta", "8 cups of water", "1 can of spaghetti sauce"],
          img: "/spaghetti.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk. Blend until creamy.",
          ingredients: ["2 scoops of ice cream", "8 ounces of milk"],
          img: "/milkshake.jpg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.",
          ingredients: ["2 slices of break", "1 avocado", "1 tablespoon of olive oil", "1 pinch of salt", "pepper"],
          img: "/avocado_toast.jpg"
        }
      ],
      nextRecipeId: 3,
      showForm: false,
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: prevState.nextRecipeId };
      return {
        nextRecipeId: prevState.nextRecipeId,
        showForm: !prevState.showForm,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  render() {
    const { showForm } = this.state; // Determines whether or not to render RecipeInput below
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({ showForm: true })} />
        {showForm ? <RecipeInput onClose={() => this.setState({ showForm: false })} onSave={this.handleSave} /> : null}
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
