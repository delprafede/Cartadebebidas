
import { StateCreator } from "zustand"
import { SelectDrink } from "../types"



export type FavorSlateType = {
    favorites: SelectDrink[]
    handleClickFavorites: (recipe: SelectDrink) => void
    favoritesExists: (id: SelectDrink["idDrink"]) => boolean
    loadFormStorage: () => void
}


export const createFavorSlace: StateCreator<FavorSlateType> = (set, get) => ({
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
        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },

    favoritesExists: (id) => {
        return get().favorites.some((favorito) => favorito.idDrink === id)
    },

    loadFormStorage: () => {
        const storageFavorites = localStorage.getItem("favorites")
        if (storageFavorites) {
            set({
                favorites: JSON.parse(storageFavorites)
            })

        }
    }
})