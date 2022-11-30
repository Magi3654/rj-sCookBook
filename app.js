'use strict'

import { forkSearch } from "./fetch.js ";

async function showRecipe(){
    const recipes=document.getElementById('recipes');
    const search=document.getElementById('search').value;
    const cookingbook=await comeRecipes(search);
    cookingbook.data.recipes.map(recipe=>{
        console.log(recipe.title);
        
        const recipeName=document.createElement('p');
        recipeName.style.fontWeight="bold";
        recipeName.style.fontSize="2rem";
        recipeName.texcontent="Recipe: "+recipe.title;

        const imgRecipe=document.createElement('img');
        imgRecipe.src=recipe.image_url;
        imgRecipe.alt=recipe.name;
        imgRecipe.style="width: 10rem; height:10rem; objectFit=cover; objectPosittion:center";

        const publisher = document.createElement('p');
        publisher.style.fontSize = "2rem";
        publisher.textContent = "Publisher: "+recipe.publisher;

        const id = document.createElement('p');
        id.style.fontSize = "2rem";
        id.textContent = "Id: "+recipe.id;

        recipes.append(imgRecipe);
        
        const infoSection=document.createElement("div");
        infoSection.appendChild(recipeName);
        infoSection.appendChild(publisher);
        infoSection.appendChild(id);
        
        recipes.style.border="1rem solid #f3f4f3";
        recipes.style.borderRadius="1.5rem";
        recipes.append(infoSection);

    })
}

async function comeRecipes(data){
    return await forkSearch(data.toLowerCase());
}

async function cleanData(){
    search.value="";
    document.getElementById('recipes').innerHTML="";
    recipes.style.border;
}

const cookingBook= document.getElementById('cookingBook');

const buscar= document.createElement('input');
buscar.id= "search";
buscar.style= "width:100rem;";
buscar.placeholder="Example: Tomato...";

const boton= document.createElement('button');
boton.textContent= "RJ's Search";
boton.onclick= showRecipe;
boton.style= "font-size: 1.2rem; width: 10%; height: 2rem; margin: 2rem; border: none; border-radius: 1.2rem; background-color:#ff4f3; font-weight: bolder; padding: 1.2rem 2 rem;";

const clean= document.createElement('button');
clean.textContent= "Clean";
clean.id="Clean"
clean.onclick= cleanData;
clean.style= "font-size: 1.2rem; width: 10%; height: 2rem; margin: 2rem; border: none; border-radius: 1.2rem; background-color:#f3f4f3; font-weight: bolder; padding: 1.2 rem 2rem";

cookingBook.append(buscar);
cookingBook.append(boton);
cookingBook.append(clean);