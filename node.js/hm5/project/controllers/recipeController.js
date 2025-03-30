import Recipe from '../models/models.js';  

const recipeController = {
    
    async getRecipes(req, res) {
        try {
            const recipes = await Recipe.find();
            res.status(200).json(recipes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getRecipeById(req, res) {
        try {
            const recipe = await Recipe.findById(req.params.id);
            if (!recipe) return res.status(404)
            .json({ message: 'Recipe not found' });
            res.status(200).send(recipe);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

  
    async createRecipe(req, res) {
        try {
            const {title, description, ingredients, instructions, cookingTime, difficulty, isVegetarian, category} = req.body
            const newRecipe = new Recipe ({
                title,
                description,
                ingredients,
                instructions,
                cookingTime,
                difficulty,
                isVegetarian,
                category
            })

            const savedRecipe = await newRecipe.save();
            res.status(201).send(savedRecipe);
        } catch (error) {
            res.status(400).send({
                 error: error.message });
        }
    },

 
    async updateRecipe(req, res) {
        try {
            const { id } = req.params;
            const { body } = req;
            const updatedRecipe = await Recipe.findByIdAndUpdate(id, body, 
                { new: true });

            if (!updatedRecipe) return res.status(404).send({
                 message: 'Recipe not found' });

            res.status(200).send(updatedRecipe);

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

   
    async deleteRecipe(req, res) {
        try {
            const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
            if (!deletedRecipe) {
                return res.status(404).json({ error: "Recipe not found" });
            }

            res.json({ message: "Recipe deleted successfully", deletedRecipe });
        } catch (error) {
            if (error.name === "CastError") {
                return res.status(400).json({ error: "Invalid ID format" }); 
            }
            res.status(500).send({ error: "Internal Server Error" }); 
        }
    },
}

export default recipeController;
