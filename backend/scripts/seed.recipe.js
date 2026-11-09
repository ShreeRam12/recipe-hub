const { neon } = require("@neondatabase/serverless");

const databaseUrl = 'postgresql://neondb_owner:npg_g5fHKnxcUal0@ep-gentle-cell-b47012fo-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

if (!databaseUrl) {
    throw new Error("Database URL is not defined");
}

const sql = neon(databaseUrl);

const RECIPES = [
    {
        name: "Classic Veggie Pasta",
        ingredients: [
            "200 g pasta",
            "2 medium tomatoes",
            "1/4 cup fresh basil",
            "3 garlic cloves",
            "2 tbsp olive oil",
        ],
        short_description: "A simple and comforting vegetarian pasta with fresh herbs.",
        rating: 4.8,
        prep_time_minutes: 25,
        servings: 2,
        calorie: 420,
        protein: 15,
        carbs: 54,
        fat: 12,
        thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        instructions: [
            "Boil the pasta until al dente.",
            "Saute garlic in olive oil, then add tomatoes and basil.",
            "Toss with pasta and serve warm.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Crispy Chicken Wrap",
        ingredients: [
            "300 g chicken breast",
            "2 large tortillas",
            "1 cup shredded lettuce",
            "1 medium tomato",
            "1/2 cup yogurt sauce",
        ],
        short_description: "A crunchy chicken wrap with cool yogurt dressing.",
        rating: 4.6,
        prep_time_minutes: 20,
        servings: 2,
        calorie: 390,
        protein: 32,
        carbs: 28,
        fat: 14,
        thumbnail: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
        instructions: [
            "Cook the chicken until golden and fully done.",
            "Warm the tortilla and layer with lettuce and tomato.",
            "Add chicken and yogurt sauce, then roll tightly.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Avocado Lime Salad",
        ingredients: [
            "1 large avocado",
            "2 cups fresh spinach",
            "1 lime",
            "1 medium cucumber",
            "1 cup cooked chickpeas",
        ],
        short_description: "Fresh greens with avocado and a limey finish.",
        rating: 4.7,
        prep_time_minutes: 15,
        servings: 2,
        calorie: 310,
        protein: 12,
        carbs: 22,
        fat: 18,
        thumbnail: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
        instructions: [
            "Chop vegetables into bite-size pieces.",
            "Toss with chickpeas and spinach.",
            "Dress with lime juice and olive oil before serving.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Paneer Tikka",
        ingredients: [
            "300 g paneer",
            "1 large bell pepper",
            "1 medium onion",
            "1/2 cup yogurt",
            "2 tbsp tikka spices",
        ],
        short_description: "Smoky grilled paneer with colorful vegetables.",
        rating: 4.9,
        prep_time_minutes: 30,
        servings: 3,
        calorie: 460,
        protein: 24,
        carbs: 30,
        fat: 21,
        thumbnail: "https://unsplash.com/photos/85gaOsWNsHo/download?force=true&w=800",
        instructions: [
            "Marinate paneer with yogurt and spices.",
            "Grill paneer and vegetables until lightly charred.",
            "Serve over rice or with naan.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Berry Oat Pancakes",
        ingredients: [
            "1 cup rolled oats",
            "3/4 cup milk",
            "1 ripe banana",
            "1 cup mixed berries",
            "2 large eggs",
        ],
        short_description: "Fluffy pancakes packed with fruit and fiber.",
        rating: 4.5,
        prep_time_minutes: 20,
        servings: 2,
        calorie: 350,
        protein: 16,
        carbs: 42,
        fat: 10,
        thumbnail: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
        instructions: [
            "Blend oats, milk, banana, and eggs into a batter.",
            "Pour onto a hot pan and cook until bubbles form.",
            "Top with fresh berries and serve.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Garlic Butter Shrimp",
        ingredients: [
            "300 g peeled shrimp",
            "4 garlic cloves",
            "3 tbsp butter",
            "1 lemon",
            "2 tbsp chopped parsley",
        ],
        short_description: "Quick skillet shrimp with a bright lemon-garlic finish.",
        rating: 4.8,
        prep_time_minutes: 18,
        servings: 2,
        calorie: 330,
        protein: 28,
        carbs: 8,
        fat: 19,
        thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        instructions: [
            "Sear shrimp in butter until pink.",
            "Add garlic and lemon juice for extra flavor.",
            "Finish with parsley and serve immediately.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Chickpea Coconut Curry",
        ingredients: [
            "2 cups cooked chickpeas",
            "400 ml coconut milk",
            "2 medium tomatoes",
            "1 large onion",
            "2 tbsp curry powder",
        ],
        short_description: "Creamy, warming curry with lentils and rich spices.",
        rating: 4.9,
        prep_time_minutes: 35,
        servings: 4,
        calorie: 480,
        protein: 18,
        carbs: 38,
        fat: 22,
        thumbnail: "https://images.unsplash.com/photo-1547592180-85f173990554",
        instructions: [
            "Saute onion and spices until aromatic.",
            "Add tomato and chickpeas, then pour in coconut milk.",
            "Simmer until thick and serve with rice.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Herb Roasted Potatoes",
        ingredients: [
            "750 g potatoes",
            "2 tbsp fresh rosemary",
            "4 garlic cloves",
            "3 tbsp olive oil",
            "1 tsp salt",
        ],
        short_description: "Golden roasted potatoes with a savory herb crust.",
        rating: 4.4,
        prep_time_minutes: 30,
        servings: 3,
        calorie: 260,
        protein: 6,
        carbs: 33,
        fat: 11,
        thumbnail: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
        instructions: [
            "Cube potatoes and toss with oil and seasoning.",
            "Roast in a hot oven until crisp and golden.",
            "Add fresh rosemary before serving.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Mango Chia Parfait",
        ingredients: [
            "1 large mango",
            "3 tbsp chia seeds",
            "1 cup yogurt",
            "2 tbsp honey",
            "1/2 cup granola",
        ],
        short_description: "A creamy breakfast parfait with tropical fruit.",
        rating: 4.7,
        prep_time_minutes: 10,
        servings: 2,
        calorie: 280,
        protein: 11,
        carbs: 32,
        fat: 9,
        thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        instructions: [
            "Layer yogurt and mango in serving glasses.",
            "Sprinkle chia seeds and granola between layers.",
            "Drizzle with honey and enjoy chilled.",
        ],
        created_at: new Date().toISOString(),
    },
    {
        name: "Turkey Quinoa Bowl",
        ingredients: [
            "300 g ground turkey",
            "1 cup cooked quinoa",
            "2 cups fresh spinach",
            "2 tbsp pumpkin seeds",
            "1 large avocado",
        ],
        short_description: "A protein-rich bowl with grains, greens, and crunch.",
        rating: 4.8,
        prep_time_minutes: 25,
        servings: 2,
        calorie: 520,
        protein: 36,
        carbs: 34,
        fat: 24,
        thumbnail: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        instructions: [
            "Cook quinoa until fluffy and tender.",
            "Season turkey and sauté with vegetables.",
            "Assemble the bowl with greens, quinoa, turkey, and avocado.",
        ],
        created_at: new Date().toISOString(),
    },
];

async function seed() {
    await sql`
   CREATE TABLE IF NOT EXISTS recipes (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       ingredients JSONB NOT NULL,
       short_description TEXT NOT NULL,
       rating DECIMAL(2, 1) NOT NULL,
       prep_time_minutes DECIMAL,
       servings INTEGER,
       calorie INTEGER,
       protein INTEGER,
       carbs INTEGER,
       fat INTEGER,
       thumbnail TEXT,
       instructions JSONB NOT NULL,
       created_at TIMESTAMP DEFAULT NOW()
   );
   `;
    for (const recipe of RECIPES) {
        await sql`
        INSERT INTO recipes (
        name,
        ingredients,
        short_description,
        rating,
        prep_time_minutes,
        servings,
        calorie,
        protein,
        carbs,
        fat,
        thumbnail,
        instructions,
        created_at
        ) 
        VALUES (
            ${recipe.name},
            ${JSON.stringify(recipe.ingredients)},
            ${recipe.short_description},
            ${recipe.rating},
            ${recipe.prep_time_minutes},
            ${recipe.servings},
            ${recipe.calorie},
            ${recipe.protein},
            ${recipe.carbs},
            ${recipe.fat},
            ${recipe.thumbnail},
            ${JSON.stringify(recipe.instructions)},
            ${recipe.created_at}
         );`;
    }
    console.log(`Seeding completed. ${RECIPES.length} recipes inserted.`);
}

seed().catch((error) => {
    console.error("Error seeding recipes:", error);
});

module.exports = [
    {
        name: "seed",
        handler: seed,
    },
];