import { StateCreator } from "zustand"
import { getCategories, getRecipes, selectDrink } from "../services/RecipeService"
import { Categories, Drink, Drinks, SearchFilter, SelectDrink } from "../types"


export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectdDrink: SelectDrink
    modal: boolean
    fetchCategories: () => void
    searchRecipes: (searchFilters: SearchFilter) => void
    getDetailDrink: (id: Drink["idDrink"]) => void
    closeModal: () => void
}
//seteamos para guardar en el stado despues de typear 
export const createRecipesSlace: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectdDrink: {} as SelectDrink,  // es como decirle que si existen , que los voy a agregar
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },

    searchRecipes: async (searchFilters) => {
        const drinks = await getRecipes(searchFilters)

        set({
            drinks
        })
    },
    getDetailDrink: async (id) => {
        const selectdDrink = await (selectDrink(id))
        set({
            selectdDrink,
            modal: true
        })

    },
    closeModal: () => {
        set({
            modal: false,
            selectdDrink: {} as SelectDrink
        })
    }
})