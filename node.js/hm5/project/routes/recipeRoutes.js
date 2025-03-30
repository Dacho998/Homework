import { Router } from 'express';
import recipeController from '../controllers/recipeController.js'; 
import { recipeSchema, updateRecipeSchema } from '../schemas/schema.js';
import validateRequest from '../middlewares/validate-request.middleware.js';

const router = Router()

router.get(`/recipes`, recipeController.getRecipes);

router.get(`/recipes/:id`, recipeController.getRecipeById);

router.post(`/recipes`,
    validateRequest(recipeSchema),
    recipeController.createRecipe);

router.put(`/recipes/:id`, 
    validateRequest(updateRecipeSchema),
    recipeController.updateRecipe);

router.delete(`/recipes/:id`, recipeController.deleteRecipe);

export default router;