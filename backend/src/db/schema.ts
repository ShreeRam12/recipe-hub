import { pgTable, serial, text, jsonb, decimal, integer, timestamp } from "drizzle-orm/pg-core";

export const favouritesTable = pgTable("favourites", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull(),
    recipeId: integer("recipe_id").notNull(),
    title: text("title").notNull(),
    image: text("image").notNull(),
    cookTime: text("cook_time").notNull(),
    servings: text("servings").notNull(),
    description: text("description").notNull(),
    created_at: timestamp("created_at").defaultNow(),
});

export const recipesTable = pgTable("recipes", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    ingredients: jsonb("ingredients").$type<string[]>().notNull(),
    short_description: text("short_description").notNull(),
    rating: decimal("rating", { precision: 2, scale: 1 }).notNull(),
    prep_time_minutes: decimal("prep_time_minutes"),
    servings: integer("servings"),
    calorie: integer("calorie"),
    protein: integer("protein"),
    carbs: integer("carbs"),
    fat: integer("fat"),
    thumbnail: text("thumbnail"),
    instructions: jsonb("instructions").notNull(),
    created_at: timestamp("created_at").defaultNow(),
});