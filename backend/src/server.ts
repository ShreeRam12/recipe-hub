
import express from "express";
import { db } from "./db/client";
import { favouritesTable, recipesTable } from "./db/schema";
import { and, asc, eq } from "drizzle-orm";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

app.get("/api/health", (req, res) => {
    return res.status(200).json({ success: true });
});

// All recipes route - Fetch all recipes from the database
app.get("/api/all-recipes", async (req, res) => {
    try {
        const allRecipes = await db
            .select()
            .from(recipesTable)
            .orderBy(asc(recipesTable.id));
        return res.status(200).json({ all_recipes: allRecipes });
    } catch (error) {
        console.error("Error fetching all recipes:", error);
        return res.status(500).json({ error: "Failed to fetch recipes" });
    }
});

// Favourite recipes route - Handles operations related to favourite recipes
// add-to-favourites route - Add a recipe to the favourites list
app.post("/api/add-to-favourites", async (req, res) => {
    try {
        const { userId, recipeId, title, image, cookTime, servings, description } = req.body || {};
        if (!userId || !recipeId || !title) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const newFavourites = await db.insert(favouritesTable).values({
            userId,
            recipeId,
            title,
            image,
            cookTime,
            servings,
            description,
        }).returning();

        return res.status(200).json(newFavourites[0]);
    } catch (error) {
        console.error("Error adding to favourites:", error);
        return res.status(500).json({ error: "Failed to add to favourites" });
    }
});

// Get all favourite recipes route - Fetch all favourite recipes from the database
app.get("/api/favourites/:userId", async (req, res) => {
    try {
        const { userId } = req.params || {};
        const userFavourites = await db
            .select()
            .from(favouritesTable)
            .where(eq(favouritesTable.userId, Number(userId)));
        // Replace this with actual database query to fetch all favourite recipes
        return res.status(200).json({ user_favourites: userFavourites });
    } catch (error) {
        console.error("Error fetching all favourites:", error);
        return res.status(500).json({ error: "Failed to fetch favourites" });
    }
});

// Details of a recipe route - Fetch details of a specific recipe from the database
app.get("/api/detail/:recipeId", async (req, res) => {
    try {
        const { recipeId } = req.params || {};
        const recipe = await db.select().from(recipesTable).where(eq(recipesTable.id, Number(recipeId)));
        return res.status(200).json({ recipe_details: recipe });
    } catch (error) {
        console.error("Error fetching recipes details:", error);
        return res.status(500).json({ error: "Failed to fetch recipe details" });
    }
});

// Delete a recipe route - Delete a specific recipe from the database
app.delete("/api/delete-favourites/:userId/:recipeId", async (req, res) => {
    try {
        const { userId, recipeId } = req.params || {};
        await db
            .delete(favouritesTable)
            .where(
                and(
                    eq(favouritesTable.userId, Number(userId)),
                    eq(favouritesTable.recipeId, Number(recipeId))
                ),
            );
        // Replace this with actual database query to delete a recipe
        return res.status(200).json({ success: true, message: "Recipe deleted successfully" });
    } catch (error) {
        console.error("Error deleting recipe:", error);
        return res.status(500).json({ error: "Failed to delete recipe" });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});