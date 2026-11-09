CREATE TABLE "favourites" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"recipe_id" integer NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"cook_time" text NOT NULL,
	"servings" text NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"ingredients" jsonb NOT NULL,
	"short_description" text NOT NULL,
	"rating" numeric(2, 1) NOT NULL,
	"prep_time_minutes" numeric,
	"servings" integer,
	"calorie" integer,
	"protein" integer,
	"carbs" integer,
	"fat" integer,
	"thumbnail" text,
	"instructions" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now()
);
