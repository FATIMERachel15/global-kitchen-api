const mongoose = require('mongoose');

//Recipe schema definition with validation and indexing
const recipeSchema = new mongoose.Schema(
    {
        //Required fields with validation
        title: {
            type: String,
            required: true,
            trim: true,
        },

        //List of ingredients as an array of strings
        ingredients: {
            type: [String],
            required: true,
        },

        //Cooking instructions as a string
        instructions: {
            type: String,
            required: true,
        },

        //Cooking time in minutes
        coookingTime: {
            type: Number,
            required: true,
            min: 1,
        },

        //Difficulty level with predefined options
        difficulty: {
            type: String,
            required: true,
            enum: ['Easy', 'Medium', 'Hard'],
        },

        //Category for indexing and filtering
        category: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

recipeSchema.index({ category: 1 });

module.exports = mongoose.model('Recipe', recipeSchema);