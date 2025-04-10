

import { create} from "zustand"
import { createRecipesSlace, RecipesSliceType } from "./recipeSlace"

export const useAppStore = create<RecipesSliceType>((...a)=> ({
    // state
    ...createRecipesSlace(...a)
}))