import axios from "axios"
import { CategoriesAPIResponseSchema } from "../schemas/recipe-schemas"
export const getCategories= async ()=> {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(URL)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if(result.success) {
        return result.data
    }
}