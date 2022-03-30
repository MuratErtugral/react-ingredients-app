import React, {useState, useEffect} from 'react';
import './App.css';
import Recipes from './Recipes';

const App = () => {
  const APP_ID = "c1d47e44";
  const APP_KEY = "e34c250119c444f8809d095e3dad3900";
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(()=>{
    // getRecipes();
  },[]);

  const getRecipes =async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  
  const data = await response.json();
  setRecipes(data.hits)
  };
  
  const updateSearch = (e) => {
    setSearch(e.target.value)
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  };

  return (
    <div className='App'>
      <form onSubmit={getSearch} className="search-form">
        <input 
        className='search-bar' 
        type="text" 
        value={search}
        onChange={updateSearch} />
        <button className='search-button' type="submit">
          Search
        </button>
      </form>
      <div className='recipes' >
      {recipes.map((recipe)=>{
        <Recipes 
        key = {recipe.recipe.label}
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image} 
        ingredient = {recipe.recipe.ingredient} />
      })}</div>
    </div>
    );
};


export default App;