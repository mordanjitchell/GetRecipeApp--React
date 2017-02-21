import React, { Component } from 'react';
import Recipe from './Components/Recipe';
import SearchBar from './Components/SearchBar';
import axios from 'axios';
import './App.css';
import RecipeList from './Components/RecipeList';
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap';

const food = 'chicken';
const API_KEY = `https://api.edamam.com/search?q=${food}&app_id=76c8b16b&app_key=d3eb94a773b87e994cc915919909226a&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`;

class App extends Component {
constructor(){
  super();
  this.state= {
    recipies: [],
    recipe:'',
    image:'',
    source:'',
    url:'',
    healthLabels: [],
    ingredientLines:[],
    calories:'',
  }
}

  componentDidMount(){
    axios.get(API_KEY)
    .then(resp => {
      this.setState({
        recipies: resp.data.hits,
        recipe: resp.data.hits[0].recipe.label,
        image: resp.data.hits[0].recipe.image,
        source: resp.data.hits[0].recipe.source,
        url: resp.data.hits[0].recipe.url,
        healthLabels: resp.data.hits[0].recipe.healthLabels,
        ingredientLines: resp.data.hits[0].recipe.ingredientLines,
        calories: resp.data.hits[0].recipe.calories

      })
      console.log(this.state.recipe)
      console.log(this.state.recipies)

    })
    .catch(err => {
      console.log(err);
    });
  }

handleSearchBarChange(e){
  this.setState({
    value: e.target.value
  });

  const newFood = e.target.value;

  axios.get(`https://api.edamam.com/search?q=${newFood}&app_id=76c8b16b&app_key=d3eb94a773b87e994cc915919909226a&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`)
  .then(resp => {
    this.setState({
      recipies: resp.data.hits,
      recipe: resp.data.hits[0].recipe.label,
      image: resp.data.hits[0].recipe.image,
      source: resp.data.hits[0].recipe.source,
      url: resp.data.hits[0].recipe.url,
      healthLabels: resp.data.hits[0].recipe.healthLabels,
      ingredientLines: resp.data.hits[0].recipe.ingredientLines,
      calories: resp.data.hits[0].recipe.calories
    });
  })
  .catch(err => {
    console.log(err);
  });
}

  render() {
    return (
      <div className="App">

      <Grid>
        <Row>
          <Col xs={12} md={8} className="box">
            <h1> Recipe Finder </h1>
        <SearchBar
          handleChange={this.handleSearchBarChange.bind(this)}
        />
        <Recipe
          recipe={this.state.recipe}
          image={this.state.image}
          source={this.state.source}
          url={this.state.url}
          healthLabels={this.state.healthLabels}
          ingredientLines={this.state.ingredientLines}
          calories={this.state.calories}
        />
        </Col>
        <RecipeList
          recipies={this.state.recipies}
        />
    </Row>
    </Grid>
  </div>

    );
  }
};

export default App;
