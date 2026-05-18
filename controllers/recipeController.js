const recipeService = require("../services/recipeService");

//Controller functions for handling recipe-related requests
const getRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeService.getAllRecipes(
      req.query.category
    );

    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

//Create a new recipe with validation for cooking time
const createRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);

    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

//Update an existing recipe by ID
const updateRecipe = async (req, res, next) => {
  try {
    const updatedRecipe =
      await recipeService.updateRecipe(
        req.params.id,
        req.body
      );

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.json(updatedRecipe);
  } catch (error) {
    next(error);
  }
};

//Delete a recipe by ID
const deleteRecipe = async (req, res, next) => {
  try {
    const deletedRecipe =
      await recipeService.deleteRecipe(
        req.params.id
      );

    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};