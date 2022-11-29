'use strict'

const recipeCard=document.getElementById('recipe-card');
const recipeName=document.getElementById('data-recipe-name');
const recipeImg=document.getElementById('data-recipe-img');
const recipeImgContainer=document.getElementById('data-recipe-img-container');
const recipeFull=document.getElementById('data-recipe-full');
const button=document.querySelector('main__button');
const input=document.querySelector('main__input');

//button.addEventListener('click',(event)=>{
  //  event.preventDefault();
    //searchRecipe(main__input.value);
//})

const renderRecipeData=data=>{
    const image=data.image_url;
    const{stats}=data;

    recipeName.textContent=data.name;
    recipeImg.setAttribute('src',image);
    renderRecipeFull(stats);
}

const renderRecipeFull=stats=>{
    recipeStats.innerHTML='';
    stats.forEach(stat => {
        const statElement=document.createElement("div");
        const statElementName=document.createElement("div");
        const statElementAmount=docuemet.createElement("div");
        statElementName.textContent=stat.stat.title;
        statElementAmount.textContent=stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        recipeFull.appendChild(statElement);
        
    });
}

const renderNotFound=()=>{
    recipeName.textContent='Oh NO!- Receta no encontrada'
    recipeImg.setAttribute('src','descarga.png');
    recipeImg.style.background= '#fff';

}

const searchRecipe=async(event)=>{
    event.preventDefatult();
    try{
        const value=event.target.querySelector('imput').value;
        const respose=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?sarch=${value.toLowerCase()}`)
        const data=await response.json();
        renderRecipeData(data);
    } catch{
        renderNotFound()
    }
}