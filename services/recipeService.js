const Recipe = require("../models/Recipe");

//See all recipes, optionally filtered by category
const getAllRecipes = async (category) => {
  const filter = category ? { category } : {};

  return await Recipe.find(filter);
};

//Create a new recipe with validation for cooking time
const createRecipe = async (recipeData) => {
  if (recipeData.cookingTime <= 0) {
    throw new Error("Cooking time must be positive");
  }

  const existingRecipe = await Recipe.findOne({ title: recipeData.title });
  if (existingRecipe) {
    throw new Error("A recipe with this title already exists");
  }

  return await Recipe.create(recipeData);
};

//Update an existing recipe by ID 
const updateRecipe = async (id, data) => {
  return await Recipe.findByIdAndUpdate(id, data, {
    new: true,
  });
};

//Delete a recipe by ID
const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};