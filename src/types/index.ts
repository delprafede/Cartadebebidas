import { z } from "zod"
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinkDetailsAPIResponse, DrinksAPIResponse, SearchFilterSchema } from "../schemas/recipe-schemas"


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type SelectDrink = z.infer<typeof DrinkDetailsAPIResponse>