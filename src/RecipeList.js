import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired
    }
    render() {
        const recipes = this.props.recipes.map((r, i) => (
            <Recipe onDelete={this.props.onDelete} key={i} {...r} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;