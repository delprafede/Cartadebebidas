

import { create} from "zustand"
import { createRecipesSlace, RecipesSliceType } from "./recipeSlace"
import { createFavorSlace, FavorSlateType } from "./favorSlace"

export const useAppStore = create<RecipesSliceType & FavorSlateType>((...a)=> ({
    // state
    ...createRecipesSlace(...a),
    ...createFavorSlace(...a)
}))