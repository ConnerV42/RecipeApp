import React, { Component } from 'react';
import './recipe.css';
import PropTypes from 'prop-types';

class Recipe extends Component {
    static defaultProps = {
        onDelete() { }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    render() {
        // Destructuring this object (title is valid as long as this.props.title exists)
        const { title, img, instructions, id, onDelete } = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li> // one line of code means you don't need to return from map
        ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients: </h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions</h4>
                    <p>
                        {instructions}
                    </p>
                    <button type="button" onClick={() => onDelete(id)}>DELETE</button>
                </div>
            </div>
        );
    }
}

export default Recipe;