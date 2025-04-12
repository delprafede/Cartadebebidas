import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, Drinks, SearchFilter } from "../types"


export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => void
    searchRecipes: (searchFilters: SearchFilter) => void
}
//seteamos para guardar en el stado despues de typear 
export const createRecipesSlace: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (searchFilters) => {
        const drinks = await getRecipes(searchFilters)
        console.log(drinks)
        set({ 
            drinks 
        })
    }
})