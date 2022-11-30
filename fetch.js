'use strict';

export const forkSearch = async (recipeName) => {
  const response = await fetch ('https://forkify-api.herokuapp.com/api/v2/recipes?search='+recipeName);
  const data = await response.json();
  return data;
};