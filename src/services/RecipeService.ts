import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse } from "../schemas/recipe-schemas"
import { SearchFilter } from "../types"



export const getCategories = async () => {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(URL)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}


export const getRecipes = async (searchFilters: SearchFilter) => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.categories}&i=${searchFilters.ingredient}`
    const { data } = await axios(URL)
    const result = DrinksAPIResponse.safeParse(data)
    if (result.success) {
        return result.data
    }
}