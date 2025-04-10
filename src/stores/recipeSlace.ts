import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import { Categories } from "../types"


export type RecipesSliceType = {
    categories : Categories
    fetchCategories : ()=> void
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
    }
})