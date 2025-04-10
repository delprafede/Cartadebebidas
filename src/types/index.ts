import {z} from "zod"
import { CategoriesAPIResponseSchema } from "../schemas/recipe-schemas"


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>