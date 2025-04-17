
import { StateCreator } from "zustand"

export type FavorSlateType = {
    favorites: []
}

export const FavorSlace: StateCreator<FavorSlateType> = () => ({
    favorites: []
})