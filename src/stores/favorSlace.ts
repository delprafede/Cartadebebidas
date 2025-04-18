
import { StateCreator } from "zustand"
import { SelectDrink } from "../types"
import { createRecipesSlace } from "./recipeSlace"


export type FavorSlateType = {
    favorites: SelectDrink[]
    handleClickFavorites: (recipe: SelectDrink) => void
    favoritesExists: (id: SelectDrink["idDrink"]) => boolean
}


export const createFavorSlace: StateCreator<FavorSlateType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorites: (recipe) => {
        //hacemos un delete 
        if (get().favoritesExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink != recipe.idDrink)
            }))
        } else {
            //guardamos el recipe(pusheamos hacia el array de favoritos)
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipesSlace(set, get , api)
    },

    favoritesExists: (id) => {
        return get().favorites.some((favorito) => favorito.idDrink === id)
    }
})