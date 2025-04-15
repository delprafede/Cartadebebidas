import axios from "axios"
import { CategoriesAPIResponseSchema, DrinkDetailsAPIResponse, DrinksAPIResponse } from "../schemas/recipe-schemas"
import { Drink, SearchFilter, } from "../types"



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

export const selectDrink = async (id: Drink["idDrink"]) => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(URL)
    const result = DrinkDetailsAPIResponse.safeParse(data.drinks[0])

    if (result.success) {
        return result.data
    }
}