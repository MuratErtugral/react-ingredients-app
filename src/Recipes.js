import React from 'react'
import style from "./recipe.module.css";

const Recipes = ({title,calories,image,ingredient}) => {
  return (
    <div className={style.recipe} >
        <h1  >{title}</h1>
        <ol>
            {ingredient.map(el =>(
                <li>el.text</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />
    </div>
  )
}

export default Recipes