'use strict'

import { forkSearch } from "./fetch.js ";

async function showRecipe(){
    const recipes=document.getElementById('recipes');
    const search=document.getElementById('search').value;
    const cookingbook=await comeRecipes(search);
    cookingbook.data.cookingbook.map(recipe=>{
        console.log(recipe.title);
        
        const recipeName=document.createElement('p');
        recipeName.style.fontWeight="italic";
        recipeName.style.fontSize="20px";
        recipeName.texcontent=recipe.title;

        const imgRecipe=document.createElement('img');
        imgRecipe.src=recipe.image_url;
        imgRecipe.alt=recipe.name;
        imgRecipe.style.widows="95px";

        const publisher = document.createElement('p');
        publisher.style.fontSize = "15px";
        publisher.textContent = "Publisher: "+receta.publisher;

        const id = document.createElement('p');
        id.style.fontSize = "15px";
        id.textContent = "Id: "+receta.id;

        recipes.append(imgRecipe);
        
        const infoSection=document.createElement("div");
        infoSection.appendChild(recipeName);
        infoSection.appendChild(publisher);
        infoSection.appendChild(id);
        
        recipes.append(infoSection);

    })
}

async function comeRecipes(data){
    return await forkSearch(data.toLowerCase());
}

async function cleanData(){
    search.value="";
    document.getElementById('recipes').innerHTML="";
}

const cookingBook= document.getElementById('cookingBook');

const buscar= document.createElement('input');
buscar.id= "search";
buscar.style.width= "185px";
buscar.placeholder="example: Tomato...";

const boton= document.createElement('button');
boton.textContent= "RJ's Search";
boton.onclick= showRecipe;

const clean= document.createElement('button');
clean.textContent= "Clean";
clean.id="Clean"
clean.onclick= cleanData;

cookingBook.append(buscar);
cookingBook.append(boton);
cookingBook.append(clean);