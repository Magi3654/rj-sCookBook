'use strict'

import { forkSearch } from "./fetch.js ";

async function showRecipe(){
    const recipes=document.getElementById('recipes');
    const search=document.getElementById('search').value;
    const cookingbook=await comeRecipes(search);
    cookingbook.data.cookingbook.map(recipe=>{
        console.log(recipe.title);
        
        const recipeName=document.createElement('p');
        recipeName.texcontent=recipe.title;
        const imgRecipe=document.createElement('img');
        imgRecipe.src=recipe.image_url;
        imgRecipe.alt=recipe.name;
        imgRecipe.style.widows="95px";

        recipes.append(imgRecipe);
        recetas.append(recipeName);
    })
}

async function comeRecipes(data){
    return await forkSearch(data.toLowerCase());
}

async function cleanData(){
    search.value="";
    recipes.remove();
}

const cookingBook= document.getElementById('cookingBook');
const buscar= document.createElement('input');
buscar.id= "search";
buscar.style.width= "185px";
const boton= document.createElement('button');
boton.textContent= "RJ's Search";
boton.onclick= showRecipe;
const clean= document.createElement('button');
clean.textContent= "Clean";
clean.onclick= cleanData;

cookingBook.append(buscar);
cookingBook.append(boton);
cookingBook.append(clean);