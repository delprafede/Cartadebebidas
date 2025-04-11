import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, SearchFilter } from "../types"


export type RecipesSliceType = {
    categories : Categories
    fetchCategories : ()=> void
    searchRecipes : (searchFilters : SearchFilter)=> void
}

export const createRecipesSlace: StateCreator<RecipesSliceType> = (set)=> ({
    categories: {
        drinks: []
    },
    fetchCategories : async ()=> {
      const categories= await getCategories()
    set({
        categories
    })
    },
    searchRecipes : async (searchFilters)=> {
      const filter = await getRecipes(searchFilters)
        set({filter})
    }
})