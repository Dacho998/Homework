import { string, z } from 'zod';

export const recipeSchema = z.object({
    title: z.string()
    .min(1, 'Title is required')
    .max(50,'Title cannot exceed 50 characters'),
    description: z.string()
    .min(1, 'description is required')
    .max(50, 'description cannot exceed 50 characters'),
    ingredients: z.array(z.string()).min(1, "At least one ingredient is required"),
    instructions: z.array(z.string()).min(1, "At least one instruction is required"),
    cookingTime: z.number(),
    difficulty: z.enum(["easy", "medium", "hard"]).optional(),
    isVegetarian: z.boolean().optional(),
    category: z.enum(["breakfast", "lunch", "dinner", "dessert"]).optional(),
});

export const updateRecipeSchema = recipeSchema.partial()