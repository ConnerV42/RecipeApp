import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
                ingredients: ["Pasta", "8 cups of water", "1 can of spaghetti sauce"],
                img: "/spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk. Blend until creamy.",
                ingredients: ["2 scoops of ice cream", "8 ounces of milk"],
                img: "/milkshake.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.",
                ingredients: ["2 slices of break", "1 avocado", "1 tablespoon of olive oil", "1 pinch of salt", "pepper"],
                img: "/avocado_toast.jpg"
            }
        ]
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render() {
        const recipes = this.props.recipes.map((r, i) => (
            <Recipe key={i} {...r} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;